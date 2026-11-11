// Verifica que todos los niveles se puedan completar con la solución esperada
// y que las soluciones incorrectas fallen. Ejecutar: npm run verify
import { LEVELS } from '../src/data/levels';
import { World, parseLevel } from '../src/game/world';
import { runProgram, type RobotExecutor } from '../src/game/interpreter';
import type { Condition, Stmt } from '../src/types';

let n = 0;
const id = () => `b${n++}`;
const mv = (): Stmt => ({ kind: 'move', id: id() });
const L = (): Stmt => ({ kind: 'turn', dir: 'left', id: id() });
const R = (): Stmt => ({ kind: 'turn', dir: 'right', id: id() });
const rep = (times: number, body: Stmt[]): Stmt => ({ kind: 'repeat', times, body, id: id() });
const until = (body: Stmt[]): Stmt => ({ kind: 'until_goal', body, id: id() });
const ifs = (cond: Condition, then: Stmt[], els: Stmt[] | null = null): Stmt => ({ kind: 'if', cond, then, else: els, id: id() });
const seq = (s: string): Stmt[] => [...s].map((c) => (c === 'F' ? mv() : c === 'L' ? L() : R()));

/** Cuenta los bloques como Blockly: "al ejecutar" + cada instrucción + cada pregunta de los "si". */
const countBlocks = (prog: Stmt[]): number =>
  prog.reduce((acc, s) => {
    if (s.kind === 'repeat' || s.kind === 'until_goal') return acc + 1 + countBlocks(s.body);
    if (s.kind === 'if') return acc + 2 + countBlocks(s.then) + (s.else ? countBlocks(s.else) : 0);
    return acc + 1;
  }, 0);

function executor(levelId: number): RobotExecutor {
  const w = new World(parseLevel(LEVELS[levelId - 1]));
  return {
    move: async () => !w.move().crashed,
    turn: async (s) => w.turn(s),
    check: (c) => (c === 'obstacle_ahead' ? w.obstacleAhead() : c === 'path_clear' ? !w.obstacleAhead() : false),
    atGoal: () => w.atGoal(),
    isWon: () => w.isWon(),
    hasGoal: () => !!w.level.goal,
    starsLeft: () => w.starsLeft(),
  };
}

const hooks = { highlight: () => {}, isCancelled: () => false };
const wall = (turn: () => Stmt) => [until([ifs('obstacle_ahead', [turn()], [mv()])])];
const stairs = (k: number) => rep(k, [mv(), L(), mv(), R()]);

/** [nombre, nivel, programa, resultado esperado, ¿es la solución óptima?] */
const cases: [string, number, Stmt[], string, boolean?][] = [
  ['Nivel 1 solución', 1, seq('FFFLFF'), 'win', true],
  ['Nivel 1 choque', 1, [L(), mv(), mv(), R(), mv(), mv()], 'crash'],
  ['Nivel 1 incompleto', 1, [mv()], 'incomplete'],

  ['Nivel 2 solución', 2, seq('FFRFFFRFF'), 'win', true],
  ['Nivel 2 gira al revés', 2, seq('FFLFFF'), 'crash'],
  ['Nivel 2 olvida una estrella', 2, seq('FFRFFF'), 'incomplete'],

  ['Nivel 3 solución', 3, seq('FRFFFLFFFFRFFF'), 'win', true],
  ['Nivel 3 sin estrellas no gana', 3, seq('FFFFRFFF'), 'crash'],
  ['Nivel 3 se queda a medias', 3, seq('FRFFFLFFFF'), 'incomplete'],

  ['Nivel 4 solución con ciclo', 4, [stairs(4)], 'win', true],
  ['Nivel 4 pocas repeticiones', 4, [stairs(2)], 'incomplete'],

  ['Nivel 5 solución con dos ciclos', 5, [rep(4, [mv()]), L(), rep(5, [mv()])], 'win', true],
  ['Nivel 5 ciclo anidado igual choca', 5, [rep(2, [rep(5, [mv()]), L()])], 'crash'],
  ['Nivel 5 ciclo anidado corto incompleto', 5, [rep(2, [rep(4, [mv()]), L()])], 'incomplete'],

  ['Nivel 6 solución anidada', 6, [rep(4, [rep(4, [mv()]), L()])], 'win', true],
  ['Nivel 6 sin anidar (7 bloques)', 6, [rep(4, [mv(), mv(), mv(), mv(), L()])], 'win'],
  ['Nivel 6 gira a la derecha', 6, [rep(4, [rep(4, [mv()]), R()])], 'crash'],

  ['Nivel 7 solución con condición', 7, wall(L), 'win', true],
  ['Nivel 7 con "camino libre"', 7, [until([ifs('path_clear', [mv()], [L()])])], 'win'],
  ['Nivel 7 gira a la derecha (llega sin estrellas)', 7, wall(R), 'incomplete'],
  ['Nivel 7 sin condición choca', 7, seq('FFFFF'), 'crash'],

  ['Nivel 8 solución (derecha)', 8, wall(R), 'win', true],
  ['Nivel 8 con "si" sin "si no"', 8, [until([ifs('obstacle_ahead', [R()]), mv()])], 'win'],
  ['Nivel 8 gira a la izquierda', 8, wall(L), 'timeout'],

  [
    'Nivel 9 solución anidada',
    9,
    [until([ifs('obstacle_ahead', [L(), ifs('obstacle_ahead', [R(), R()])], [mv()])])],
    'win',
    true,
  ],
  ['Nivel 9 solo izquierda', 9, wall(L), 'timeout'],
  ['Nivel 9 solo derecha', 9, wall(R), 'incomplete'],

  [
    'Nivel 10 escalera + condición',
    10,
    [stairs(3), until([ifs('obstacle_ahead', [L()], [mv()])])],
    'win',
    true,
  ],
  ['Nivel 10 solo condición', 10, wall(L), 'timeout'],
  ['Nivel 10 solo escalera', 10, [stairs(3)], 'incomplete'],
];

let failed = 0;
for (const [name, lvl, prog, expected, optimal] of cases) {
  const level = LEVELS[lvl - 1];
  const out = await runProgram(prog, executor(lvl), hooks);
  const blocks = countBlocks(prog) + 1;
  let ok = out.status === expected;
  let note = '';
  if (blocks > level.maxBlocks && expected === 'win') note += ` (¡usa ${blocks} bloques, el máximo es ${level.maxBlocks}!)`;
  if (optimal && blocks !== level.optimalBlocks) {
    ok = false;
    note += ` (usa ${blocks} bloques pero optimalBlocks = ${level.optimalBlocks})`;
  }
  if (!ok) failed++;
  console.log(`${ok ? 'OK  ' : 'FAIL'} ${name}: ${out.status} (esperado ${expected})${note}`);
}
if (LEVELS.some((l, i) => l.id !== i + 1)) {
  failed++;
  console.log('FAIL los ids de los niveles deben ser 1, 2, 3…');
}
process.exit(failed ? 1 : 0);

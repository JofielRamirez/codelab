import type { LevelDef } from '../types';

/**
 * Progresión: Secuencias (1–3) → Ciclos (4–6) → Condiciones (7–9) → Desafío final (10).
 * `tools` indica qué bloques aparecen en la caja de herramientas.
 */
export const LEVELS: LevelDef[] = [
  // ───────────── SECUENCIAS ─────────────
  {
    id: 1,
    title: 'Movimiento',
    concept: 'Secuencias',
    difficulty: 'Fácil',
    color: '#22c55e',
    tools: 1,
    map: [
      '.......',
      '#......',
      '...#*..',
      '..#....',
      '.R.....',
      '.....#.',
    ],
    startDir: 'right',
    optimalBlocks: 7,
    maxBlocks: Infinity,
    mission: 'Lleva a Robi hasta la estrella.',
    lesson: {
      title: '¿Qué es una secuencia?',
      text: 'Una computadora sigue tus instrucciones en orden, una por una, de arriba hacia abajo. A esa lista ordenada se le llama secuencia.',
      example: ['Avanzar', 'Avanzar', 'Girar a la izquierda', 'Avanzar'],
    },
    steps: [
      'Arrastra el bloque "Avanzar" debajo de "Al ejecutar".',
      'Usa "Girar" para cambiar hacia dónde mira Robi. La flecha te lo indica.',
      'Presiona el botón verde EJECUTAR.',
    ],
    hint: 'Cuenta las casillas: Robi debe avanzar 3 veces a la derecha, girar a la izquierda y avanzar 2 veces.',
    learned:
      '¡Creaste tu primera secuencia! Las computadoras siguen las instrucciones en el orden exacto en que las escribes.',
  },
  {
    id: 2,
    title: 'Izquierda y derecha',
    concept: 'Secuencias y giros',
    difficulty: 'Fácil',
    color: '#10b981',
    tools: 1,
    map: [
      '.......',
      '..#..#.',
      '.......',
      '*..*...',
      '.#..#.#',
      'R..*...',
    ],
    startDir: 'up',
    optimalBlocks: 10,
    maxBlocks: Infinity,
    mission: 'Recoge las 3 estrellas. ¡Ojo: Robi empieza mirando hacia arriba!',
    lesson: {
      title: 'Los giros dependen de Robi',
      text: '"Izquierda" y "derecha" se cuentan desde los ojos de Robi, no desde tu pantalla. Si Robi mira hacia abajo, su derecha es tu izquierda. Antes de girar, imagina que tú eres Robi.',
      example: ['Avanzar', 'Avanzar', 'Girar a la derecha', 'Avanzar', 'Avanzar', 'Avanzar', 'Girar a la derecha', '…'],
    },
    steps: [
      'Mira la flecha: Robi empieza mirando hacia arriba.',
      'Planea el camino que pasa por las 3 estrellas.',
      'En cada esquina pregúntate: "Si yo fuera Robi, ¿hacia qué lado giro?".',
    ],
    hint: 'Avanza 2, gira a la derecha, avanza 3, gira a la derecha y avanza 2. ¡Ambos giros son a la derecha!',
    learned:
      '¡Pensaste como Robi! En programación es muy importante ver el problema desde el punto de vista de quien sigue las instrucciones.',
  },
  {
    id: 3,
    title: 'La ruta larga',
    concept: 'Planear y depurar',
    difficulty: 'Media',
    color: '#14b8a6',
    tools: 1,
    map: [
      '#.....G',
      '..#.#.#',
      '..#*...',
      '.##.##.',
      '*......',
      'R.#...#',
    ],
    startDir: 'up',
    optimalBlocks: 15,
    maxBlocks: Infinity,
    mission: 'Recoge las 2 estrellas y llega a la bandera 🏁.',
    lesson: {
      title: '¿Qué es depurar?',
      text: 'Los programas largos casi nunca salen bien a la primera. Depurar es encontrar y corregir errores: ejecuta, observa en qué bloque se equivoca Robi y arregla solo esa parte.',
      example: ['Avanzar', 'Girar a la derecha', 'Avanzar', 'Avanzar', 'Avanzar', '…ejecuta y revisa…'],
    },
    steps: [
      'Divide el camino en tramos: hasta la 1ª estrella, hasta la 2ª y hasta la bandera.',
      'Arma y prueba un tramo a la vez. El bloque que se ilumina es el que Robi está haciendo.',
      'Si Robi choca, corrige el último bloque que se ejecutó.',
    ],
    hint: 'Avanza 1, gira a la derecha, avanza 3, gira a la izquierda, avanza 4, gira a la derecha y avanza 3.',
    learned:
      '¡Depuraste tu programa! Probar por partes y corregir los errores es lo que hacen los programadores todos los días.',
  },

  // ───────────── CICLOS ─────────────
  {
    id: 4,
    title: 'Repeticiones',
    concept: 'Ciclos',
    difficulty: 'Media',
    color: '#f59e0b',
    tools: 2,
    map: [
      '......#',
      '....*..',
      '#..*...',
      '..*....',
      '.*...#.',
      'R..#...',
    ],
    startDir: 'right',
    optimalBlocks: 6,
    maxBlocks: 8,
    mission: 'Recoge las 4 estrellas de la escalera. ¡Solo puedes usar 8 bloques!',
    lesson: {
      title: '¿Qué es un ciclo?',
      text: 'Cuando algo se repite muchas veces, no hace falta escribirlo una y otra vez. El bloque "Repetir" hace que las instrucciones de adentro se ejecuten las veces que tú digas.',
      example: ['Repetir 4 veces:', '   Avanzar', '   Girar a la izquierda', '   Avanzar', '   Girar a la derecha'],
    },
    steps: [
      'Observa el patrón: cada escalón es igual al anterior.',
      'Coloca un bloque "Repetir" y mete adentro los movimientos de UN escalón.',
      'Cambia el número para indicar cuántas veces repetir.',
    ],
    hint: 'Un escalón es: avanzar, girar a la izquierda, avanzar, girar a la derecha. ¡Hay 4 escalones!',
    learned:
      '¡Usaste un ciclo! Con "Repetir" escribiste menos bloques y el programa hizo más trabajo. Los programadores usan ciclos todo el tiempo.',
  },
  {
    id: 5,
    title: 'Dos ciclos',
    concept: 'Ciclos en secuencia',
    difficulty: 'Media',
    color: '#f97316',
    tools: 2,
    map: [
      '....*..',
      '.#....#',
      '....*..',
      '..#..#.',
      '.......',
      'R.*.*#.',
    ],
    startDir: 'right',
    optimalBlocks: 6,
    maxBlocks: 8,
    mission: 'Recoge las 4 estrellas. ¡Solo puedes usar 8 bloques!',
    lesson: {
      title: 'Un ciclo después de otro',
      text: 'Un programa puede tener varios ciclos, uno después de otro, y bloques normales entre ellos. Cada ciclo tiene su propio número de repeticiones.',
      example: ['Repetir 4 veces:', '   Avanzar', 'Girar a la izquierda', 'Repetir 5 veces:', '   Avanzar'],
    },
    steps: [
      'Cuenta cuántas casillas avanza Robi a la derecha y cuántas hacia arriba.',
      'Usa un "Repetir" para cada tramo recto.',
      'Pon el giro AFUERA de los ciclos, entre uno y otro.',
    ],
    hint: 'Repetir 4 veces "avanzar", girar a la izquierda y repetir 5 veces "avanzar".',
    learned:
      '¡Combinaste ciclos con secuencias! Los programas reales están hechos de muchas piezas como estas, una tras otra.',
  },
  {
    id: 6,
    title: 'Ciclos dentro de ciclos',
    concept: 'Ciclos anidados',
    difficulty: 'Difícil',
    color: '#eab308',
    tools: 2,
    map: [
      '#......',
      '...*...',
      '..#...#',
      '.*.#.*.',
      '....#..',
      '.R.*...',
    ],
    startDir: 'right',
    optimalBlocks: 5,
    maxBlocks: 6,
    mission: 'Da la vuelta al cuadrado y recoge las 4 estrellas. ¡Solo puedes usar 6 bloques!',
    lesson: {
      title: '¿Qué es un ciclo anidado?',
      text: 'Puedes meter un "Repetir" dentro de otro "Repetir". El ciclo de adentro hace un lado del cuadrado y el ciclo de afuera repite ese lado para cada lado.',
      example: ['Repetir 4 veces:', '   Repetir 4 veces:', '      Avanzar', '   Girar a la izquierda'],
    },
    steps: [
      'Piensa en UN lado del cuadrado: ¿cuántas veces avanza Robi?',
      'Haz ese lado con un "Repetir" y agrega el giro debajo, dentro de otro "Repetir".',
      'El cuadrado tiene 4 lados: ¿cuántas veces repite el ciclo de afuera?',
    ],
    hint: 'Repetir 4 veces: [ repetir 4 veces "avanzar", luego girar a la izquierda ].',
    learned:
      '¡Anidaste ciclos! Con solo 5 bloques Robi hizo 20 acciones. Así se dibujan figuras, se recorren tablas y se crean patrones en los videojuegos.',
  },

  // ───────────── CONDICIONES ─────────────
  {
    id: 7,
    title: 'Condiciones',
    concept: 'Si / Entonces',
    difficulty: 'Difícil',
    color: '#ec4899',
    tools: 3,
    map: [
      '.......',
      '....#..',
      'G....#.',
      '.###*#.',
      '.....#.',
      'R.*..#.',
    ],
    startDir: 'right',
    optimalBlocks: 6,
    maxBlocks: 7,
    mission: 'Llega a la bandera esquivando las rocas. ¡Solo puedes usar 7 bloques!',
    lesson: {
      title: '¿Qué es una condición?',
      text: 'Una condición es una pregunta que el robot se hace: "¿Hay un obstáculo enfrente?". SI la respuesta es sí, ENTONCES hace una cosa; SI NO, hace otra.',
      example: ['Repetir hasta llegar a la meta:', '   Si hay obstáculo enfrente', '      Girar a la izquierda', '   Si no', '      Avanzar'],
    },
    steps: [
      'Usa "Repetir hasta llegar a la meta" para que Robi no se detenga.',
      'Dentro, coloca "Si ... entonces / si no" y ponle la pregunta "¿hay obstáculo enfrente?".',
      'Decide qué hace Robi cuando hay una roca y qué hace cuando el camino está libre.',
    ],
    hint: 'Si hay obstáculo enfrente → gira a la izquierda. Si no → avanza. ¡Repite hasta la meta!',
    learned:
      '¡Tu robot ahora toma decisiones! Las condiciones permiten que un programa reaccione a lo que pasa a su alrededor, como en los videojuegos y las apps.',
  },
  {
    id: 8,
    title: 'La espiral',
    concept: 'Elegir la decisión correcta',
    difficulty: 'Difícil',
    color: '#d946ef',
    tools: 3,
    map: [
      'R..*...',
      '######.',
      '....G#.',
      '.####.*',
      '.####..',
      '..*....',
    ],
    startDir: 'right',
    optimalBlocks: 6,
    maxBlocks: 7,
    mission: 'Recorre la espiral, recoge las 3 estrellas y llega a la bandera. ¡Solo puedes usar 7 bloques!',
    lesson: {
      title: 'La misma pregunta, otra respuesta',
      text: 'Un programa con condiciones sirve para muchos caminos, pero solo si eliges bien qué hacer. Observa hacia dónde dobla el camino en TODAS las esquinas antes de decidir.',
      example: ['Repetir hasta llegar a la meta:', '   Si hay obstáculo enfrente', '      Girar a la ???', '   Si no', '      Avanzar'],
    },
    steps: [
      'Sigue el camino con el dedo: ¿hacia qué lado dobla Robi en cada esquina?',
      'Arma el mismo tipo de programa que en el nivel 7.',
      'Cambia el giro para que funcione en esta espiral.',
    ],
    hint: 'Todas las esquinas de la espiral doblan hacia la derecha de Robi. Si hay obstáculo → gira a la derecha; si no → avanza.',
    learned:
      '¡Un programa corto recorrió un camino larguísimo! Una buena condición funciona sin importar cuántas casillas tenga el camino.',
  },
  {
    id: 9,
    title: 'Decisiones dentro de decisiones',
    concept: 'Condiciones anidadas',
    difficulty: 'Difícil',
    color: '#a855f7',
    tools: 3,
    map: [
      '...G...',
      '...#...',
      '..#..*.',
      '...*...',
      '.......',
      'R*..#..',
    ],
    startDir: 'right',
    optimalBlocks: 10,
    maxBlocks: 12,
    mission: 'Llega a la bandera con las 3 estrellas. Esta vez hay esquinas hacia los dos lados. ¡Máximo 12 bloques!',
    lesson: {
      title: '¿Qué es una condición anidada?',
      text: 'Puedes poner un "Si" dentro de otro "Si". Así Robi hace una segunda pregunta solo cuando la primera respuesta fue "sí". Por ejemplo: si hay obstáculo, gira a la izquierda… y si AÚN hay obstáculo, date la vuelta.',
      example: [
        'Repetir hasta llegar a la meta:',
        '   Si hay obstáculo enfrente',
        '      Girar a la izquierda',
        '      Si hay obstáculo enfrente',
        '         Girar a la derecha',
        '         Girar a la derecha',
        '   Si no',
        '      Avanzar',
      ],
    },
    steps: [
      'Empieza con el programa del nivel 7: si hay obstáculo gira a la izquierda, si no avanza.',
      'Ejecuta y mira dónde falla: ¡a veces la izquierda también está bloqueada!',
      'Dentro del "Si", después de girar, pregunta otra vez y date la vuelta si sigue bloqueado.',
    ],
    hint: 'Después de "girar a la izquierda", agrega "Si hay obstáculo enfrente → girar a la derecha, girar a la derecha". Dos giros a la derecha = media vuelta.',
    learned:
      '¡Anidaste condiciones! Así funcionan los personajes de los videojuegos y los robots aspiradora: hacen una pregunta, y según la respuesta, hacen otra.',
  },

  // ───────────── DESAFÍO FINAL ─────────────
  {
    id: 10,
    title: 'Gran desafío',
    concept: 'Combinar todo',
    difficulty: 'Difícil',
    color: '#6366f1',
    tools: 3,
    map: [
      'G....*.',
      '.####..',
      '...*..#',
      '..*.#..',
      '.*.#...',
      'R.#....',
    ],
    startDir: 'right',
    optimalBlocks: 11,
    maxBlocks: 12,
    mission: 'Sube la escalera, recoge las 4 estrellas y llega a la bandera. ¡Máximo 12 bloques!',
    lesson: {
      title: 'Cada herramienta en su lugar',
      text: 'Los programadores combinan lo que ya conocen: un ciclo "Repetir" para lo que siempre es igual y una condición para lo que hay que ir descubriendo. Divide el reto en dos partes.',
      example: [
        'Repetir 3 veces:',
        '   (un escalón)',
        'Repetir hasta llegar a la meta:',
        '   Si hay obstáculo enfrente …',
      ],
    },
    steps: [
      'Primera parte: la escalera. Cada escalón es igual → usa "Repetir".',
      'Segunda parte: el pasillo hasta la bandera → usa "Repetir hasta la meta" con un "Si".',
      'Conecta las dos partes, una debajo de la otra.',
    ],
    hint: 'Repetir 3 veces: [avanzar, girar izquierda, avanzar, girar derecha]. Luego: repetir hasta la meta [si hay obstáculo → girar izquierda, si no → avanzar].',
    learned:
      '¡Completaste CODELAB! Usaste secuencias, ciclos y condiciones juntos, igual que en los programas de verdad. ¡Ya piensas como programador!',
  },
];

export function getLevel(id: number): LevelDef {
  return LEVELS.find((l) => l.id === id) ?? LEVELS[0];
}

/** Primer nivel que usa un grupo de herramientas (para el aviso "Se desbloquea en el nivel N"). */
export function firstLevelWithTools(tools: LevelDef['tools']): number {
  return LEVELS.find((l) => l.tools >= tools)?.id ?? LEVELS.length;
}

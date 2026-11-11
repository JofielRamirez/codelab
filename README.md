# CODELAB 🤖

Aplicación educativa para aprender a programar (12–15 años) guiando al robot **Robi** con bloques visuales.

- **React + TypeScript + Vite + Tailwind CSS**
- **Google Blockly** para la programación con bloques (categorías: Eventos, Movimiento, Control, Condiciones)
- **Phaser 3** para el videojuego: los bloques se compilan a un programa que un intérprete ejecuta paso a paso sobre la escena

## Niveles
**Secuencias**

1. **Movimiento** – secuencias y orientación (llegar a la estrella)
2. **Izquierda y derecha** – los giros se cuentan desde Robi (3 estrellas, Robi empieza mirando hacia arriba)
3. **La ruta larga** – planear y depurar un programa largo (2 estrellas + bandera)

**Ciclos**

4. **Repeticiones** – ciclos con `repetir N veces` (escalera de 4 estrellas, máx. 8 bloques)
5. **Dos ciclos** – ciclos en secuencia con un giro entre ellos (máx. 8 bloques)
6. **Ciclos dentro de ciclos** – ciclos anidados para recorrer un cuadrado (máx. 6 bloques)

**Condiciones**

7. **Condiciones** – `si / si no` + `repetir hasta la meta` (esquivar rocas, máx. 7 bloques)
8. **La espiral** – la misma estructura, pero eligiendo el giro correcto (máx. 7 bloques)
9. **Decisiones dentro de decisiones** – condiciones anidadas, esquinas hacia ambos lados (máx. 12 bloques)

**Desafío final**

10. **Gran desafío** – combinar un ciclo (escalera) con una condición (pasillo) (máx. 12 bloques)

Las herramientas disponibles en cada nivel se definen con el campo `tools` de `src/data/levels.ts`.

El progreso y los programas se guardan en el navegador (localStorage). No hay backend ni cuentas.

## Uso
```bash
npm install
npm run dev       # desarrollo
npm run verify    # comprueba que todos los niveles se pueden completar
npm run build     # genera dist/
```

## Publicar en GitHub Pages
`vite.config.ts` usa `base: './'`, así que `dist/` funciona en cualquier ruta. Para publicar:
```bash
npm run build
npx gh-pages -d dist   # o subir dist/ a la rama gh-pages
```

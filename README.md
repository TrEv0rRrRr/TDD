### ¿Qué es el testing?

El testing es el proceso de verificar que tu código hace lo que debe hacer y detectar errores antes de que lleguen al usuario final. Ayuda a mantener el proyecto estable a medida que crece.

# Tipos de testing más comunes en desarrollo web:

1. Unitario (Unit Testing):

Pruebas a funciones o componentes individuales.

**Ejemplo:** Verificar que una función de sumar números devuelva el resultado correcto.

1. De integración (Integration Testing):

Pruebas que verifican cómo funcionan juntas varias partes del sistema.

**Ejemplo:** Verificar que un formulario envía los datos correctamente a la API.

3. End-to-End (E2E):

Simula la interacción real de un usuario en la app completa.

**Ejemplo:** Abrir el navegador, llenar un formulario y chequear el mensaje de éxito.

# ¿Qué frameworks o librerías se usan?

- Jest (el más usado en proyectos de JavaScript/React).

- Vitest (si usas Vite, es súper rápido y ligero).

- Testing Library (ideal para testear componentes de React, Vue, etc.).

- Cypress o Playwright (para E2E).

# Instalación

- Jest

1. Instalar dependencias

```bash
  pnpm init
  pnpm add -D jest ts-jest @types/jest typescript ts-node @types/node
```

2. Inicializar archivos de configuración

```bash
  npx ts-jest config:init
  npx tsc --init
```

3. Configuraciones recomendadas

```ts
// jest.config.js

/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {}],
  },
};
```

```json
// tsconfig.json

{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "rootDir": "./",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "strictFunctionTypes": true,
    "useUnknownInCatchVariables": true,
    "allowUnusedLabels": true,
    "skipLibCheck": true
  },
  "include": ["./src/**/*", "./tests/**/*"],
  "exclude": ["node_modules"]
}
```

4. Agregar comando para realizar los tests

```json
// package.json

"scripts": {
    "test": "jest --watchAll"
  },
```

5. Estructura de archivos recomendada

/src
└── archivo.ts
/tests
└── archivo.test.ts

- Vitest

1. Instalar dependencias

```bash
  pnpm create vite Nombre-App --template react-ts
  pnpm add -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

2. Agregar al archivo de configuración de vite

```ts
/// <reference types="vitest/config" />

// imports...

export default defineConfig({
  // resto del código...
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.ts",
  },
});
```

Adicionalmente crear el archivo setupTests.ts en la carpeta src

```ts
import "@testing-library/jest-dom";
```

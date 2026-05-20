# Playwright OrangeHRM

Proyecto de automatización de pruebas E2E con [Playwright](https://playwright.dev/) y TypeScript sobre la aplicación demo de [OrangeHRM](https://opensource-demo.orangehrmlive.com).

Está pensado como material de formación para aprender los conceptos básicos de testing con Playwright.

## Tecnologías

- [Playwright](https://playwright.dev/) — framework de testing E2E
- TypeScript
- Node.js

## Estructura del proyecto

```
playwright-orangehrm/
├── e2e/               # Tests (archivos .spec.ts)
├── pages/             # Page Object Model — acciones de cada página
├── locators/          # Selectores CSS/HTML separados de la lógica
├── fixtures/          # Extensión de test con páginas pre-instanciadas
├── data/              # Datos de prueba (usuarios, etc.)
└── playwright.config.ts
```

### Patrón Page Object Model (POM)

El proyecto usa POM para separar la lógica de los tests de la interacción con la UI:

- **`locators/`** — define los selectores de los elementos
- **`pages/`** — expone acciones de alto nivel usando esos locators
- **`fixtures/`** — inyecta las páginas en los tests automáticamente
- **`e2e/`** — contiene únicamente la lógica de negocio del test

## Requisitos previos

- Node.js 18+
- npm

## Instalación

```bash
npm install
```

## Ejecutar los tests

```bash
# Ejecutar todos los tests
npx playwright test

# Ejecutar en modo UI (modo visual interactivo)
npx playwright test --ui

# Ver el reporte HTML tras la ejecución
npx playwright show-report
```

## Aplicación bajo prueba

URL base: `https://opensource-demo.orangehrmlive.com`

Credenciales de prueba (demo pública):

| Usuario | Contraseña |
|---------|------------|
| Admin   | admin123   |

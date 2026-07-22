# SauceDemo - Playwright + TypeScript

Proyecto de portafolio de automatización de pruebas end-to-end sobre [SauceDemo](https://www.saucedemo.com), usando **Playwright** y **TypeScript**, aplicando el patrón **Page Object Model (POM)**.

## Tecnologías

- [Playwright](https://playwright.dev/)
- TypeScript
- Node.js

## Casos de prueba cubiertos

- [x] Login exitoso con usuario válido
- [x] Login fallido con usuario bloqueado (validación de mensaje de error)
- [ ] Agregar producto al carrito
- [ ] Checkout completo
- [ ] Ordenar productos por precio

## Cómo correr el proyecto

Clonar el repositorio e instalar dependencias:

```bash
git clone https://github.com/yorman-qa-engineer/saucedemo-playwright-portfolio.git
cd saucedemo-playwright-portfolio
npm install
```

Correr todos los tests:

```bash
npx playwright test
```

Correr los tests en modo visible (viendo el navegador):

```bash
npx playwright test --headed
```

Ver el reporte HTML de la última corrida:

```bash
npx playwright show-report
```

## Autor

Yorman González - QA Automation en formación
// Traemos "test" (para crear la prueba) y "expect" (para verificar resultados)
import { test, expect } from '@playwright/test';

// Traemos nuestro Page Object del login (la "ficha" que creamos antes)
import { LoginPage } from '../pages/LoginPage';

// Definimos una prueba con un nombre descriptivo
test('Login exitoso con usuario válido', async ({ page }) => {
  // "page" es la pestaña del navegador. Playwright nos la entrega automáticamente.

  // Creamos un LoginPage nuevo, usando esa pestaña
  const loginPage = new LoginPage(page);

  // Paso 1: ir a la página de login
  await loginPage.goto();

  // Paso 2: llenar usuario y contraseña, y hacer click en Login
  await loginPage.login('standard_user', 'secret_sauce');

  // Paso 3: verificar que el login funcionó
  // Si el login fue exitoso, SauceDemo redirige a /inventory.html
  await expect(page).toHaveURL('/inventory.html');
});
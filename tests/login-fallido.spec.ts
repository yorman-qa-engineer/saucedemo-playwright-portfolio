// Traemos las mismas herramientas que en el test anterior
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login fallido con usuario bloqueado', async ({ page }) => {
  // Creamos el mismo objeto LoginPage que usamos antes
  const loginPage = new LoginPage(page);

  // Paso 1: ir a la página de login
  await loginPage.goto();

  // Paso 2: intentar loguearse con un usuario que sabemos que está bloqueado
  await loginPage.login('locked_out_user', 'secret_sauce');

  // Paso 3: verificar que aparece el mensaje de error correcto
  // "toBeVisible()" verifica que el elemento SE VEA en pantalla
  await expect(loginPage.errorMessage).toBeVisible();

  // Paso 4: verificar que el texto del error sea el esperado
  // "toContainText()" verifica que el elemento contenga ese texto
  await expect(loginPage.errorMessage).toContainText('Sorry, this user has been locked out');
});
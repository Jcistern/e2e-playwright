import { test, expect } from '../fixtures/test.fixture';
import { Users } from '../data/user';

test.describe('Login - OrangeHRM', () => {

  test('login exitoso con credenciales válidas', async ({ loginPage, page }) => {
    // Given: estoy en la página de login
    await loginPage.goto();

    // When: ingreso credenciales válidas y hago clic en Login
    await loginPage.login(Users.admin.username, Users.admin.password);

    // Then: la URL debería contener 'dashboard'
    await expect(page).toHaveURL(/.*dashboard/);
  });
});
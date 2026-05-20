import { test, expect } from '../fixtures/test.fixture';

test.describe('Employees - OrangeHRM', () => {

  test('agregar empleado', async({ employeePage, page }) => {
    await employeePage.navigateToPIM();
    await employeePage.addEmployee('Test', 'QA', 'Playwright', '1515');
    await expect(page).toHaveURL(/.*viewPersonalDetails.*/);
  });

  test('buscar empleado por nombre', async ({ employeePage, page }) => {
    // TODO 1: navegar al módulo PIM
    
    // TODO 2: crear empleado nuevo

    // TODO 3: buscar por nombre
    
    // TODO 4: verificar que hay al menos un resultado
  });
});
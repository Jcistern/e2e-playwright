import { test, expect } from '../fixtures/test.fixture';

test.describe('Employees - OrangeHRM', () => {

  test('agregar empleado', async({ employeePage, page }) => {
    await employeePage.navigateToPIM();
    await employeePage.addEmployee('Test', 'QA', 'Playwright', '1515');
    await expect(page).toHaveURL(/.*viewPersonalDetails.*/);
  });

  // TAREA: Crea un nuevo empleado, búscalo y verifica que la tabla de resultados traiga al menos un empleado
  test('buscar empleado por nombre', async ({ employeePage, page }) => {
    // TAREA 1: navegar al módulo PIM
    
    // TAREA 2: crear empleado nuevo

    // TAREA 3: buscar por nombre
    
    // TAREA 4: verificar que hay al menos un resultado
  });
});
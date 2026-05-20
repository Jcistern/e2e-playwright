import { test as base } from '@playwright/test'
import { EmployeePage } from './../pages/EmployeePage';
import { LoginPage } from '../pages/LoginPage'
import { Users } from '../data/user';

type MyFixtures = {
  loginPage: LoginPage;
  employeePage: EmployeePage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  employeePage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(Users.admin.username, Users.admin.password);
    const employeePage = new EmployeePage(page);
    await use(employeePage);
  },
});

export { expect } from '@playwright/test';
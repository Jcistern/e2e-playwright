import { Page, Locator } from "@playwright/test";
import { EmployeeLocators } from "../locators/employee.locators";

export class EmployeePage {
    readonly page: Page;

    readonly pimMenuLink: Locator;
    // Add Employee
    readonly addEmployeeButton!: Locator;
    /*readonly employeeFirstNameInput: Locator;
    readonly employeeMiddleNameEmployeeInput: Locator;
    readonly employeeLastNameInput: Locator;
    readonly saveEmployeeButton: Locator;

    // Employee List
    readonly employeeNameInput: Locator;
    readonly employeeSearchButton: Locator;
    readonly employeeTableRows: Locator;
    */

    constructor(page: Page) {
        this.page = page;

        this.pimMenuLink = page.locator(EmployeeLocators.pimMenuLink);

    }

    async navigateToPIM() {
        await this.pimMenuLink.click();
    }

    async addEmployee(firstName: string, middleName: string, lastName: string) {
        await this.addEmployeeButton.click();
    }
}
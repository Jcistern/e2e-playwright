import { Page, Locator } from "@playwright/test";
import { EmployeeLocators } from './../locators/employee.locators';

export class EmployeePage {
    readonly page: Page;

    readonly pimMenuLink: Locator;
    // Add Employee
    readonly addEmployeeButton!: Locator;
    readonly employeeFirstNameInput: Locator;
    readonly employeeMiddleNameEmployeeInput: Locator;
    readonly employeeLastNameInput: Locator;
    readonly empemployeeIdInput: Locator;
    readonly saveEmployeeButton: Locator;

    // Employee List
    //readonly employeeNameInput: Locator;
    //readonly employeeSearchButton: Locator;
    //readonly employeeTableRows: Locator;
    

    constructor(page: Page) {
        this.page = page;

        this.pimMenuLink = page.locator(EmployeeLocators.pimMenuLink);
        this.addEmployeeButton = page.locator(EmployeeLocators.addEmployeeButton);
        this.employeeFirstNameInput = page.locator(EmployeeLocators.employeeFirstNameInput);
        this.employeeMiddleNameEmployeeInput = page.locator(EmployeeLocators.employeeMiddleNameEmployeeInput);
        this.employeeLastNameInput = page.locator(EmployeeLocators.employeeLastNameInput);
        this.empemployeeIdInput = page.locator(EmployeeLocators.employeeIdInput);
        this.saveEmployeeButton = page.locator(EmployeeLocators.saveEmployeeButton);
    }

    async navigateToPIM() {
        await this.pimMenuLink.click();
    }

    async addEmployee(firstName: string, middleName: string, lastName: string, idEmployee: string) {
        await this.addEmployeeButton.click();

        await this.employeeFirstNameInput.fill(firstName);
        await this.employeeMiddleNameEmployeeInput.fill(middleName);
        await this.employeeLastNameInput.fill(lastName);
        await this.empemployeeIdInput.fill(idEmployee);
        await this.saveEmployeeButton.click();
    }
}
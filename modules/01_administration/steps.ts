import { Given, When, Then } from '@cucumber/cucumber'
import { page } from '../../support/setup'
import { expect } from '@playwright/test'
import administrationLoc from './locators'

// --------------------------common steps-------------------------------------

When('click to change password', async function () {
    await page.locator(administrationLoc.CHANGE_PASSWORD_BTN).click()
});

// --------------------------------@TC01-------------------------------------

When('fill new {string}', async function (password) {
    await page.locator(administrationLoc.PASSWORD_INPUT).first().fill(password)
});

When('fill confirm new {string}', async function (password1) {
    await page.locator(administrationLoc.CONFIRM_PASSWORD_INPUT).first().fill(password1)
});
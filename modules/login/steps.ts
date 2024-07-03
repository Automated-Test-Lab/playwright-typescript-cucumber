import { Given, When, Then } from '@cucumber/cucumber'
import { page } from '../../support/setup'
import { expect } from '@playwright/test'
import loginLoc from './locatos'

// --------------------------common steps-----------------------------------------

Given('that I log out of the system', async function () {
    await page.locator(loginLoc.LOGOUT_BTN).click()
    await page.locator(loginLoc.LOGOUT_BTN).click()
});

Given('fill username {string}', async function (username) {
    await page.locator(loginLoc.USERNAME_INPUT).fill(username)
});

Given('fill password {string}', async function (password) {
    await page.locator(loginLoc.PASSWORD_INPUT).fill(password)
});

When('click to login', async function () {
    await page.locator(loginLoc.LOGIN_BTN).click()
});

Then('system returns {string}', async function (message) {
    await expect(page.locator(loginLoc.CONTENT_MAIN)).toContainText(message);  
});

import { Given, When, Then } from '@cucumber/cucumber'
import { page } from '../../support/setup'
import { expect } from '@playwright/test'
import { fa, fakerPT_BR as faker } from '@faker-js/faker'
import fundsLoc from './locators'

var logicNumber = faker.string.numeric(8)

// --------------------------common steps-----------------------------------------


// --------------------------------@TC05-------------------------------------

When('select from account {string}', async function (account) {
  await page.locator(fundsLoc.FROM_ACCOUNT_SELECT).selectOption(account)

});

When('select to account {string}', async function (account) {
  await page.locator(fundsLoc.TO_ACCOUNT_SELECT).selectOption(account)

});

When('fill amount to transfer value {string}', async function (value) {
  await page.locator(fundsLoc.TRANSFER_AMOUNT_INPUT).fill(value)

});

When('click to Transfer Money', async function () {
  await page.locator(fundsLoc.TRANSFER_MONEY_BUTTON).click()

});

Then('system returns {string}', async function (message) {
});

import { Given, When, Then } from '@cucumber/cucumber'
import { page } from '../support/setup';

Given('I access the Funds Transfer page', async function () {
    await page.goto('/bank/transfer.jsp')

});
import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { page } from '../support/setup';

Given('I access the Funds Transfer page', async function () {
    await page.goto('/bank/transfer.jsp')

});

Given('I access the Edit Users page', async function () {
    await page.goto('/admin/admin.jsp')

});

Then('system returns error message {string}', async function (message) {
    page.on('dialog', async dialog => {
      // Validate dialog text
      expect(dialog.message()).toBe(message);
  
      // close dialog
      await dialog.dismiss(); 
    
    });
  });
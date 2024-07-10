import { Given, When, Then } from '@cucumber/cucumber'
import { page } from '../../support/setup'
import { expect } from '@playwright/test'
import feedbackLoc from './locators'

// --------------------------------@TC04-------------------------------------

Given('fill email', async function () {
    await page.locator(feedbackLoc.EMAIL_INPUT).fill('test@email.com')
});

Given('fill subject', async function () {
    await page.locator(feedbackLoc.SUBJECT_INPUT).fill('Warning of system defects')
});

Given('fill question\\/comment', async function () {
    await page.locator(feedbackLoc.COMMENTS_TEXTAREA).fill('Below are the defects found in the system.')
});

When('click to submit', async function () {
    await page.locator(feedbackLoc.SUBMIT_BTN).click()
});

Then('system returns {} message', async function (message) {
    await page.textContent(message)
});
import { setDefaultTimeout } from "@cucumber/cucumber";
import { BrowserContext, Page, firefox, chromium } from "@playwright/test";
require('dotenv').config();

export var browser: BrowserContext;
export var page: Page;

const BASE_URL = ` https://demo.testfire.net`;

// Cucumber default timeout
setDefaultTimeout(15_000);

// Open Browser
export async function launchBrowser(): Promise<void> {
  browser = await chromium.launchPersistentContext('', 
    {
      headless: false,
      locale: 'pt-BR',
      baseURL: BASE_URL,
      viewport: { width: 1366, height: 768 }
    }
  );
  page = await browser.newPage();
};

// Login on Testfire
export async function login() {

    const username = process.env.USERNAME ? process.env.USERNAME : '';
    const password = process.env.PASSWORD ? process.env.PASSWORD : '';
    
    await page.goto('/login.jsp');
    await page.locator('[id="uid"]').fill(username);
    await page.locator('[id="passw"]').fill(password);
    await page.locator('[type="submit"]').click();
    await page.waitForURL('/bank/main.jsp', {timeout: 120000});
}
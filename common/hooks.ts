import { After, AfterAll, AfterStep, Before, BeforeAll, BeforeStep, Status } from "@cucumber/cucumber";

import { 
  browser, 
  page, 
  launchBrowser, 
  login,
} from "../support/setup";
import { ContentType } from "allure-js-commons";

// BEFORE ALL ==================================================================

BeforeAll({timeout: 2*60*1000}, async function () {
  await launchBrowser();
  await login();
});

// BEFORE ======================================================================

Before({ tags: '@skip' }, async function () {
  return 'skipped' as any;
});

// AFTER STEP ==================================================================

AfterStep(async function (scenario) {
  if ( scenario.result?.status === Status.FAILED ) {
    this.attach(await page.screenshot(), ContentType.PNG);
  }
});

// AFTER ALL ===================================================================

AfterAll(async function () {
  await browser.close();
});
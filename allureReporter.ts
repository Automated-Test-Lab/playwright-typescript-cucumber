import { AllureRuntime } from "allure-js-commons";
import { CucumberJSAllureFormatter } from "allure-cucumberjs";

export default class extends CucumberJSAllureFormatter {
  constructor(options: any) {
    super(options, new AllureRuntime({ resultsDir: "./reports/allure-results" }), {
      labels: [
        {
          pattern: [/@feature:(.*)/],
          name: "epic",
        },
        {
          pattern: [/@severity:(.*)/],
          name: "severity",
        },
      ],
      links: [
        {
          pattern: [/@issue=(.*)/],
          type: "issue",
          urlTemplate: "http://localhost:8080/issue/%s",
        },
        {
          pattern: [/@tms=(.*)/],
          type: "tms",
          urlTemplate: "http://localhost:8080/tms/%s",
        },
      ],
    });
  }
}
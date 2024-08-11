
# Automated Test Lab 🧪 | Playwright + TS + Cucumber

This project aims to provide test automation artifacts in the end-to-end layer using the Type Script language and Playwright, Cucumber framework.

## ☑️ You must have:

To execute the project you must have:

- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/)
- [Cucumber](https://cucumber.io/)
- [Allure Report](https://qameta.io/allure-report/)
- [Playwright](https://playwright.dev/)

## 📁 Directory structure

Using the Page Objects design pattern, which aims to separate elements into different files based on the pages on which they appear. And so, writing all the specific elements and methods of that page in your file, which is a class, and using them directly in the test scripts. We have the following directory structure in the project:

- *features/* - contains ``.feature`` files with test scenarios written in Gherkin syntax.

- *locators/* - contains the scripts that associate expressions in the step-by-step tests with interactable elements - such as buttons, selectors, checkboxes, text fields, etc. - on the page to be navigated. 

- *steps/* - contains the step-by-step execution scripts for the tests described in the .``feature`` files.

- *common/* - centralizes files that are common and consumed by everyone in the project.

- *support/* - contains auxiliary files for the project, such as types, global variables, utilities, error handling, etc.

## 🚀 Running the project:

- Clone the repository:

```bash
  $ git clone git@github.com:Automated-Test-Lab/playwright-typescript-cucumber.git
```

- Install project dependencies:

```bash
  $ npm install
```

- Install Cucumber:

```bash
  $ npm install cucumber
```

- Install Playwright:

```bash
  $ npm init playwright@latest
```

- Install Typescript:

```bash
  $ npm install -g typescript    
```

- Install Allure:

```bash
  $ npm install -g allure-commandline      
```

- Run tests:

```bash
  $ npm run all
```


## 📊 Generating Test Report

- Generate the reports:

```bash
  $ cd reports
  $ allure serve
```
## 🛠️  Technologies

- [Node.js](https://nodejs.org/en/)
- [Playwright](https://playwright.dev/)
- [Cucumber](https://cucumber.io/)
- [Allure Report](https://qameta.io/allure-report/)

## 📫 Contributing

To contribute to the project, follow these steps:

    1. Clone this repositoy
    2. Create a branch: git checkout -b <nome_branch>.
    3. Make your changes and commit them: git commit -m '<mensagem_commit>'
    4. Push to branch: git push origin <nome_branch>
    5. Create the merge request.
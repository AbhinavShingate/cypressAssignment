# About Project
This is basic cypress automation project for mitigram.com UI testing

# Use below tools are required for installation
1. Node (version 20.12.2) link - https://nodejs.org/en/download (select OS according to your machine) 
2. npm (version 10.5.0) - Most probably it will be included in above node package
3. Set the path for node according OS for more details please follow instructions from the link - https://www.digitalocean.com/community/tutorials/node-js-environment-setup-node-js-installation

## Setup
Clone the project from

```
https://github.com/AbhinavShingate/cypressAssignment.git
```
Run in the project root folder (it will install all necessary dependencies):

```
npm install
```

## Running the tests

There are 2 options how to run tests - GUI and CLI:

**1) Open Cypress Test Runner**
```
npm run cy:open
```
then click on E2E testing select a browser chrome and click on start testing and select the test file to run
OR
```
npx cypress open
```
then click on E2E testing select a browser chrome and click on start testing and select the test file to run

**2) Run tests from command line**

headless mode of Chrome:
```
npx cypress run --browser chrome --headless 
```

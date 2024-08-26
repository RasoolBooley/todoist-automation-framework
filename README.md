# lodgify-todoist-challenge
Automation framework for the todoist webapp

Prerequisites
Before you can run the Cypress tests, ensure that you have the following installed on your machine:

Node.js: Download and install Node.js from nodejs.org.
npm: Node Package Manager, which comes with Node.js.

## 1. Install Dependencies
After navigating to the project directory in your terminal, install the required Node.js packages by running the following command:

npm install
This will install all the dependencies required for the project

## 2. Set Up Environment Variables
You will need an api token from https://todoist.com/
Create a 'cypress.env.json' file and add your token like in the example below

{
   "authToken":"your-token-here",
}

## 3. Running the Tests

To open the GUI to run the tests use the below command. Select any browser and select and test spec
npx cypress open

To run the test in the terminal (headless mode) use the below command. All tests will execute immediately
npx cypress run

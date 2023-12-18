# Oxford Learners Dictionaries API

Used to get entries from the Oxford Learner's Dictionaries API.

## Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

## Setup

1) Open a terminal window and navigate to the oxford-learners-dictionaries-api folder: `cd oxford-learners-dictionaries-api`.

2) Type `npm i` in the terminal window and wait for the packages to be installed.

3) Obtain an API key from the Oxford Learner's Dictionaries API by contacting Jeanna Occhiogrosso.

4) Create an .env file in the root folder to securely store your API key and define the API's base URL. Add the obtained `API_KEY` and `BASE_URL` values to this file: `touch .env && echo 'API_KEY=your_api_key' >> .env && echo 'BASE_URL=https://www.oxfordlearnersdictionaries.com/api/v1/dictionaries/english/' >> .env`.

5) Type `npm start` in the terminal window, and an **output.html** file will be created in the `src/.temp` folder. You can find the generated file at `src/.temp/output.html`.

## Troubleshooting

- If you encounter any issues during installation or execution, please check the following:
  - Ensure your API key is correctly configured in the .env file.
  - Confirm that Node.js and npm are properly installed on your machine.

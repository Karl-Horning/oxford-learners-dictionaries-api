# Oxford Learners Dictionaries API

Used to get entries from the Oxford Learner's Dictionaries API.

## Table of Contents

- [Description](#description)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Author](#author)

## Description

This project enables the retrieval of entries from the Oxford Learner's Dictionaries API.

## Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

## Installation

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Karl-Horning/oxford-learners-dictionaries-api.git`
2. Navigate to the project directory: `cd oxford-learners-dictionaries-api`
3. Install dependencies: `npm install`
4. Obtain an API key from the Oxford Learner's Dictionaries API by contacting Jeanna Occhiogrosso.
5. Create an `.env` file in the root folder to securely store your API key and define the API's base URL:
   ```bash
   touch .env
   echo 'API_KEY=your_api_key' >> .env
   echo 'BASE_URL=https://www.oxfordlearnersdictionaries.com/api/v1/dictionaries/english/' >> .env
   ```
6. Run the application: `npm start`
7. The generated HTML file will be located at `src/.temp/output.html`.

## Troubleshooting

If you encounter any issues during installation or execution, please check the following:

- Ensure your API key is correctly configured in the .env file.
- Confirm that Node.js and npm are properly installed on your machine.

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure that the project still works.
4. Create a pull request with a clear description of your changes.

## License

This project is licensed under the [MIT License](./LICENSE).

## References

- [Oxford Learner's Dictionaries API](https://languages.oup.com/oxford-learners-dictionaries-api/)
- [IDM SkPublish - REST API documentation](https://www.oxfordlearnersdictionaries.com/api/v1/documentation/html)
- [DPS PitchLeads API Client Libraries](http://dps.api-lib.idm.fr)

## Author

Karl Horning: [GitHub](https://github.com/Karl-Horning/) | [LinkedIn](https://www.linkedin.com/in/karl-horning/) | [CodePen](https://codepen.io/karlhorning)

# Oxford Learner's Dictionaries API Entry Fetcher

> **Archived.** This proof-of-concept was successfully shipped to production. It is kept here as a portfolio reference only; no further changes are planned.

Fetches dictionary entries from the Oxford Learner's Dictionaries API and converts them into styled HTML, originally built as a proof of concept for a GraphQL-based language learning platform.

Built with Node.js and [Cheerio](https://cheerio.js.org/) for HTML parsing. Output includes inline styles and an optional stylesheet for portability.

The API returns JSON, but the definition field contains a raw HTML string — the full content of the Oxford dictionary page for that entry. Cheerio is used to parse that HTML and extract only the required fields.

## Project Structure

```text
.
├── src/
│   ├── index.js                     # Entry point
│   ├── css/
│   │   └── style.css                # Optional stylesheet
│   ├── data/
│   │   ├── getEntry.data.js         # Fetches raw HTML from the Oxford API
│   │   └── index.js
│   ├── js/
│   │   └── script.js                # Auto-plays pronunciation audio
│   └── services/
│       ├── formatEntry.service.js
│       ├── request.service.js       # HTTPS request handling
│       ├── writeToFile.service.js
│       └── index.js
├── .env                             # API credentials (not committed)
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- An API key from the [Oxford Learner's Dictionaries API](https://languages.oup.com/oxford-learners-dictionaries-api/)

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/Karl-Horning/oxford-learners-dictionaries-api.git
   cd oxford-learners-dictionaries-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file with your credentials:

   ```bash
   touch .env
   echo 'BASE_URL=your_base_url_here' >> .env
   echo 'APP_KEY=your_app_key_here' >> .env
   ```

4. Run the tool:

   ```bash
   node src/index.js
   ```

   By default this fetches the entry for `"test_1"`. To fetch a different word, change the entry ID in `src/index.js`.

5. The generated HTML is written to `src/.temp/output.html`.

## Troubleshooting

- Check that your credentials in `.env` are correct
- Verify the entry ID exists in the Oxford API
- Confirm Node.js v16+ is installed

## References

- [Oxford Learner's Dictionaries API](https://languages.oup.com/oxford-learners-dictionaries-api/) _(link may be broken)_
- [IDM SkPublish – REST API documentation](https://www.oxfordlearnersdictionaries.com/api/v1/documentation/html)
- [DPS PitchLeads API Client Libraries](http://dps.api-lib.idm.fr)

## License

Released under the [MIT License](./LICENSE) by [Karl Horning](https://github.com/Karl-Horning).

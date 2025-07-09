# Oxford Learner's Dictionaries API Entry Fetcher

## 📖 Table of Contents

- [Oxford Learner's Dictionaries API Entry Fetcher](#oxford-learners-dictionaries-api-entry-fetcher)
  - [📖 Table of Contents](#-table-of-contents)
  - [🤓 Overview](#-overview)
  - [🚀 Features](#-features)
  - [📁 Project Structure](#-project-structure)
  - [🛠️ Getting Started](#️-getting-started)
    - [✅ Prerequisites](#-prerequisites)
    - [🔧 Installation](#-installation)
  - [💡 Troubleshooting](#-troubleshooting)
  - [🎨 Styling](#-styling)
  - [📚 References](#-references)
  - [📜 License](#-license)

---

## 🤓 Overview

This project fetches dictionary entries from the Oxford Learner's Dictionaries API and converts them into styled, semantic HTML for reuse in educational tools or static sites.

It uses Node.js to handle the API requests and Cheerio to parse and format the resulting HTML content. The output includes inline styles and optional CSS to make it more portable.

---

## 🚀 Features

- 🔎 Fetch definitions by Oxford Dictionary entry ID
- 🔧 Parses HTML and extracts relevant sections with Cheerio
- 🎨 Outputs semantic, accessible HTML with lightweight CSS
- 📄 Save formatted content to a local file
- 📦 Simple project structure for experimentation or integration
- ✅ Modular codebase using modern JavaScript

---

## 📁 Project Structure

```text
.
├── src/
│   ├── index.js                     # Main entry point for executing the tool
│   ├── data.js                
│   ├── css/
│   │   └── style.css                # Optional reusable stylesheet
│   ├── data/                        # Fetches entry HTML from the Oxford API
│   │   ├── getEntry.data.js         # Uses fetchData to retrieve raw HTML
│   │   └── index.js
│   ├── js/
│   │   └── script.js                # Auto-play pronunciation audio
│   └── services/
│   │   ├── formatEntry.service.js
│   │   ├── request.service.js       # Handles API calls via HTTPS
│   │   ├── writeToFile.service.js
│   │   └── index.js                 # Formats, styles, and writes output
├── .env                             # API credentials (not committed)
├── package.json
└── README.md
```

---

## 🛠️ Getting Started

### ✅ Prerequisites

- Install Node.js and npm: [https://nodejs.org/](https://nodejs.org/)
- Register for an API key at the [Oxford Learner's Dictionaries API](https://languages.oup.com/oxford-learners-dictionaries-api/)

### 🔧 Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Karl-Horning/oxford-learners-dictionaries-api.git
   cd oxford-learners-dictionaries-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file and add your credentials:

   ```bash
   touch .env
   echo 'APP_ID=your_app_id_here' >> .env
   echo 'APP_KEY=your_app_key_here' >> .env
   ```

   (You may optionally include a base URL, though the script uses a hardcoded one.)

4. Run the tool with:

   ```bash
   node src/index.js
   ```

   By default, it fetches the entry for `"test_1"`. To fetch a different entry, modify the value of `entryId` in `src/index.js`.

5. Check the generated HTML in:

   ```text
   src/.temp/output.html
   ```

---

## 💡 Troubleshooting

- ✅ Make sure your API credentials are in `.env`
- 🧪 Check for typos in your entry ID
- ⚠️ Ensure Node.js is installed and compatible (v16+ recommended)

---

## 🎨 Styling

The file `src/css/style.css` contains optional styling for HTML output. It is minimal but improves readability and accessibility.

Highlights:

- Semantically styled sections such as `entry`, `headword`, `definition`, and `example`
- Font fallback stack for legibility
- Inline emphasis for grammatical notes, register labels, and audio
- Borders and padding for definition separation
- Custom classes such as `.audio-playing` for client-side interactivity

You can choose to inline styles or link this stylesheet from the output.

---

## 📚 References

- [Oxford Learner's Dictionaries API](https://languages.oup.com/oxford-learners-dictionaries-api/)
- [IDM SkPublish - REST API documentation](https://www.oxfordlearnersdictionaries.com/api/v1/documentation/html)
- [DPS PitchLeads API Client Libraries](http://dps.api-lib.idm.fr)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ by [Karl Horning](https://github.com/Karl-Horning)

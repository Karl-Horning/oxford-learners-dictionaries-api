# 📘 Oxford Learner's Dictionaries API Entry Fetcher

> ⚠️ **Archived Project — Proof of Concept (2023)**
> Integrated the **Oxford Learner's Dictionaries API** into a **GraphQL endpoint** for the **Learnlight app**.
> Built by Karl Horning as a 2023 prototype to support English learners.
> This project is no longer actively maintained.

---

## 📖 Table of Contents

- [📘 Oxford Learner's Dictionaries API Entry Fetcher](#-oxford-learners-dictionaries-api-entry-fetcher)
  - [📖 Table of Contents](#-table-of-contents)
  - [🤓 Overview](#-overview)
  - [🚀 Features](#-features)
  - [📁 Project Structure](#-project-structure)
  - [🛠️ Getting Started](#️-getting-started)
    - [📦 Prerequisites](#-prerequisites)
    - [🔧 Installation](#-installation)
  - [💡 Troubleshooting](#-troubleshooting)
  - [🎨 Styling](#-styling)
  - [📚 References](#-references)
  - [📜 License](#-license)
  - [👤 Author](#-author)

---

## 🤓 Overview

This Proof of Concept fetches dictionary entries from the **Oxford Learner's Dictionaries API** and converts them into **styled, semantic HTML** for use in educational tools or static sites.

It uses **Node.js** to make API requests and **Cheerio** to parse and format the resulting HTML content.
The output includes inline styles and optional CSS for portability and readability.

---

## 🚀 Features

- 🔎 Fetch definitions by Oxford Dictionary entry ID
- 🔧 Parse HTML and extract relevant sections with **Cheerio**
- 🎨 Output semantic, accessible HTML with lightweight CSS
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
│       ├── formatEntry.service.js
│       ├── request.service.js       # Handles API calls via HTTPS
│       ├── writeToFile.service.js
│       └── index.js                 # Formats, styles, and writes output
├── .env                             # API credentials (not committed)
├── package.json
└── README.md
```

---

## 🛠️ Getting Started

### 📦 Prerequisites

- Install Node.js and npm: [https://nodejs.org/](https://nodejs.org/)
- Register for an API key at the [Oxford Learner's Dictionaries API](https://languages.oup.com/oxford-learners-dictionaries-api/)

---

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

   Optionally include a base URL, though the script uses a hardcoded one.

4. Run the tool with:

   ```bash
   node src/index.js
   ```

   By default, this fetches the entry for `"test_1"`.
   To fetch a different word, change the `entryId` in `src/index.js`.

5. Check the generated HTML in:

   ```text
   src/.temp/output.html
   ```

---

## 💡 Troubleshooting

- Ensure your API credentials are correctly stored in `.env`
- Double-check the entry ID for typos
- Confirm Node.js (v16+) is installed and compatible

---

## 🎨 Styling

The file `src/css/style.css` provides optional styling for the HTML output.
It's minimal but improves **readability and accessibility**.

Highlights:

- Semantic elements for `entry`, `headword`, `definition`, and `example`
- Fallback font stack for legibility
- Inline emphasis for grammatical notes, register labels, and audio
- Borders and padding to visually separate definitions
- `.audio-playing` class for client-side interactivity

You can inline styles or link this stylesheet from the generated output.

---

## 📚 References

- [Oxford Learner's Dictionaries API](https://languages.oup.com/oxford-learners-dictionaries-api/)
- [IDM SkPublish – REST API documentation](https://www.oxfordlearnersdictionaries.com/api/v1/documentation/html)
- [DPS PitchLeads API Client Libraries](http://dps.api-lib.idm.fr)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

> 💤 **Archived Notice:**
> This repository is provided for **reference and educational purposes only**.
> It is **no longer actively maintained** and may not reflect current API formats.

---

## 👤 Author

Made with ❤️ by [Karl Horning](https://github.com/Karl-Horning)

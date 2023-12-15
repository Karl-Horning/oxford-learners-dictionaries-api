// src/data/getEntry.js
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

// apiCaller.js
const https = require("https");

function fetchData(callback) {
    const baseUrl = process.env.BASE_URL;
    const accessKey = process.env.API_KEY;

    const params = {
        format: "html",
    };

    const apiUrl = `${baseUrl}?${new URLSearchParams(params).toString()}`;

    const options = {
        method: "GET",
        headers: {
            accessKey: accessKey,
        },
    };

    const req = https.request(apiUrl, options, (res) => {
        let data = "";

        res.on("data", (chunk) => {
            data += chunk;
        });

        res.on("end", () => {
            // Parse the JSON data
            const response = JSON.parse(data);

            // Access the results array
            const results = response.results;

            // Invoke the callback with the desired data
            callback(null, response.entryContent);
        });
    });

    req.on("error", (error) => {
        // Invoke the callback with an error if there is one
        callback(error, null);
    });

    req.end();
}

module.exports = fetchData;

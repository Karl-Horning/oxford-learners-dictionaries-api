const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const https = require("https");

// Constants for configuration parameters
const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;
const FORMAT = "html";

/**
 * Builds the API URL with the specified format.
 *
 * @returns {string} The constructed API URL.
 */
function buildApiUrl() {
    const params = { format: FORMAT };
    return `${BASE_URL}?${new URLSearchParams(params).toString()}`;
}

/**
 * Builds the request options with the required headers.
 *
 * @returns {Object} The options object for the HTTPS request.
 */
function buildRequestOptions() {
    return {
        method: "GET",
        headers: {
            accessKey: API_KEY,
        },
    };
}

/**
 * Parses the response data and retrieves the entry content.
 *
 * @param {string} data - The raw response data.
 * @returns {string} The entry content from the parsed JSON response.
 * @throws {Error} Throws an error if there's an issue parsing the JSON response.
 */
function handleResponseData(data) {
    try {
        const response = JSON.parse(data);
        return response.entryContent;
    } catch (error) {
        throw new Error("Error parsing JSON response");
    }
}

/**
 * Makes an HTTP request to retrieve entry data.
 *
 * @returns {Promise<string>} A Promise that resolves with the formatted entry content.
 */
function getEntry() {
    return new Promise((resolve, reject) => {
        const apiUrl = buildApiUrl();
        const options = buildRequestOptions();

        const req = https.request(apiUrl, options, (res) => {
            let data = "";

            res.on("data", (chunk) => {
                data += chunk;
            });

            res.on("end", () => {
                try {
                    const entryContent = handleResponseData(data);
                    resolve(entryContent);
                } catch (error) {
                    reject(error);
                }
            });
        });

        req.on("error", (error) => {
            reject(error);
        });

        req.end();
    });
}

module.exports = getEntry;

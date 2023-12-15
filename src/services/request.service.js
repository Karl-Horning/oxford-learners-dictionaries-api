const path = require("path");
const https = require("https");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

// Constants for configuration parameters
const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

/**
 * Builds the API URL with the specified format.
 *
 * @param {Object} options - The options for constructing the API URL.
 * @param {string} options.urlSuffix - The URL suffix to be appended to the base API URL.
 * @param {Object} options.params - Additional parameters for the API request.
 * @returns {string} The constructed API URL.
 */
const buildApiUrl = ({ urlSuffix, params }) => {
    return `${BASE_URL}${urlSuffix}?${new URLSearchParams(params).toString()}`;
};

/**
 * Builds the request options with the required headers.
 *
 * @returns {Object} The options object for the HTTPS request.
 */
const buildRequestOptions = () => {
    return {
        method: "GET",
        headers: {
            accessKey: API_KEY,
        },
    };
};

/**
 * Parses the response data and retrieves the entry content.
 *
 * @param {string} data - The raw response data.
 * @returns {string} The entry content from the parsed JSON response.
 * @throws {Error} Throws an error if there's an issue parsing the JSON response.
 */
const handleResponseData = (data) => {
    try {
        const response = JSON.parse(data);
        return response.entryContent;
    } catch (error) {
        throw new Error("Error parsing JSON response");
    }
};

const fetchData = ({ urlSuffix, params }) => {
    return new Promise((resolve, reject) => {
        const apiUrl = buildApiUrl({ urlSuffix, params });
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
};

module.exports = fetchData;

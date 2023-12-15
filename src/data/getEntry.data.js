const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const https = require("https");

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;
const FORMAT = "html";

function buildApiUrl() {
    const params = { format: FORMAT };
    return `${BASE_URL}?${new URLSearchParams(params).toString()}`;
}

function buildRequestOptions() {
    return {
        method: "GET",
        headers: {
            accessKey: API_KEY,
        },
    };
}

function handleResponseData(data) {
    try {
        const response = JSON.parse(data);
        return response.entryContent;
    } catch (error) {
        throw new Error("Error parsing JSON response");
    }
}

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

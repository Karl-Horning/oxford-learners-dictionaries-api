const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const https = require("https");

function getEntry() {
    return new Promise((resolve, reject) => {
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
                try {
                    const response = JSON.parse(data);
                    resolve(response.entryContent);
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

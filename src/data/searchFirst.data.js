const https = require("https");
const {
    buildApiUrl,
    buildRequestOptions,
    handleResponseData,
} = require("../services");

/**
 * Makes an HTTP request to retrieve search data.
 *
 * @returns {Promise<string>} A Promise that resolves with the formatted search content.
 * @throws {Error} Throws an error if there's an issue with the HTTP request or data handling.
 */
const searchFirst = () => {
    return new Promise((resolve, reject) => {
        const params = {
            q: "test",
            format: "html",
        };
        const apiUrl = buildApiUrl({ urlSuffix: "search/first", params });
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

module.exports = searchFirst;

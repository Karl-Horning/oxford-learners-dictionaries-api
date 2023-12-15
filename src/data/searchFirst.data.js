const { fetchData } = require("../services");

/**
 * Makes an HTTP request to retrieve search data.
 *
 * @returns {Promise<string>} A Promise that resolves with the formatted search content.
 * @throws {Error} Throws an error if there's an issue with the HTTP request or data handling.
 */
const searchFirst = () => {
    const params = {
        q: "test",
        format: "html",
    };
    return fetchData({ urlSuffix: "search/first", params });
};

module.exports = searchFirst;

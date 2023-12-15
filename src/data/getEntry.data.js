const { fetchData } = require("../services");

/**
 * Makes an HTTP request to retrieve entry data.
 *
 * @returns {Promise<string>} A Promise that resolves with the formatted entry content.
 * @throws {Error} Throws an error if there's an issue with the HTTP request or data handling.
 */
const getEntry = () => {
    const params = { format: "html" };
    return fetchData({ urlSuffix: "entries/test_1", params });
};

module.exports = getEntry;

const formatEntry = require("./formatEntry.service");
const writeHtmlToFile = require("./writeToFile.service");
const {
    buildApiUrl,
    buildRequestOptions,
    handleResponseData,
} = require("./request.service");

module.exports = {
    formatEntry,
    writeHtmlToFile,
    buildApiUrl,
    buildRequestOptions,
    handleResponseData,
};

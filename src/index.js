const { getEntry } = require("./data");
const { formatEntry, writeHtmlToFile } = require("./services");

/**
 * Fetches entry data, formats it, and writes the HTML content to a file.
 *
 * @param {string} entry - The entry identifier.
 * @returns {Promise<string | undefined>} A Promise that resolves with the formatted entry content, or undefined if there's an error.
 */
getData = async (entry) => {
    try {
        console.log(`Getting entry: ${entry}`);
        const entryContent = await getEntry(entry);
        const formattedEntry = formatEntry(entryContent);
        writeHtmlToFile(formattedEntry);
        return formattedEntry;
    } catch (error) {
        console.error("Error:", error.message);
    }
};

// Call the function
getData("test_1");

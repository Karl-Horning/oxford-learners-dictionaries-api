const { getEntry } = require("./data");
const { formatEntry, writeHtmlToFile } = require("./services");

getData = async (entry) => {
    try {
        console.log(`Getting entry: ${entry}`);
        const entryContent = await getEntry(entry);
        const formattedEntry = formatEntry(entryContent);
        writeHtmlToFile(formattedEntry);
    } catch (error) {
        console.error("Error:", error.message);
    }
};

// Call the function
getData("test_1");

const { getEntry } = require("./data");
const { formatEntry, writeHtmlToFile } = require("./services");

getData = async (entry) => {
    try {
        console.log(`Getting entry: ${entry}`);
        const entryContent = await getEntry(entry);
        const formattedEntry = formatEntry(entryContent);
        writeHtmlToFile(
            formattedEntry.replace(
                '<!--?xml version="1.0" encoding="utf-8"?-->',
                "<!DOCTYPE html>"
            )
        );
    } catch (error) {
        console.error("Error:", error.message);
    }
};

// Call the function
getData("test_1");

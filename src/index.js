const getEntry = require("./data");
const { formatEntry, writeHtmlToFile } = require("./services");

getData = async () => {
    try {
        const entryContent = await getEntry();
        const formattedEntry = formatEntry(entryContent);
        writeHtmlToFile(formattedEntry);
    } catch (error) {
        console.error("Error:", error.message);
    }
};

// Call the function
getData();

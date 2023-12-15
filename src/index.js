const { getEntry, searchFirst } = require("./data");
const { formatEntry, writeHtmlToFile } = require("./services");

getData = async () => {
    try {
        const entryContent = await getEntry();
        const formattedEntry = formatEntry(entryContent);
        writeHtmlToFile(formattedEntry);
        const q = await searchFirst();
        console.log(q);
    } catch (error) {
        console.error("Error:", error.message);
    }
};

// Call the function
getData();

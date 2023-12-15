const getEntry = require("./data");
const formatEntry = require("./services");

async function getData() {
    try {
        const entryContent = await getEntry();
        const formattedEntry = formatEntry(entryContent);
        console.log("Entry Content:", formattedEntry);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Call the function
getData();

const getEntry = require("./data");
const formatEntry = require("./services");

getData = async () => {
    try {
        const entryContent = await getEntry();
        const formattedEntry = formatEntry(entryContent);
        console.log("Entry HTML:", formattedEntry);
    } catch (error) {
        console.error("Error:", error.message);
    }
};

// Call the function
getData();

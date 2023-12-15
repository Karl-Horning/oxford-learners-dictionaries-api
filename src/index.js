const getEntry = require("./data");

async function getData() {
    try {
        const entryContent = await getEntry();
        console.log("Entry Content:", entryContent);
        // Do something with entryContent here
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Call the function
getData();

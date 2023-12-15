const getEntry = require("./data");

getEntry((error, entryContent) => {
    if (error) {
        console.error("Error:", error.message);
    } else {
        console.log("Entry Content:", entryContent);
    }
});

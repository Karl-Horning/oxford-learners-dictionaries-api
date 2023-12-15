const fetchData = require("./data");

fetchData((error, entryContent) => {
    if (error) {
        console.error("Error:", error.message);
    } else {
        console.log("Entry Content:", entryContent);
    }
});

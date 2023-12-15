const fs = require("fs").promises;
const path = require("path");

/**
 * Writes HTML content to a file.
 *
 * @param {string} html - The HTML content to be written to the file.
 * @returns {Promise<void>} A Promise that resolves when the file is successfully written.
 * @throws {Error} Throws an error if there's an issue with file operations.
 */
const writeHtmlToFile = async (html) => {
    try {
        const fileLocation = path.resolve(__dirname, "../.temp");

        // Check if the directory exists, create it if not
        try {
            await fs.access(fileLocation);
        } catch (error) {
            await fs.mkdir(fileLocation, { recursive: true });
        }

        const filePath = path.join(fileLocation, "output.html");

        // Use asynchronous file writing to avoid blocking the event loop
        await fs.writeFile(filePath, html);

        console.log("HTML written to output.html");
    } catch (error) {
        console.error("Error writing HTML to file:", error.message);
        throw error; // Re-throw the error for external handling, if needed
    }
};

module.exports = writeHtmlToFile;

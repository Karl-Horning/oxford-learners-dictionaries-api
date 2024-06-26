const cheerio = require("cheerio");

/**
 * Adds a stylesheet link to the head of the HTML document.
 *
 * @param {Cheerio} head - The Cheerio object representing the head element.
 * @param {string} cssFile - The name of the CSS file to be linked.
 * @returns {void} - The function does not return a value.
 */
const addStyleSheetToHead = (head, cssFile) => {
    head.append(`<link rel="stylesheet" type="text/css" href="${cssFile}">`);
};

/**
 * Adds a script link to the body of the HTML document.
 *
 * @param {Cheerio} body - The Cheerio object representing the body element.
 * @param {string} script - The name of the script file to be linked.
 * @returns {void} - The function does not return a value.
 */
const addScriptToBody = (body, script) => {
    body.append(`<script src="${script}" defer></script>`);
};

/**
 * Adds a charset meta tag to the head of the HTML document.
 *
 * @param {Cheerio} head - The Cheerio object representing the head element.
 * @returns {void} - The function does not return a value.
 */
const addCharsetToHead = (head) => {
    head.append('<meta charset="UTF-8" />');
};

/**
 * Adds a copyright footer to the main content of the HTML document.
 *
 * @param {Cheerio} main - The Cheerio object representing the main content element.
 * @param {string} q - The value obtained from the span.seo element.
 * @returns {void} - The function does not return a value.
 */
const addCopyrightFooter = (main, q) => {
    main.append(
        `<footer><span class="copyright">(Definition of <strong>${q}</strong> from Oxford Advanced Learner's Dictionary &copy; Oxford University Press)</span></footer>`
    );
};

/**
 * Removes specified elements from the HTML document using provided selectors.
 *
 * @param {CheerioStatic} $ - The Cheerio object representing the entire HTML document.
 * @param {string[]} selectors - An array of CSS selectors identifying elements to be removed.
 * @returns {void} - The function does not return a value.
 * @throws {Error} If an error occurs during HTML manipulation.
 */
const removeElements = ($, selectors) => {
    try {
        selectors.forEach((selector) => {
            const elements = $(selector);
            if (elements.length > 0) {
                elements.remove();
            }
        });
    } catch (error) {
        console.error(
            `Error occurred while removing elements with selectors: ${selectors.join(
                ", "
            )}`,
            error
        );
        throw error;
    }
};

/**
 * Updates the head section of the HTML document.
 *
 * @param {CheerioStatic} $ - The Cheerio object representing the entire HTML document.
 * @returns {void} - The function does not return a value.
 */
const updateHead = ($) => {
    // Replace the header tag with a main tag
    $("header").replaceWith(() => $("<main>").html($("header").html()));

    // Select the HTML tag and add the lang attribute
    $("html").attr("lang", "en");

    // Manipulate head
    const head = $("head");
    addStyleSheetToHead(head, "../css/style.css");
    addCharsetToHead(head);
};

/**
 * Updates the main section of the HTML document.
 *
 * @param {CheerioStatic} $ - The Cheerio object representing the entire HTML document.
 * @returns {void} - The function does not return a value.
 */
const updateMain = ($) => {
    const q = $("span.seo").text();
    const main = $("main");

    // Manipulate main
    addCopyrightFooter(main, q);
};

/**
 * Updates the body section of the HTML document.
 *
 * @param {CheerioStatic} $ - The Cheerio object representing the entire HTML document.
 * @returns {void} - The function does not return a value.
 */
const updateBody = ($) => {
    // Manipulate body
    const body = $("body");
    addScriptToBody(body, "../js/script.js");
};

/**
 * Sanitizes the HTML output by replacing XML declaration with HTML declaration
 * and replacing multiple whitespace with a single space.
 *
 * @param {string} html - The HTML content to be sanitized.
 * @returns {string} - The sanitized HTML content.
 */
const sanitizeHtmlOutput = (html) => {
    return (
        html
            // Replace XML with HTML declaration
            .replace(
                '<!--?xml version="1.0" encoding="utf-8"?-->',
                "<!DOCTYPE html>"
            )
            // Replace multiple whitespace with a single space
            .replace(/\s+/g, " ")
    );
};

/**
 * Formats the HTML document by manipulating its structure and content.
 *
 * @param {string} html - The raw HTML content to be formatted.
 * @returns {string} - The formatted HTML content.
 * @throws {Error} If an error occurs during HTML load or manipulation.
 */
const formatEntry = (html) => {
    // Unnecessary elements to remove
    const selectorsToRemove = [
        // Remove the autocomplete fields
        "span.autocompletes",
        // Removed '[word] [type]' (for example, 'test noun' from next to .seo)
        "span.browse",
        // Remove all of the collapsible elements (like 'Collocations')
        "span.collapse",
        // Remove the dictionary links
        "span.dictlink-g",
        // Removes the index of definitions that are available in the page
        "span.indexing",
        // Remove the idioms
        "span.idm-gs",
        // Remove the link to the idioms at the end of the page
        "span.jumplinks",
        // Remove the word list from the end of the page
        "span.mywordlist-g",
        // Remove the pronunciations at the end of the page
        "span.pracpron",
        // Remove the commas in 'see also'
        "span.sep",
        // Removes the symbols (like 'A1', 'OPAL W', 'OPAL S') from the page
        "span.symbol-g",
        // Removes the topics under 'see also'
        "span.topic-g",
        // Add more selectors as needed
    ];

    try {
        const $ = cheerio.load(html);

        removeElements($, selectorsToRemove);
        updateHead($);
        updateMain($);
        updateBody($);

        return sanitizeHtmlOutput($.html());
    } catch (error) {
        console.error("Error occurred during HTML formatting:", error);
        // If an error occurs, return the original HTML
        return html;
    }
};

module.exports = formatEntry;

const cheerio = require("cheerio");

/**
 * Adds a stylesheet link to the head of the HTML document.
 *
 * @param {Cheerio} head - The Cheerio object representing the head element.
 * @param {string} cssFile - The name of the CSS file to be linked.
 */
const addStyleSheetToHead = (head, cssFile) => {
    head.append(`<link rel="stylesheet" type="text/css" href="${cssFile}">`);
};

/**
 * Adds a charset meta tag to the head of the HTML document.
 *
 * @param {Cheerio} head - The Cheerio object representing the head element.
 */
const addCharsetToHead = (head) => {
    head.append('<meta charset="UTF-8" />');
};

/**
 * Adds a copyright footer to the main content of the HTML document.
 *
 * @param {Cheerio} main - The Cheerio object representing the main content element.
 * @param {string} q - The value obtained from the span.seo element.
 */
const addCopyrightFooter = (main, q) => {
    main.append(
        `<footer><span class="copyright">(Definition of ${q} from Oxford Advanced Learner's Dictionary © Oxford University Press)</span></footer>`
    );
};

/**
 * Removes specified elements from the HTML document using provided selectors.
 *
 * @param {CheerioStatic} $ - The Cheerio object representing the entire HTML document.
 * @param {string[]} selectors - An array of CSS selectors identifying elements to be removed.
 */
const removeElements = ($, selectors) => {
    selectors.forEach((selector) => {
        const elements = $(selector);
        if (elements.length > 0) {
            elements.remove();
        }
    });
};

/**
 * Formats the HTML document by manipulating its structure and content.
 *
 * @param {string} html - The raw HTML content to be formatted.
 * @returns {string} - The formatted HTML content.
 */
const formatEntry = (html) => {
    const $ = cheerio.load(html);
    const q = $("span.seo").text();

    // Replace the header tag with a main tag
    $("header").replaceWith(() => $("<main>").html($("header").html()));

    // Remove unnecessary elements
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
    removeElements($, selectorsToRemove);

    // Manipulate head
    const head = $("head");
    addStyleSheetToHead(head, "../css/style.css");
    addCharsetToHead(head);

    // Manipulate main
    const main = $("main");
    addCopyrightFooter(main, q);

    return $.html();
};

module.exports = formatEntry;

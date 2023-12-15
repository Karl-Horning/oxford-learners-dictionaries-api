const cheerio = require("cheerio");
const getEntry = require("../data");

const addStyleSheetToHead = (head, cssFile) => {
    head.append(`<link rel="stylesheet" type="text/css" href="${cssFile}">`);
};

const addCharsetToHead = (head) => {
    head.append('<meta charset="UTF-8" />');
};

const addCopyrightFooter = (main, q) => {
    main.append(
        `<footer><span class="copyright">(Definition of ${q} from Oxford Advanced Learner's Dictionary © Oxford University Press)</span></footer>`
    );
};

const removeElements = ($, selectors) => {
    selectors.forEach((selector) => $(selector).remove());
};

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
    addStyleSheetToHead(head, "style.css");
    addCharsetToHead(head);

    // Manipulate main
    const main = $("main");
    addCopyrightFooter(main, q);

    return $.html();
};

const getData = async () => {
    try {
        const html = await getEntry();
        const formattedEntry = formatEntry(html);
        console.log("Entry Content:", formattedEntry);
    } catch (error) {
        console.error("Error:", error.message);
    }
};

// Call the function
getData();

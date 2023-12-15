const cheerio = require("cheerio");
const getEntry = require("../data");

const formatEntry = (html) => {
    const $ = cheerio.load(html);
    const q = $("span.seo").text();

    // Replace the header tag with a main tag. This also adds an opening main tag as there is only a header closing tag in the data from the API.
    $("header").replaceWith(function () {
        return $("<main>").html($(this).html());
    });

    // Remove the autocomplete fields
    $("span.autocompletes").remove();
    // Removed '[word] [type]' (for example, 'test noun' from next to .seo)
    $("span.browse").remove();
    // Remove all of the collapsible elements (like 'Collocations')
    $("span.collapse").remove();
    // Remove the dictionary links
    $("span.dictlink-g").remove();
    // Removes the index of definitions that are available in the page
    $("span.indexing").remove();
    // Remove the idioms
    $("span.idm-gs").remove();
    // Remove the link to the idioms at the end of the page
    $("span.jumplinks").remove();
    // Remove the word list from the end of the page
    $("span.mywordlist-g").remove();
    // Remove the pronunciations at the end of the page
    $("span.pracpron").remove();
    // Remove the commas in 'see also'
    $("span.sep").remove();
    // Removes the symbols (like 'A1', 'OPAL W', 'OPAL S') from the page
    $("span.symbol-g").remove();
    // Removes the topics under 'see also'
    $("span.topic-g").remove();

    // Add a CSS file to the head
    const cssFile = "style.css";
    $("head").append(
        `<link rel="stylesheet" type="text/css" href="${cssFile}">`
    );
    // Add the encoding to the head
    $("head").append('<meta charset="UTF-8" />');
    // Add back the copyright info
    $("main").append(
        `<footer><span class="copyright">(Definition of ${q} from Oxford Advanced Learner's Dictionary © Oxford University Press)</span></footer>`
    );

    // Get the modified HTML
    const modifiedHtml = $.html();

    return modifiedHtml;
};

getData = async () => {
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

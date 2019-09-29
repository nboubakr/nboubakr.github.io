/* ------------------------------------------------------------------------------
 *
 *  # Custom JS code
 *
 *  Place here all your custom js. Make sure it's loaded after app.js
 *
 * ---------------------------------------------------------------------------- */
var bookChapters = 1;
var journalPapers = 8;
var conferencePapers = 14;
var totalCitations = "112+";

$(document).ready(function () {
    $("#bookChapters").text(bookChapters);
    $("#journalPapers").text(journalPapers);
    $("#conferencePapers").text(conferencePapers);
    $("#totalCitations").text(totalCitations);
});


// Setup module
// ------------------------------

var Gallery = function() {


    //
    // Setup module components
    //

    // Lightbox
    var _componentFancybox = function() {
        if (!$().fancybox) {
            console.warn('Warning - fancybox.min.js is not loaded.');
            return;
        }

        // Image lightbox
        $('[data-popup="lightbox"]').fancybox({
            padding: 3
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentFancybox();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Gallery.init();
});

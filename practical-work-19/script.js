document.addEventListener("DOMContentLoaded", function () {
    function insertHTML(selector, html) {
        document.querySelector(selector).innerHTML = html;
    }

    function loadSnippet() {
        ajaxUtils.sendGetRequest("./snippets/home-snippet.html", function (response) {
            insertHTML("countainer", response);
        }, false);
    }

    loadSnippet();
});

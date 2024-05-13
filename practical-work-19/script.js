import "./humburger.js";
import "./ajax-utils.js";
import carusel from "./carusel.js";

(function (global) {
    let Content = {};
    const homeHTML = "./snippets/home-snippet.html";
    const contentContainerSelector = ".container";

    const insertHTML = (selector, html) => {
        document.querySelector(selector).innerHTML = html;
    };

    document.addEventListener("DOMContentLoaded", (event) => {
        showLoading(containerSelector);
        setTimeout(() => {
            ajaxUtils.sendGetRequest(
                homeHTML,
                (response) => {
                    insertHTML(containerSelector, response);
                    carousel();
                },
                false
            );
        }, 3750);
    });
    global.Content = Content;
})(window);

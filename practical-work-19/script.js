import "./humburger.js";
import "./ajax-utils.js";
import from "./carusel.js";

(function (global) {
    let Content = {};
    const homeHTML = "./snippets/home-snippet.html";
    const ContainerSelector = ".container";

    const insertHTML = (selector, html) => {
        document.querySelector(selector).innerHTML = html;
    };


    document.addEventListener("DOMContentLoaded", (event) => {
        showLoading(contentContainerSelector);
        setTimeout(() => {
            ajaxUtils.sendGetRequest(
                homeHTML,
                (response) => {
                    insertHTML(contentContainerSelector, response);
                    carousel();
                },
                false
            );
        }, 3750);
    });
    global.Content = Content;
})(window);

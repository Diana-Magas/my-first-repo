import "./humburger.js";
import "./ajax-utils.js";
import  "./carousel.js";

(function (global) {
    let Content = {};
    const homeHTML = "./snippets/home-snippet.html";
    const containerSelector = ".container";

    const insertHTML = (selector, html) => {
        document.querySelector(selector).innerHTML = html;
    };

    const showLoading = (selector) => {
        document.querySelector(selector).innerHTML = `
                <div class="loader__container">
                    <div class="loader"></div>
                </div>`;
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

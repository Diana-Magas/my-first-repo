
// pr-19
import { ajaxUtils } from './ajax-utils.js'; // Правильне імпортування модуля ajaxUtils

(function (global) {
    let Content = {};
    const homeHTML = "./snippets/home-snippet.html";
    const contentContainerSelector = ".container";

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
        showLoading(contentContainerSelector);
        setTimeout(() => {
            ajaxUtils.sendGetRequest( // Використовуємо правильний об'єкт ajaxUtils
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

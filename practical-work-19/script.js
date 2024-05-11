
 import { ajaxUtils } from './ajax-utils.js';

    const contentContainerSelector = ".container";
    const homeHTML = "./snippets/home-snippet.html";

    document.addEventListener("DOMContentLoaded", (event) => {
        // Показати ефект завантаження
        document.querySelector(contentContainerSelector).innerHTML = `
        <div class="loader__container">
            <div class="loader"></div>
        </div>`;

        // Завантажити вміст та вставити його після певного часу
        setTimeout(() => {
            ajaxUtils.sendGetRequest(homeHTML, (response) => {
                // Вставити завантажений вміст
                document.querySelector(contentContainerSelector).innerHTML = response;
                // Ініціалізувати карусель
                carusel();
            }, false);
        }, 3750);
    });


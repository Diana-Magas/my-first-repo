import { ajaxUtils } from './ajax-utils.js';

const contentContainerSelector = ".container";
const homeHTML = "./snippets/home-snippet.html";

document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector(contentContainerSelector).innerHTML = `
    <div class="loader__container">
        <div class="loader"></div>
    </div>`;


    setTimeout(() => {
        ajaxUtils.sendGetRequest(homeHTML, (response) => {
            document.querySelector(contentContainerSelector).innerHTML = response;
            carousel(); 
        }, false);
    }, 3750);
});
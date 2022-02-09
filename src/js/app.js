'use strict';

import { Liquid } from 'liquidjs';
import path from 'path';
import '../css/app.css';
require('bootstrap-icons/font/bootstrap-icons.css');
// import $ from "jquery";

const engine = new Liquid({
    root: path.resolve(__dirname, 'views/'),
    cache: true
});

const app = document.querySelector('#app')

document.addEventListener('DOMContentLoaded', () => {
    setSampleData();
    renderHome();
});

function handlePresetAndLinkEventHandlers() {
    document.querySelectorAll('.preset, .link').forEach(element => {
        element.addEventListener('click', event => {
            const elementValue = event.target.value;
            const linksArray = elementValue.split(',');
            if (linksArray) {
                openLinksInNewTabs(linksArray);
            }
        });
    });
}

function handleSettingsButton() {
    document.getElementById("settings").addEventListener('click', event => {
        chrome.storage.local.get({
            links: [],
            presets: []
        }, items => {
            engine
                .renderFile("settings.liquid",
                    {
                        links: items.links,
                        presets: items.presets
                    }).then(html => {
                        app.innerHTML = html
                        handleBackButton();
                    });
        });
    });
}
function handleBackButton() {
    document.getElementById("back").addEventListener('click', event => {
        renderHome();
    });
}

function renderHome() {
    chrome.storage.local.get({
        links: [],
        presets: []
    }, items => {
        engine
            .renderFile("home.liquid",
                {
                    links: items.links,
                    presets: items.presets
                }).then(html => {
                    app.innerHTML = html
                    handlePresetAndLinkEventHandlers();
                    handleSettingsButton();
                });
    });
}

function openLinksInNewTabs(links, active = false) {
    links.forEach(link => {
        openLink(getUrlWithProtocol(link), active);
    });
}

/**
 * @param {string} url 
 * @returns {string} url with protocol
 */
function getUrlWithProtocol(link) {
    let prefix;
    link.includes("http") || link.includes("https") ? prefix = "" : prefix = "https://";
    return prefix + link;
}

/**
 * @returns {boolean} true if link is valid; false otherwise
 * @param {string} string
 */
function isValidLink(string) {
    const pattern = new RegExp('^(https?:\\/\\/)?' +            // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +    // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' +                         // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +                     // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' +                            // query string
        '(\\#[-a-z\\d_]*)?$', 'i');                             // fragment locator

    return !!pattern.test(string);
}

function openLink(url, active) {
    chrome.tabs.create({
        url: url,
        active: active
    });
}

function setSampleData() {
    chrome.storage.local.set({
        links: ["google.be", "youtube.com", "nani.tsk"],
        presets: [
            {
                id: 1,
                name: "preset1",
                links: ["q.com", "w.com", "e.com"]
            },
            {
                id: 2,
                name: "preset2",
                links: ["r.com", "t.com", "y.com"]
            },
            {
                id: 3,
                name: "preset3",
                links: ["google.be", "youtube.com", "nani.tsk"]
            },
            {
                id: 4,
                name: "preset4",
                links: ["jeff.bezos"]
            }
        ]
    }, () => {

    });
}
// 🤨 INTERESTING INFO ABOUT MESSAGE PASSING
// chrome.runtime.sendMessage() does not work from the background script. Only chrome.tabs.sendMessage works. GG.

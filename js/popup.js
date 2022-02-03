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

document.addEventListener('DOMContentLoaded', () => {
    setSampleData();
    chrome.runtime.sendMessage({
        action: "PopupHasBeenOpened"
    });
});

window.addEventListener('message', event => {
    if (event.data.action === "CompiledHbsTemplateReady") {
        const template = event.data.template;
        console.log(template);
        document.getElementById("app").innerHTML = template;
    }
});

document.addEventListener('click', event => {
    const elementValue = event.target.value;
    const linksArray = elementValue?.split(',');
    if (linksArray) {
        openLinksInNewTabs(linksArray);
    }
});

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
    link.includes("http") || link.includes("https") ? prefix = "" : prefix = "https://";
    return prefix + link;
}

/**
 * @returns {boolean} true if link is valid; false otherwise
 * @param {string} string
 */
function isValidLink(string) {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

    return !!pattern.test(string);
}

function openLink(url, active) {
    chrome.tabs.create({
        url: url,
        active: active
    });
}

// 🤨 INTERESTING INFO ABOUT MESSAGE PASSING
// chrome.runtime.sendMessage() does not work from the background script. Only chrome.tabs.sendMessage works. GG.
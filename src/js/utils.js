'strict'

function openLinks(linksArray, active = false) {
    linksArray.forEach((link) => {
        openLink(getUrlWithProtocol(link), active);
    });
}

function openLink(url, active) {
    chrome.tabs.create({
        url: url,
        active: active,
    });
}

function getUrlWithProtocol(link) {
    let prefix;
    link.includes("http") || link.includes("https")
        ? (prefix = "")
        : (prefix = "https://");
    return prefix + link;
}

module.exports = {
    openLinks,
    openLink,
    getUrlWithProtocol,
}
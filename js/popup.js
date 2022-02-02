function restoreOptions() {
    chrome.storage.local.get({
        links: []
    }, items => {
        if (items.links) {
            // tresh         
        }
    });
}

function setDefaultValues() {
    chrome.storage.local.set({ links: ["google.be", "youtube.com", "nani.tsk"] }, () => {
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setDefaultValues();
    restoreOptions();

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

// 🤨 INTERESTING INFO ABOUT MESSAGE PASSING
// chrome.runtime.sendMessage() does not work from the background script. Only chrome.tabs.sendMessage works. GG.
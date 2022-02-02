let _popup;

chrome.runtime.onMessage.addListener((request, sender, respond) => {
    if (request.action === "PopupHasBeenOpened") {
        _popup = chrome.extension.getViews({ type: 'popup' })[0];
        const iframe = document.getElementById('my-iframe').contentWindow;
        chrome.storage.local.get({
            links: []
        }, items => {
            if (items.links) {
                iframe.postMessage({
                    action: "ReadyToCompile",
                    links: items.links
                }, '*');
            }
        });
    }
});

window.addEventListener('message', event => {
    if (event.data.action === "CompilationComplete") {
        const compiledHbsTemplate = event.data.compiledHbsTemplate;
        _popup?.postMessage({
            action: "CompiledHbsTemplateReady",
            template: compiledHbsTemplate
        }, '*');
    }
});

// getBackgroundPage()
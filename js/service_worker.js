let _popup;

chrome.runtime.onMessage.addListener((request, sender, respond) => {
    if (request.action === "PopupHasBeenOpened") {

        console.log("yo from service worker");
        // _popup = chrome.extension.getViews({ type: 'popup' })[0];
        // const sandboxIframe = document.getElementById('sandbox-iframe').contentWindow;
        // chrome.storage.local.get({
        //     links: [],
        //     presets: []
        // }, items => {
        //     if (items.links) {
        //         sandboxIframe.postMessage({
        //             action: "ReadyToCompile",
        //             links: items.links,
        //             presets: items.presets
        //         }, '*');
        //     }
        // });
    }
});

// window.addEventListener('message', event => {
//     if (event.data.action === "CompilationComplete") {
//         const compiledHbsTemplate = event.data.compiledHbsTemplate;
//         _popup?.postMessage({
//             action: "CompiledHbsTemplateReady",
//             template: compiledHbsTemplate
//         }, '*');
//     }
// });

// getBackgroundPage()
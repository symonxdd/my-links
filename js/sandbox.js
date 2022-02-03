const source = document.getElementById('template').innerHTML;

window.addEventListener('message', event => {
    if (event.data.action === "ReadyToCompile") {
        const links = event.data.links;
        const presets = event.data.presets;
        const template = Handlebars.compile(source)({
            links: links,
            presets: presets
        });

        event.source.postMessage({
            action: "CompilationComplete",
            compiledHbsTemplate: template
        }, event.origin);
    }
});
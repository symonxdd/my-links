const source = document.getElementById('template').innerHTML;

window.addEventListener('message', event => {
    if (event.data.action === "ReadyToCompile") {
        const links = event.data.links;
        const template = Handlebars.compile(source)({ links });

        event.source.postMessage({
            action: "CompilationComplete",
            compiledHbsTemplate: template
        }, event.origin);
    }
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "FetchUserSettings") {
        chrome.storage.local.get({
            links: [],
            presets: []
        }, items => {
            sendResponse({ items: items });
        });
    }
});

chrome.storage.local.set(
    {
        links: [
            {
                id: 1,
                url: "google.be"
            },
            {
                id: 2,
                url: "youtube.com"
            },
            {
                id: 3,
                url: "nani.tsk"
            },
            {
                id: 4,
                url: "twitter.com"
            },
            {
                id: 5,
                url: "twitter.com"
            },
            {
                id: 6,
                url: "twitter.com"
            },
            {
                id: 7,
                url: "twitter.com"
            },
            {
                id: 8,
                url: "twitter.com"
            },
            {
                id: 9,
                url: "twitter.com"
            }
        ],
        presets: [
            {
                id: 1,
                name: "preset1",
                links: ["q.com", "w.com", "e.com"],
            },
            {
                id: 2,
                name: "preset2",
                links: ["r.com", "t.com", "y.com"],
            },
            {
                id: 3,
                name: "preset3",
                links: ["google.be", "youtube.com", "nani.tsk"],
            },
            {
                id: 4,
                name: "preset4",
                links: ["jeff.bezos"],
            },
        ],
    },
    () => { }
);
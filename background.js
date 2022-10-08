chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({ "url": "https://translate.google.com/?hl=ru" });
});





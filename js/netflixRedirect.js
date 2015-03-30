function redirectToNetflix(tab) {
    mixpanel.track("Extension clicked");
    if (tab.url.indexOf('netflix.com') === -1 ) {
        chrome.tabs.update(tab.id, { url: 'https://www.netflix.com' });
    }
}
chrome.browserAction.onClicked.addListener(redirectToNetflix);

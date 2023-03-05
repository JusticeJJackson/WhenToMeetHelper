chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes('https://www.when2meet.com/?')) {
    const plannerParams = tab.url.split("?")[1];
    const urlParameters = new URLSearchParams(plannerParams);
    console.log(urlParameters);
    chrome.tabs.sendMessage(tabId, {
        type: "NEW",
        meetingId: urlParameters
    });
  }
});
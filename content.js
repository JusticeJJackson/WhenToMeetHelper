let currMeeting = "";
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const { type, value, meetingId } = request;
  if (type === 'NEW') {
    currMeeting = meetingId;
    newMeetingLoaded();
  }
});
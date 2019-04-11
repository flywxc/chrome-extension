
let path = document.querySelector('source') && document.querySelector('source').src
path && chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.greeting === 'get' && path) {
      sendResponse(path)
    }
  })
function copy (text) {
  var copyTextarea = document.querySelector('#copy')
  copyTextarea.innerHTML = text
  copyTextarea.select()
  try {
    document.execCommand('copy', true)
  } catch (error) {
    console.log('copy 失败:', error)
  }
}
chrome.contextMenus.create({
  title: "copy source src",
  onclick: () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { greeting: "get" }, function (response) {
        let thunderPath = ThunderEncode(response)
        copy(thunderPath)
        location.href = thunderPath
      })
    })
  }
})
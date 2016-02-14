/**
 * Define it!
 *
 * This extension search for the Google definition of the highlighted words
 *
 * @param info
 * @param tab
 */

function goToDefinition(info, tab) {
  chrome.tabs.create({url: 'http://www.google.com/search?btnG=1&pws=0&q=' + encodeURIComponent('define:' + info.selectionText)});
}

chrome.contextMenus.create({"id": 'define_it', "title": 'Define "%s"', "contexts": ['selection']});
chrome.contextMenus.onClicked.addListener(goToDefinition);
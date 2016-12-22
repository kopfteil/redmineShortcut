  //kb 1.12.16
function onError(error) {
  window.alert('Error: ${error}');
}

function onGot(item) {
  item.sRedUrl = item.sRedUrl || "https://www.redmine.org/";

  var queryInfo = {
    'active': true
  };

  chrome.tabs.query(queryInfo, function (tab) {
    var sTrailingSlash = item.sRedUrl.substr(-1) == "/" ? "" : "/";
     let myNUrl = item.sRedUrl + sTrailingSlash + "issues/" + item.text;

     chrome.tabs.update(tab.id, {url: myNUrl});
  })
}


// This event is fired with the user accepts the input in the omnibox.
  chrome.omnibox.onInputEntered.addListener(
    function(text) {
      chrome.storage.local.get("sRedUrl", function(result) {
 
        let objStuff = {
          'sRedUrl':result.sRedUrl || null,
          'text': text
        } 
        onGot(objStuff)
      })
  });

//getting.then(onGot, onError);
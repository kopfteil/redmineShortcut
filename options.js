
function saveOptions(e) {

	chrome.storage.local.set({
		'sRedUrl': document.querySelector("#sRedUrl").value
	});
}

function restoreOptions() {
	
	function setCurrentChoice(result) {
		document.querySelector("#sRedUrl").value = result.sRedUrl || "https://www.redmine.org/";
	}


	function onError(error) {
		window.alert('Error: ${error}');
	}

	var getting = chrome.storage.local.get("sRedUrl", function(result) {
		if (result) {
			setCurrentChoice(result);
		}
	});
	//getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
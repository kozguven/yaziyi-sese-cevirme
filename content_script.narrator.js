var inited = !!inited;

if(!inited) {
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		if (request.command) {
			console.log("Got request: " + request.command);
			if(request.command == "getSelectionUtterance") {
				getSelectionUtterance();
			}
		}
	});

	getSelectionUtterance = function() {
		var s = window.getSelection().toString();
		if(s && s.length) {
			chrome.runtime.sendMessage({utterance: s.toString()}, function(response) {
				if(response) { console.log(response); }
			});
		} else {
			console.log("Seslendirme Hatası!");
		}
	}
	
	inited = true;
}
inited;
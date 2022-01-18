chrome.contextMenus.create({
		type: "normal",
		title: "Seçili Metni Seslendir",
		contexts: ["selection"],
		onclick: function(info, tabs) {
			var s = info.selectionText;
			if(s && s.length) {
				narrate(s, function(response) {
					if(response) { console.log(response); }
				});
			} else {
				console.log("Seslendirme Hatası.");
			}
		}
	}, 
	function() {
		if(chrome.runtime.lastError !== undefined) { 
			console.error("Runtime error:", chrome.runtime.lastError.message); 
		}
	});
	
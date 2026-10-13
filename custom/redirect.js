/*
• Author: Michaël André Franiatte.
• Contact: michael.franiatte@gmail.com.
• Publisher: https://github.com/michaelandrefraniatte.
• Copyrights: All rights reserved, no permissions granted.
• License: Not open source, not free of charge to use.
*/

// Get consent if already chosen by client
var getitem = localStorage.getItem("copyrights");

// Checking acceptation
if (getitem != "accept") {
	goToMain();
}
else {
	setTimeout(expireAccept, 2000);
}

// Go to main if not accepting copyrights
function goToMain() {
	var target = window.location.href;
	var ismain = isMainPage(target);
	if (localStorage.getItem("rgpd") != "consent") { 
		if (target.endsWith('index.html') | target.endsWith('index.html#copyrights')) {
			return;
		}
		else if (ismain) {
			window.location.href = "./#copyrights"; 
		}
		else {
			window.location.href = "../#copyrights";
		}
	}
}

// Timeout after navigation
function expireAccept() {
	localStorage.setItem("copyrights", "expired accept");
}

// Enable interaction after content loading totally completed
function window_onload() {
	var backloader = document.getElementsByClassName("backloader")[0];
	if (backloader) {
		backloader.style.display = "none";
	}
	var target = window.location.href;
	var ismain = isMainPage(target);
	var sc = document.createElement('script');
	sc.src = ismain ? "custom/custom.js" : "../custom/custom.js";
	document.getElementsByTagName('head')[0].appendChild(sc);
}

// Checking if main page
function isMainPage(str) {
	return str.endsWith('michaelandrefraniatte.github.io') | str.endsWith('michaelandrefraniatte.github.io/') | str.endsWith('michaelandrefraniatte.github.io/index.html') | str.endsWith('michaelandrefraniatte.github.io/#copyrights') | str.endsWith('michaelandrefraniatte.github.io/#copyrights/') | str.indexOf('michaelandrefraniatte.github.io/search') > -1;
}

// About on keyboard key F1
window.addEventListener("DOMContentLoaded", () => {
	document.body.addEventListener('keyup', (event) => {
		if (event.key === 'F1') {
			alert('• Author: Michaël André Franiatte.\n• Contact: michael.franiatte@gmail.com.\n• Publisher: https://github.com/michaelandrefraniatte.\n• Copyrights: All rights reserved, no permissions granted.\n• License: Not open source, not free of charge to use.');
		}
	});
});

// Disable opening search bar
window.addEventListener("keydown",function (e) {
    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) { 
        e.preventDefault();
    }
});
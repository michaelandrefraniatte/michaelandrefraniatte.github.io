
var getitem = localStorage.getItem("copyrights");

// Checking acceptation
if (getitem != "accept") {
	goToMain();
}
else {
	setTimeout(expireAccept, 2000);
}

// Going back and reload with event handler instead of the listener onfocus = (event) => {};
addEventListener("focus", (event) => {
	if (getitem != "accept") {
		goToMain();
	}
	else {
		setTimeout(expireAccept, 2000);
	}
});

// Go to main if not accepting copyrights
function goToMain() {
	var target = window.location.href;
	var ismain = target.endsWith('michaelandrefraniatte.github.io') | target.endsWith('michaelandrefraniatte.github.io/') | target.endsWith('michaelandrefraniatte.github.io/index.html') | target.endsWith('michaelandrefraniatte.github.io/#copyrights') | target.endsWith('michaelandrefraniatte.github.io/#copyrights/') | target.endsWith('michaelandrefraniatte.github.io/index.html/#copyrights');
	if (!ismain) {
		window.location.href = "../#copyrights";
	}
}

// Timeout after navigation
function expireAccept() {
	localStorage.setItem("copyrights", "expired accept");
}

// Enable interaction after content loading totally completed
function window_onload() {
	var target = window.location.href;
	var ismain = target.endsWith('michaelandrefraniatte.github.io') | target.endsWith('michaelandrefraniatte.github.io/') | target.endsWith('michaelandrefraniatte.github.io/index.html') | target.endsWith('michaelandrefraniatte.github.io/#copyrights') | target.endsWith('michaelandrefraniatte.github.io/#copyrights/') | target.endsWith('michaelandrefraniatte.github.io/index.html/#copyrights');
	var sc = document.createElement('script');
	sc.src = ismain ? "custom/custom.js" : "../custom/custom.js";
	document.getElementsByTagName('head')[0].appendChild(sc);
}
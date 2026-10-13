/*
• Author: Michaël André Franiatte.
• Contact: michael.franiatte@gmail.com.
• Publisher: https://github.com/michaelandrefraniatte.
• Copyrights: All rights reserved, no permissions granted.
• License: Not open source, not free of charge to use.
*/

// Get the button
const mybutton = document.getElementsByClassName("topbtn")[0];
if (mybutton) {
	mybutton.addEventListener("click", topFunction);
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

scrollFunction();

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.visibility = "visible";
		mybutton.style.opacity = "1";
	} else {
		mybutton.style.display = "hidden";
		mybutton.style.opacity = "0";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	$("html, body").animate({ scrollTop: 0 }, 1000);
}

// RGPD banner
checkingBanner();

function checkingBanner() {
	var getitem = localStorage.getItem("rgpd");
	if (getitem == "" | getitem == null | getitem == "undefined" | getitem == "no consent") {
		openBanner();
		openBannerContact();
	}
	else if (getitem == "consent") {
		closeBanner();
		var pages = document.querySelectorAll(".page");
		pages.forEach((el) => {
			if (el.dataset.id == 1) {
				el.style.display = "";
			}
		});
	}
}

const infobulle = document.getElementsByClassName("infobulle")[0];
if (infobulle) {
	infobulle.addEventListener("click", openBanner);
}

function openBanner() {
	const banner = document.getElementById("banner");
	if (banner) {
		banner.style.display = "block";
	}
}

const closebanner = document.getElementById("closebanner");
if (closebanner) {
	closebanner.addEventListener("click", closeBanner);
}

const button1banner = document.getElementById("button1banner");
if (button1banner) {
	button1banner.addEventListener("click", rgpdConsent);
}

const button2banner = document.getElementById("button2banner");
if (button2banner) {
	button2banner.addEventListener("click", rgpdNoConsent);
}

function rgpdConsent() {
	localStorage.setItem("rgpd", "consent");
	closeBanner();
	openBannerContact();
}

function rgpdNoConsent() {
	var getitem = localStorage.getItem("copyrights");
	if (getitem == "accept" | getitem == "expired accept") {
		localStorage.setItem("copyrights", "no accept");
		localStorage.setItem("rgpd", "no consent");
	}
	var target = window.location.href;
	var ismain = target.endsWith('michaelandrefraniatte.github.io') | target.endsWith('michaelandrefraniatte.github.io/') | target.endsWith('michaelandrefraniatte.github.io/index.html') | target.endsWith('michaelandrefraniatte.github.io/#copyrights') | target.endsWith('michaelandrefraniatte.github.io/#copyrights/') | target.endsWith('michaelandrefraniatte.github.io/index.html#copyrights') | target.endsWith('michaelandrefraniatte.github.io/index.html#copyrights/');
	if (ismain | target.endsWith('index.html#copyrights')) {
		changeNotVisible();
		document.getElementById("acceptbutton").onclick = async () => {
			var chkBox = document.getElementById('acceptbox');
			if (chkBox.checked) {
				localStorage.setItem("copyrights", "accept");
				changeVisible();
				openBanner();
				openBannerContact();
			}
		};
	}
	else {
		$('#main').removeClass('fadeIn');
		$('#main').addClass('fade');
		for (var i = 0; i < images.length; i++) {
			images[i].title = "";
		}
		document.getElementsByTagName('html')[0].style.overflowY = "hidden";
		document.body.style.overflow = 'hidden';
		var backloader = document.getElementsByClassName("backloader")[0];
		if (backloader) {
			backloader.style.display = "block";
			backloader.style.zIndex = "2147483638";
		}
		window.location.href = "../#copyrights";
	}
}

function closeBanner() {
	const banner = document.getElementById("banner");
	if (banner) {
		banner.style.display = "none";
	}
}

// Contact banner
const infobullecontact = document.getElementsByClassName("infobulle-contact")[0];
if (infobullecontact) {
	infobullecontact.addEventListener("click", openBannerContact);
}

function openBannerContact() {
	const bannerContact = document.getElementById("banner-contact");
	if (bannerContact) {
		bannerContact.style.display = "block";
	}
}

const closebannercontact = document.getElementById("closebanner-contact");
if (closebannercontact) {
	closebannercontact.addEventListener("click", closeBannerContact);
}

const buttonbannercontact = document.getElementById("buttonbanner-contact");
if (buttonbannercontact) {
	buttonbannercontact.addEventListener("click", copyEmailToClipboard);
}

function closeBannerContact() {
	const bannercontact = document.getElementById("banner-contact");
	if (bannercontact) {
		bannercontact.style.display = "none";
	}
}

function copyEmailToClipboard() {
	copyTextToClipboard("michael.franiatte@gmail.com")
}

function copyTextToClipboard(text) {
	if (!navigator.clipboard) {
		fallbackCopyTextToClipboard(text);
		return;
	}
	navigator.clipboard.writeText(text);
}

function fallbackCopyTextToClipboard(text) {
	var textArea = document.createElement("textarea");
	textArea.value = text;
	textArea.style.top = "0";
	textArea.style.left = "0";
	textArea.style.position = "fixed";
	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();
	try {
		var successful = document.execCommand('copy');
	}
	catch { }
	document.body.removeChild(textArea);
}

// Modal box images
var use_fade_inout_img_box = 'no';
var speed_img_box = 0.08;
var vopa_img_box, idpopup_img_box;

var hwin_img_box = window.innerHeight;
var wwin_img_box = window.innerWidth;
var idfadein_img_box;
var img_img_box = new Image();

var imageinc = 0;
var imagearray = [];

var crtdv_img_box = document.createElement('div');
crtdv_img_box.id = 'img_box';
document.getElementsByTagName('body')[0].appendChild(crtdv_img_box);
idpopup_img_box = document.getElementById("img_box");
idpopup_img_box.style.top = 0;
idpopup_img_box.style.left = 0;
idpopup_img_box.style.opacity = 0;
idpopup_img_box.style.width = '100%';
idpopup_img_box.style.height = '100%';
idpopup_img_box.style.display = 'none';
idpopup_img_box.style.position = 'fixed';
idpopup_img_box.style.cursor = 'pointer';
idpopup_img_box.style.textAlign = 'center';
idpopup_img_box.style.zIndex = 999;
idpopup_img_box.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';

function img_box(self) {
	if (event.target.parentNode.className == 'card') {
		imagearray = getNextSiblings(event.target);
	}
	document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
	var namepic_img_box = typeof self === 'string' ? self : self.src;
	vopa_img_box = 0;
	img_img_box.src = namepic_img_box;
	img_img_box.onload = function () {
		idpopup_img_box.innerHTML = '<img src=' + namepic_img_box + '>';
		if (this.height > this.width) {
			document.querySelector("#img_box img").style.height = (document.body.clientHeight) * 0.9 + 'px';
		}
		else {
			document.querySelector("#img_box img").style.width = (document.body.clientWidth) * 0.5 + 'px';
		}
		idpopup_img_box.style.display = 'block';
	}
	if (use_fade_inout_img_box == 'yes') {
		idfadein_img_box = setInterval(function () {
			if (vopa_img_box <= 1.1) {
				idpopup_img_box.style.opacity = vopa_img_box;
				vopa_img_box += speed_img_box;
			}
			else {
				idpopup_img_box.style.opacity = 1;
				clearInterval(idfadein_img_box);
			}
		}, 10)
	}
	else {
		idpopup_img_box.style.opacity = 1;
	}
}

idpopup_img_box.onclick = function (e) {
	imageinc++;
	if (imageinc >= imagearray.length) {
		use_fade_inout_img_box = 'yes';
		imageinc = 0;
		var idfadeout_img_box = setInterval(function () {
			if (vopa_img_box >= 0) {
				idpopup_img_box.style.opacity = vopa_img_box;
				vopa_img_box -= speed_img_box;
			} else {
				idpopup_img_box.style.opacity = 0;
				clearInterval(idfadeout_img_box);
				idpopup_img_box.style.display = 'none';
				idpopup_img_box.innerHTML = '';
				vopa_img_box = 0;
				document.getElementsByTagName('html')[0].style.overflowY = 'visible';
			}
		}, 10)
	}
	else {
		use_fade_inout_img_box = 'no';
		img_box(imagearray[imageinc]);
	}
}

function getNextSiblings(elem) {
	var result = [];
	var node = elem.parentNode.firstChild;
	while (node) {
		if (node.tagName == 'IMG') {
			result.push(node.src);
		}
		node = node.nextElementSibling;
	}
	return result;
}

// Show images on loaded page event calling script and handle on it for not having cursor pointer and info bubbles on not shown images before
var images = document.querySelectorAll("img[title='Click to expand']") || document.querySelectorAll("img[title='']");
for (var i = 0; i < images.length; i++) {
    images[i].style.visibility = "visible";
}

// Fadeout on new link
var modalaccept = document.getElementsByClassName("modalaccept")[0];

$('a:not(.dl-link)').click(function (event) {
	event.preventDefault();
	$('#main').removeClass('fadeIn');
	$('#main').addClass('fade');
	for (var i = 0; i < images.length; i++) {
		images[i].title = "";
	}
	setTimeout(() => { 
		modalaccept.style.display = "none";
		document.getElementsByTagName('html')[0].style.overflowY = "hidden";
		document.body.style.overflow = 'hidden';
		var backloader = document.getElementsByClassName("backloader")[0];
		if (backloader) {
			backloader.style.display = "block";
			backloader.style.zIndex = "2147483638";
		}
		newPage(this.href);
	}, 1000);
});

function newPage(newlocation) {
	localStorage.setItem("copyrights", "accept");
	window.location = newlocation;
}

// Fadout on logo click
function clickLogo() {
	$('#main').removeClass('fadeIn');
	$('#main').addClass('fade');
	for (var i = 0; i < images.length; i++) {
		images[i].title = "";
	}
	setTimeout(() => {
		var target = window.location.href;
		var ismain = target.endsWith('michaelandrefraniatte.github.io') | target.endsWith('michaelandrefraniatte.github.io/') | target.endsWith('michaelandrefraniatte.github.io/index.html') | target.endsWith('michaelandrefraniatte.github.io/#copyrights') | target.endsWith('michaelandrefraniatte.github.io/#copyrights/');
		if (ismain | target.endsWith('index.html#copyrights')) {
			window.location.href = "https://github.com/michaelandrefraniatte";
		}
		else if (target.indexOf('michaelandrefraniatte.github.io/search') > -1) {
			window.location.href = "./";
		}
		else {
			window.location.href = "../";
		}
	}, 1000);
}

var target = window.location.href;
if (!target.endsWith("/#copyrights")) {
	changeVisible();
}

checkAcceptCopyrights();

function checkAcceptCopyrights() {
	var target = window.location.href;
	if (localStorage.getItem("rgpd") != "consent" | target.endsWith("/#copyrights")) {
		changeNotVisible();
		document.getElementById("acceptbutton").onclick = async () => {
			var chkBox = document.getElementById('acceptbox');
			if (chkBox.checked) {
				localStorage.setItem("copyrights", "accept");
				changeVisible();
				setTimeout(expireAccept, 2000);
			}
		};
	}
}

// Timeout after navigation
function expireAccept() {
	localStorage.setItem("copyrights", "expired accept");
}

// Pagination
var numberofpages = document.querySelectorAll(".pagination").length;
var pagenumber = 1;

function goToPage(number) {
	pagenumber = number;
	var pagination = document.querySelectorAll(".pagination");
	pagination.forEach((el) => {
		if (el.dataset.id != pagenumber) {
			el.innerText = "〇";
		}
		else {
			el.innerText = "⬤";
		}
	});
	var pages = document.querySelectorAll(".page");
	pages.forEach((el) => {
		if (el.dataset.id != pagenumber) {
			el.classList.add("fadeout");
			el.classList.remove("fadein");
			setTimeout(() => {
					el.style.display = "none";
			}, "1000");
		}
		else {
			el.classList.remove("fadeout");
			el.classList.remove("fadein");
			el.classList.add("fadein");
			setTimeout(() => {
					el.style.display = "";
			}, "1000");
		}
	});
}

function sliceToPage(number) {
	pagenumber += number;
	if (pagenumber <= 0) {
		pagenumber = 1;
	}
	if (pagenumber >= numberofpages + 1) {
		pagenumber = numberofpages;
	}
	goToPage(pagenumber);
}

// Going back and reload with event handler instead of the listener addEventListener("focus", (event) => {});
onfocus = (event) => {
	checkingBanner();
	for (var i = 0; i < images.length; i++) {
		images[i].title = "Click to expand";
	}
	var target = window.location.href;
	if (!target.endsWith("/#copyrights")) {
		changeVisible();
	}
	checkAcceptCopyrights();
	var backloader = document.getElementsByClassName("backloader")[0];
	if (backloader) {
		backloader.style.display = "none";
	}
};

function changeVisible() {
	$('#main').removeClass('fade');
	$('#main').addClass('fadeIn');
	modalaccept.style.display = "none";
	document.getElementsByTagName('html')[0].style.overflowY = 'visible';
	document.body.style.overflow = 'visible';
	var pages = document.querySelectorAll(".page");
	if (pages) {
		pages.forEach((el) => {
			if (el.dataset.id == pagenumber) {
				el.style.display = "";
			}
		});
	}
}

function changeNotVisible() {
	$('#main').removeClass('fadeIn');
	$('#main').addClass('fade');
	modalaccept.style.display = "block";
	document.getElementsByTagName('html')[0].style.overflowY = "hidden";
	document.body.style.overflow = 'hidden';
	var getitem = localStorage.getItem("copyrights");
	if (getitem == "no accept" | getitem == "expired accept" | localStorage.getItem("rgpd") == "no consent") {
		var chkBox = document.getElementById('acceptbox');
		chkBox.checked = true;
	}
	var pages = document.querySelectorAll(".page");
	if (pages) {
		pages.forEach((el) => {
			el.style.display = "none";
		});
	}
}

// Slideshow for Youtube videos
var Player;
var slideindex = 0;
var videoids = [];

processFill();

function processFill() {
	var player = document.querySelector("#player");
	if (player) {
		var videoid = player.dataset.videoid;
		videoids = videoid.replace(/\[|\]/g, '').split(',');
		addLoader(videoids[0]);
		createPlayer(videoids[0]);
	}
}

function createPlayer(videoid) {
	var widthsize = 100 + '%';
	var heightsize = screen.availWidth * 0.4 + 'px';
	window.YT.ready(function () {
		Player = new YT.Player("player", {
          	host: "https://www.youtube.com",
			width: widthsize,
			height: heightsize,
			videoId: videoid,
            events: {
              'onError': onPlayerError
            }
		});
	});
}

function onPlayerError() {
	Player.destroy();
	addLoader(videoids[slideindex]);
}

function plusSlides(n) {
	slideindex += n;
	if (slideindex >= videoids.length)
		slideindex = 0;
	if (slideindex < 0)
		slideindex = videoids.length - 1;
	addLoader(videoids[slideindex]);
	Player.stopVideo();
	Player.destroy();
	Player = null;
	createPlayer(videoids[slideindex]);
}

function addLoader(videoid) {
	var player = document.querySelector("#player");
	player.innerHTML = "<div class='loader'></div><a target='_blank' href='https://www.youtube.com/watch?v=" + videoid + "'>https://www.youtube.com/watch?v=" + videoid + "<a>";
}

var page = document.querySelector(".page");
if (page) {
	try {
		page.classList.remove("fadeout");
		page.classList.add("fadein");
	}
	catch {}
}

// Check if local
var islocal = window.navigator.userAgent.indexOf("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36 Edg/151.0.0.0") > -1 | true;

// Search on input field with Enter key
var input = document.getElementById('search');
if (input) {
	input.onkeydown = function(e) {
		var param = "?terms=" + input.value.replaceAll(" ", "+");
		var link = islocal ? "https://michaelandrefraniatte.github.io/search.html" + param : "https://michaelandrefraniatte.github.io/search" + param;
		if (e.key == "Enter") {
			if (target != link) {
				$('#main').removeClass('fadeIn');
				$('#main').addClass('fade');
				for (var i = 0; i < images.length; i++) {
					images[i].title = "";
				}
				setTimeout(() => {
					input.style.width = "0";
					location.href = link;
				}, 1000);
			}
		}
	};
}

// Search on input field with click on search icon
var searchicon = document.getElementById('search-icon');
if (searchicon) {
	searchicon.onclick = function() {
		var inputfocus = document.getElementById('search');
		var param = "?terms=" + inputfocus.value.replaceAll(" ", "+");
		var link = islocal ? "https://michaelandrefraniatte.github.io/search.html" + param : "https://michaelandrefraniatte.github.io/search" + param;
		if (inputfocus.style.width == "15vw") {
			if (target != link) {
				$('#main').removeClass('fadeIn');
				$('#main').addClass('fade');
				for (var i = 0; i < images.length; i++) {
					images[i].title = "";
				}
				setTimeout(() => {
					inputfocus.style.width = "0";
					location.href = link;
				}, 1000);
			}
		}
		else {
			inputfocus.style.width = "15vw";
		}
	}
}

// Change size of input field if focus lost
var expandsearch = document.querySelector('.expandSearch');
if (expandsearch) {
	expandsearch.addEventListener('mouseleave', () => {
		document.getElementById('search').style.width = "0";
	})
}

// Get search terms and show cards corresponding
function getSearchParameters() {
    var prmstr = window.location.search.substr(1);
    return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray(prmstr) {
    var params = {};
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}

var params = getSearchParameters();
var searchterms = params.terms;
var cards = document.getElementsByClassName("card");
var searchfound = false;

if (searchterms != "" & searchterms != undefined) {
	var termsarray = searchterms.toLowerCase().split("+");
	[...cards].forEach((element, index, array) => {
		var eleChildText = element.getElementsByClassName("card-text")[0];
		var text = eleChildText.textContent.toLowerCase();
		var eleChildTitle = element.getElementsByClassName("card-title")[0];
		var title = eleChildTitle.textContent.toLowerCase();
		var eleChildWord = element.getElementsByClassName("card-word")[0];
		var word = eleChildWord.textContent.toLowerCase();
		if (termsarray.every(item => text.includes(item)) | termsarray.every(item => title.includes(item)) | termsarray.every(item => word.includes(item))) {
        	element.style.display = "";
			searchfound = true;
		}
	});
	if (!searchfound) {
		[...cards].forEach((element, index, array) => {
			element.style.display = "";
		});
	}
	if (input) {
		input.value = searchterms.replaceAll("+", " ");
	}
}
else {
	[...cards].forEach((element, index, array) => {
        element.style.display = "";
	});
	if (input) {
		input.value = "";
	}
}

// Spoiler image
document.querySelectorAll(".spoiler-overlay").forEach(function (spoiler) {
    spoiler.addEventListener("click", function () {
        spoiler.classList.add("hidden");
        spoiler.textContent = "";
    });
});
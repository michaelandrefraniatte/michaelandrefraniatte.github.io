
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
		mybutton.style.opacity = "0.75";
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
	}
	else if (getitem == "consent") {
		closeBanner();
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
	var ismain = target.endsWith('michaelandrefraniatte.github.io') | target.endsWith('michaelandrefraniatte.github.io/') | target.endsWith('michaelandrefraniatte.github.io/index.html') | target.endsWith('michaelandrefraniatte.github.io/#copyrights') | target.endsWith('michaelandrefraniatte.github.io/#copyrights/') | target.endsWith('michaelandrefraniatte.github.io/index.html/#copyrights');
	if (!ismain) {
		window.location.href = "../#copyrights";
	}
	else {
		changeNotVisible();
		document.getElementById("acceptbutton").onclick = async () => {
			var chkBox = document.getElementById('acceptbox');
			if (chkBox.checked) {
				localStorage.setItem("copyrights", "accept");
				changeVisible();
				openBanner();
				openBannerContact();
				setTimeout(expireAccept, 2000);
			}
		};
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
var bg_color_img_box = 'rgba(0,0,0,0.9)'
var allow_hide_scroll_img_box = 'no'
var use_fade_inout_img_box = 'no'
var speed_img_box = 0.08
var z_index_dv_img_box = 999
var vopa_img_box, idpopup_img_box

var hwin_img_box = window.innerHeight
var wwin_img_box = window.innerWidth
var himg_img_box, padtop_img_box, idfadein_img_box
var img_img_box = new Image()

var imagesource = ''
var imageinc = 0
var imagearray = []

var crtdv_img_box = document.createElement('div')
crtdv_img_box.id = 'img_box'
document.getElementsByTagName('body')[0].appendChild(crtdv_img_box)
idpopup_img_box = document.getElementById("img_box")
idpopup_img_box.style.top = 0
idpopup_img_box.style.left = 0
idpopup_img_box.style.opacity = 0
idpopup_img_box.style.width = '100%'
idpopup_img_box.style.height = '100%'
idpopup_img_box.style.display = 'none'
idpopup_img_box.style.position = 'fixed'
idpopup_img_box.style.cursor = 'pointer'
idpopup_img_box.style.textAlign = 'center'
idpopup_img_box.style.zIndex = z_index_dv_img_box
idpopup_img_box.style.backgroundColor = bg_color_img_box

function img_box(self) {
	document.getElementsByTagName('html')[0].style.overflowY = 'hidden'
	var namepic_img_box = typeof self === 'string' ? self : self.src
	imagesource = namepic_img_box
	vopa_img_box = 0
	img_img_box.src = namepic_img_box
	img_img_box.onload = function () {
		himg_img_box = img_img_box.height
		wimg_img_box = img_img_box.width
		idpopup_img_box.innerHTML = '<img src=' + namepic_img_box + '>'
		if (wimg_img_box > wwin_img_box) {
			idpopup_img_box.getElementsByTagName('img')[0].style.width = '90%'
		}
		else if (himg_img_box > hwin_img_box) {
			idpopup_img_box.getElementsByTagName('img')[0].style.height = '90%'
			himg_img_box = hwin_img_box * 90 / 100
		}
		if (himg_img_box < hwin_img_box) {
			padtop_img_box = (hwin_img_box / 2) - (himg_img_box / 2)
			idpopup_img_box.style.paddingTop = padtop_img_box + 'px'
		}
		else {
			idpopup_img_box.style.paddingTop = '0px'
		}

		if (allow_hide_scroll_img_box == 'yes') {
			document.body.style.overflow = 'hidden'
		}
		idpopup_img_box.style.display = 'block'
	}
	if (use_fade_inout_img_box == 'yes') {
		idfadein_img_box = setInterval(function () {
			if (vopa_img_box <= 1.1) {
				idpopup_img_box.style.opacity = vopa_img_box
				vopa_img_box += speed_img_box
			}
			else {
				idpopup_img_box.style.opacity = 1
				clearInterval(idfadein_img_box)
			}
		}, 10)
	}
	else {
		idpopup_img_box.style.opacity = 1
	}
}
idpopup_img_box.onclick = function () {
	if (imagesource == 'img/myfavours-main.png' | imagesource == 'img/myfavours-down.png' | imagesource == 'img/myfavours-crash.png' | imagesource == 'img/myfavours-mp4.png') {
		imagearray = ['img/myfavours-main.png', 'img/myfavours-down.png', 'img/myfavours-crash.png', 'img/myfavours-mp4.png']
	}
	else if (imagesource == 'img/localstreamplay-main.png' | imagesource == 'img/localstreamplay-host.png' | imagesource == 'img/localstreamplay-script.png') {
		imagearray = ['img/localstreamplay-main.png', 'img/localstreamplay-host.png', 'img/localstreamplay-script.png']
	}
	else if (imagesource == 'img/faceto-main.png' | imagesource == 'img/faceto-message.png' | imagesource == 'img/faceto-list.png' | imagesource == 'img/faceto-search.png' | imagesource == 'img/faceto-modal.png') {
		imagearray = ['img/faceto-main.png', 'img/faceto-message.png', 'img/faceto-list.png', 'img/faceto-search.png', 'img/faceto-modal.png']
	}
	else if (imagesource == 'img/playmedia-main.png' | imagesource == 'img/playmedia-audio.png' | imagesource == 'img/playmedia-book.png' | imagesource == 'img/playmedia-menu.png') {
		imagearray = ['img/playmedia-main.png', 'img/playmedia-audio.png', 'img/playmedia-book.png', 'img/playmedia-menu.png']
	}
	else if (imagesource == 'img/playtube-main.png' | imagesource == 'img/playtube-menu.png' | imagesource == 'img/playtube-play.png' | imagesource == 'img/playtube-api.png') {
		imagearray = ['img/playtube-main.png', 'img/playtube-menu.png', 'img/playtube-play.png', 'img/playtube-api.png',]
	}
	else if (imagesource == 'img/daynote-main.png' | imagesource == 'img/daynote-2024.png' | imagesource == 'img/daynote-edit.png' | imagesource == 'img/daynote-memento.png') {
		imagearray = ['img/daynote-main.png', 'img/daynote-2024.png', 'img/daynote-edit.png', 'img/daynote-memento.png']
	}
	else if (imagesource == 'img/webviewer-main.png' | imagesource == 'img/webviewer-playaudio-autocompletion.png' | imagesource == 'img/webviewer-playaudio-editoff.png' | imagesource == 'img/webviewer-playaudio.png') {
		imagearray = ['img/webviewer-main.png', 'img/webviewer-playaudio-autocompletion.png', 'img/webviewer-playaudio-editoff.png', 'img/webviewer-playaudio.png']
	}
	else if (imagesource == 'img/otep-checkers.png' | imagesource == 'img/otep-chess.png' | imagesource == 'img/otep-chinese-checkers.png' | imagesource == 'img/otep-othello.png' | imagesource == 'img/otep-power4.png' | imagesource == 'img/frontblock-main.png') {
		imagearray = ['img/otep-checkers.png', 'img/otep-chess.png', 'img/otep-chinese-checkers.png', 'img/otep-othello.png', 'img/otep-power4.png', 'img/frontblock-main.png']
	}
	else if (imagesource == 'img/gamergate-main.png' | imagesource == 'img/gamergate-loop.png' | imagesource == 'img/gamergate-end.png' | imagesource == 'img/gamergate-edit.png') {
		imagearray = ['img/gamergate-main.png', 'img/gamergate-loop.png', 'img/gamergate-end.png', 'img/gamergate-edit.png']
	}
	else if (imagesource == 'img/wiimotetheory-main.png' | imagesource == 'img/wiimotetheory-settings.png') {
		imagearray = ['img/wiimotetheory-main.png', 'img/wiimotetheory-settings.png']
	}
	else if (imagesource == 'img/joyconstheory-main.png' | imagesource == 'img/joyconstheory-settings.png') {
		imagearray = ['img/joyconstheory-main.png', 'img/joyconstheory-settings.png']
	}
	else if (imagesource == 'img/kme-cancelreload.png' | imagesource == 'img/kme-doubleclickreload.png' | imagesource == 'img/kme-keepaimdownsight.png' | imagesource == 'img/kme-mousemovetokeys.png' | imagesource == 'img/kme-pushreload.png' | imagesource == 'img/kme-shockmouse.png' | imagesource == 'img/afasc-main.png') {
		imagearray = ['img/kme-cancelreload.png', 'img/kme-doubleclickreload.png', 'img/kme-keepaimdownsight.png', 'img/kme-mousemovetokeys.png', 'img/kme-pushreload.png', 'img/kme-shockmouse.png', 'img/afasc-main.png']
	}
	else if (imagesource == 'img/playandlisten-client.png' | imagesource == 'img/playandlisten-main.png' | imagesource == 'img/remoteaudio-main.png' | imagesource == 'img/alwaystogether.png') {
		imagearray = ['img/playandlisten-client.png', 'img/playandlisten-main.png', 'img/remoteaudio-main.png', 'img/alwaystogether.png']
	}
	else if (imagesource == 'img/eosresol-main.png' | imagesource == 'img/eosresol-reaction1.png' | imagesource == 'img/eosresol-reaction2.png' | imagesource == 'img/eosresol-reaction3.png') {
		imagearray = ['img/eosresol-main.png', 'img/eosresol-reaction1.png', 'img/eosresol-reaction2.png', 'img/eosresol-reaction3.png']
	}
	else if (imagesource == 'img/pgm-main.png' | imagesource == 'img/pgm-ir.png' | imagesource == 'img/pgm-classic.png' | imagesource == 'img/pgm-extra.png' | imagesource == 'img/sigil-main.png') {
		imagearray = ['img/pgm-main.png', 'img/pgm-ir.png', 'img/pgm-classic.png', 'img/pgm-extra.png', 'img/sigil-main.png']
	}
	else if (imagesource == 'img/presentation-1.png' | imagesource == 'img/presentation-2.png' | imagesource == 'img/presentation-3.png' | imagesource == 'img/presentation-4.png') {
		imagearray = ['img/presentation-1.png', 'img/presentation-2.png', 'img/presentation-3.png', 'img/presentation-4.png']
	}
	else if (imagesource == 'img/onsale-1.png' | imagesource == 'img/onsale-2.png' | imagesource == 'img/onsale-3.png' | imagesource == 'img/onsale-4.png' | imagesource == 'img/bio-pic-main.png' | imagesource == 'img/bio-frog-main.png' | imagesource == 'img/paint-art-main.png' | imagesource == 'img/paint-tile-main.png' | imagesource == 'img/paint-color-main.png') {
		imagearray = ['img/onsale-1.png', 'img/onsale-2.png', 'img/onsale-3.png', 'img/onsale-4.png', 'img/bio-pic-main.png', 'img/bio-frog-main.png', 'img/paint-art-main.png', 'img/paint-tile-main.png', 'img/paint-color-main.png']
	}
	else if (imagesource == 'img/fta-script.png' | imagesource == 'img/fta-keyboard.png' | imagesource == 'img/fta-mouse.png' | imagesource == 'img/fta-controller.png' | imagesource == 'img/wiijoy4fps-main.png') {
		imagearray = ['img/fta-script.png', 'img/fta-keyboard.png', 'img/fta-mouse.png', 'img/fta-controller.png', 'img/wiijoy4fps-main.png']
	}
	else if (imagesource == 'img/bc-router.png' | imagesource == 'img/bc-server.png' | imagesource == 'img/changemac-main.png' | imagesource == 'img/changedns-main.png') {
		imagearray = ['img/bc-router.png', 'img/bc-server.png', 'img/changemac-main.png', 'img/changedns-main.png']
	}
	else if (imagesource == 'img/arva-monitor.png' | imagesource == 'img/arva-main.png') {
		imagearray = ['img/arva-monitor.png', 'img/arva-main.png']
	}
	else if (imagesource == 'img/tt-main.png' | imagesource == 'img/tt-add.png') {
		imagearray = ['img/tt-main.png', 'img/tt-add.png']
	}
	else if (imagesource == 'img/mo-main.png' | imagesource == 'img/mo-xc.png' | imagesource == 'img/chatoverlay-main.png' | imagesource == 'img/mousetrackeroverlay.png') {
		imagearray = ['img/mo-main.png', 'img/mo-xc.png', 'img/chatoverlay-main.png', 'img/mousetrackeroverlay.png']
	}
	else if (imagesource == 'img/encryptedpages-main.png' | imagesource == 'img/pp-main.png' | imagesource == 'img/fastaccess1.png' | imagesource == 'img/fastaccess2.png' | imagesource == 'img/fastaccess3.png' | imagesource == 'img/fastaccess4.png' | imagesource == 'img/fastaccess5.png' | imagesource == 'img/fastaccess6.png' | imagesource == 'img/fastaccess.png') {
		imagearray = ['img/encryptedpages-main.png', 'img/pp-main.png', 'img/fastaccess1.png', 'img/fastaccess2.png', 'img/fastaccess3.png', 'img/fastaccess4.png', 'img/fastaccess5.png', 'img/fastaccess6.png', 'img/fastaccess.png']
	}
	else if (imagesource == 'img/dc-main.png' | imagesource == 'img/dc-managed.png') {
		imagearray = ['img/dc-main.png', 'img/dc-managed.png']
	}
	else if (imagesource == 'img/audiomerger-main.png' | imagesource == 'img/audiospliter-main.png') {
		imagearray = ['img/audiomerger-main.png', 'img/audiospliter-main.png']
	}
	else if (imagesource == 'img/wjp-main.png' | imagesource == 'img/wjr-main.png') {
		imagearray = ['img/wjp-main.png', 'img/wjr-main.png']
	}
	else if (imagesource == 'img/crossair-main.png' | imagesource == 'img/aimsight-main.png') {
		imagearray = ['img/crossair-main.png', 'img/aimsight-main.png']
	}
	else if (imagesource == 'img/cf-main.jpg' | imagesource == 'img/backbone-main.png') {
		imagearray = ['img/cf-main.jpg', 'img/backbone-main.png']
	}
	else if (imagesource == 'img/tv-main.jpg' | imagesource == 'img/raytube-main.png') {
		imagearray = ['img/tv-main.jpg', 'img/raytube-main.png']
	}
	else if (imagesource == 'img/cv-main.png' | imagesource == 'img/profile-main.png' | imagesource == 'img/portfolio-main.png' | imagesource == 'img/soul-controller-main.png') {
		imagearray = ['img/cv-main.png', 'img/profile-main.png', 'img/portfolio-main.png', 'img/soul-controller-main.png']
	}
	else if (imagesource == 'img/texteditor-main.png' | imagesource == 'img/ce-main.png' | imagesource == 'img/enumconstant.png' | imagesource == 'img/configfile.png') {
		imagearray = ['img/texteditor-main.png', 'img/ce-main.png', 'img/enumconstant.png', 'img/configfile.png']
	}
	else if (imagesource == 'img/desktopcapture-main.png' | imagesource == 'img/gameplaycapture-main.png') {
		imagearray = ['img/desktopcapture-main.png', 'img/gameplaycapture-main.png']
	}
	else if (imagesource == 'img/yt-mafvideo.png' | imagesource == 'img/yt-mafstream.png') {
		imagearray = ['img/yt-mafvideo.png', 'img/yt-mafstream.png']
	}
	else if (imagesource == 'img/ss-main.png' | imagesource == 'img/test-gamepad.png' | imagesource == 'img/ms-paint.png' | imagesource == 'img/on-dev-main.png') {
		imagearray = ['img/ss-main.png', 'img/test-gamepad.png', 'img/ms-paint.png', 'img/on-dev-main.png']
	}
	else if (imagesource == 'img/caa-main.png' | imagesource == 'img/webcamoverlay-main.png') {
		imagearray = ['img/caa-main.png', 'img/webcamoverlay-main.png']
	}
	else if (imagesource == 'img/playtov.png' | imagesource == 'img/playto-main.png' | imagesource == 'img/playflix-main.png' | imagesource == 'img/playmount-main.png' | imagesource == 'img/playney-main.png' | imagesource == 'img/playprime-main.png' | imagesource == 'img/playnal-main.png' | imagesource == 'img/playocs.png' | imagesource == 'img/playchy.png' | imagesource == 'img/playhbo.png' | imagesource == 'img/playtf1.png' | imagesource == 'img/playcloud.png' | imagesource == 'img/playther-main.png') {
		imagearray = ['img/playtov.png', 'img/playto-main.png', 'img/playflix-main.png', 'img/playmount-main.png', 'img/playney-main.png', 'img/playprime-main.png', 'img/playnal-main.png', 'img/playocs.png', 'img/playchy.png', 'img/playhbo.png', 'img/playtf1.png', 'img/playcloud.png', 'img/playther-main.png']
	}
	else if (imagesource == 'img/rmoto-main.png' | imagesource == 'img/rmofo-main.png' | imagesource == 'img/rmoso-main.png' | imagesource == 'img/rmopo-main.png' | imagesource == 'img/rmodo-main.png' | imagesource == 'img/rmoco-main.png') {
		imagearray = ['img/rmoto-main.png', 'img/rmofo-main.png', 'img/rmoso-main.png', 'img/rmopo-main.png', 'img/rmodo-main.png', 'img/rmoco-main.png']
	}
	else if (imagesource == 'img/ac-1.png' | imagesource == 'img/ac-2.png' | imagesource == 'img/ac-3.png' | imagesource == 'img/ac-4.png') {
		imagearray = ['img/ac-1.png', 'img/ac-2.png', 'img/ac-3.png', 'img/ac-4.png']
	}
	else if (imagesource == 'img/aimamplifier-main.png' | imagesource == 'img/resizedvision.png' | imagesource == 'img/av-main.png') {
		imagearray = ['img/aimamplifier-main.png', 'img/resizedvision.png', 'img/av-main.png']
	}
	else if (imagesource == 'img/runandgun-main.png' | imagesource == 'img/ciine-main.png' | imagesource == 'img/trax.png' | imagesource == 'img/launcher-main.png' | imagesource == 'img/playandreplay.png') {
		imagearray = ['img/runandgun-main.png', 'img/ciine-main.png', 'img/trax.png', 'img/launcher-main.png', 'img/playandreplay.png']
	}
	else if (imagesource == 'img/stopit-main.png' | imagesource == 'img/fairplay-main.png') {
		imagearray = ['img/stopit-main.png', 'img/fairplay-main.png']
	}
	else if (imagesource == 'img/perfwatch-main.png' | imagesource == 'img/weboverlay-main.png') {
		imagearray = ['img/perfwatch-main.png', 'img/weboverlay-main.png']
	}
	else if (imagesource == 'img/mousecontroltester-main.png' | imagesource == 'img/interceptiontest-main.png') {
		imagearray = ['img/mousecontroltester-main.png', 'img/interceptiontest-main.png']
	}
	else if (imagesource == 'img/playzer.png' | imagesource == 'img/playtify-main.png') {
		imagearray = ['img/playzer.png', 'img/playtify-main.png']
	}
	else if (imagesource == 'img/playcipe.png' | imagesource == 'img/mediatoy.png') {
		imagearray = ['img/playcipe.png', 'img/mediatoy.png']
	}
	else if (imagesource == 'img/testconnection-main.png' | imagesource == 'img/authentication-main.png' | imagesource == 'img/installer-main.png') {
		imagearray = ['img/testconnection-main.png', 'img/authentication-main.png', 'img/installer-main.png']
	}
	else if (imagesource == 'img/nono-main.png' | imagesource == 'img/mastermind-main.png' | imagesource == 'img/gumball-main.png') {
		imagearray = ['img/nono-main.png', 'img/mastermind-main.png', 'img/gumball-main.png']
	}
	else if (imagesource == 'img/eden-main.png' | imagesource == 'img/symposium-main.png') {
		imagearray = ['img/eden-main.png', 'img/symposium-main.png']
	}
	else if (imagesource == 'img/footstepamplifier-main.png' | imagesource == 'img/echoboost.png') {
		imagearray = ['img/footstepamplifier-main.png', 'img/echoboost.png']
	}
	else
		imagearray = []
	imageinc++
	if (imageinc >= imagearray.length) {
		imageinc = 0
		var idfadeout_img_box = setInterval(function () {
			if (vopa_img_box >= 0) {
				idpopup_img_box.style.opacity = vopa_img_box
				vopa_img_box -= speed_img_box
			} else {
				idpopup_img_box.style.opacity = 0
				clearInterval(idfadeout_img_box)
				idpopup_img_box.style.display = 'none'
				idpopup_img_box.innerHTML = ''
				vopa_img_box = 0
				document.getElementsByTagName('html')[0].style.overflowY = 'visible'
			}
		}, 10)
	}
	else
		img_box(imagearray[imageinc])
}

// Fadeout on new link
var modalaccept = document.getElementsByClassName("modalaccept")[0];

$('a:not(.dl-link)').click(function (event) {
	event.preventDefault();
	changeNotVisible();
	document.getElementById("acceptbutton").onclick = async () => {
		var chkBox = document.getElementById('acceptbox');
		if (chkBox.checked) {
			localStorage.setItem("copyrights", "accept");
			modalaccept.style.display = "none";
			document.getElementsByTagName('html')[0].style.overflowY = 'visible';
			document.body.style.overflow = 'visible';
			newPage(this.href);
		}
	};
});

function newPage(newlocation) {
	window.location = newlocation;
}

// Fadout on logo click
function clickLogo() {
	$('body').not('#bodymain').removeClass('fadeIn');
	$('body').not('#bodymain').addClass('fade');
	$('#main').removeClass('fadeIn');
	$('#main').addClass('fade');
	setTimeout(() => {
		var target = window.location.href;
		var ismain = target.endsWith('michaelandrefraniatte.github.io') | target.endsWith('michaelandrefraniatte.github.io/') | target.endsWith('michaelandrefraniatte.github.io/index.html') | target.endsWith('michaelandrefraniatte.github.io/#copyrights') | target.endsWith('michaelandrefraniatte.github.io/#copyrights/') | target.endsWith('michaelandrefraniatte.github.io/index.html/#copyrights');
		if (!ismain) {
			window.location.href = "../";
		}
		else {
			window.location.href = "https://github.com/michaelandrefraniatte";
		}
	}, 1000);
}

changeVisible();

checkAcceptCopyrights();

function checkAcceptCopyrights() {
	var target = window.location.href;
	if (target.endsWith("/#copyrights")) {
		changeNotVisible();
		document.getElementById("acceptbutton").onclick = async () => {
			var chkBox = document.getElementById('acceptbox');
			if (chkBox.checked) {
				localStorage.setItem("copyrights", "accept");
				changeVisible();
				openBanner();
				openBannerContact();
				setTimeout(expireAccept, 2000);
			}
		};
	}
}

// Timeout after navigation
function expireAccept() {
	localStorage.setItem("copyrights", "expired accept");
}

// Going back and reload with event handler instead of the listener addEventListener("focus", (event) => {});
onfocus = (event) => {
	changeVisible();
};

function changeVisible() {
	$('#main').removeClass('fade');
	$('#main').addClass('fadeIn');
	setTimeout(() => {
		modalaccept.style.display = "none";
		document.getElementsByTagName('html')[0].style.overflowY = 'visible';
		document.body.style.overflow = 'visible';
	}, 500);
}

function changeNotVisible() {
	$('#main').removeClass('fadeIn');
	$('#main').addClass('fade');
	setTimeout(() => {
		modalaccept.style.display = "block";
		document.getElementsByTagName('html')[0].style.overflowY = "hidden";
		document.body.style.overflow = 'hidden';
		var getitem = localStorage.getItem("copyrights");
		if (getitem == "no accept" | getitem == "expired accept" | localStorage.getItem("rgpd") == "no consent") {
			var chkBox = document.getElementById('acceptbox');
			chkBox.checked = true;
		}
	}, 500);
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
	var page = document.querySelectorAll(".page");
	page.forEach((el) => {
		if (el.dataset.id != pagenumber) {
			el.style.display = "none";
		}
		else {
			el.style.display = "";
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
		createPlayer(videoids[0]);
	}
}

function createPlayer(videoid) {
	var widthsize = 100 + '%';
	var heightsize = screen.availWidth * 0.355 + 'px';
	window.YT.ready(function () {
		Player = new YT.Player("player", {
			width: widthsize,
			height: heightsize,
			videoId: videoid,
			playerVars: {
				autoplay: 0,
				controls: 1,
				rel: 1,
				showinfo: 1,
				loop: 0,
				modestbranding: 1
			},
			events: {
			}
		});
	});
}

function plusSlides(n) {
	slideindex += n;
	if (slideindex >= videoids.length)
		slideindex = 0;
	if (slideindex < 0)
		slideindex = videoids.length - 1;
	Player.stopVideo();
	Player.destroy();
	Player = null;
	var player = document.querySelector("#player");
	player.innerHTML = "<div class='loader'></div>";
	createPlayer(videoids[slideindex]);
}

// Disguard context menu to open
document.body.addEventListener("contextmenu", function (e) {
	e.preventDefault();
});
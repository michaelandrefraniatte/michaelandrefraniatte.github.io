/*
• Author: Michaël André Franiatte.
• Contact: michael.franiatte@gmail.com.
• Publisher: https://github.com/michaelandrefraniatte.
• Copyrights: All rights reserved, no permissions granted.
• License: Not open source, not free of charge to use.
*/

var carousel = document.querySelector('.carousel');
var track = document.querySelector('.carousel-track');
var cards = document.querySelectorAll('.card');
var currentX = 0;
var targetX = 0;

/* ---------------------------------------
    ANIMATION LOOP
---------------------------------------- */
function animate() {
    currentX += (targetX - currentX) * 0.12;
    track.style.transform = `translateX(${-currentX}px)`;
    updateScale();
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

/* ---------------------------------------
    SCALE ANIMATION
---------------------------------------- */
function updateScale() {
    var center = window.innerWidth / 2;
    cards.forEach(card => {
        var rect = card.getBoundingClientRect();
        var cardCenter = rect.left + rect.width / 2;
        var distance = Math.abs(center - cardCenter);
        var scale = Math.max(0.8, 1 - distance / 200);
        if (scale < 1) {
            card.style.transform = `scale(${scale})`;
        }
    });
}

/* ---------------------------------------
    BUTTON NAVIGATION
---------------------------------------- */
function goToCard(index) {
    var card = cards[index];
    var cardLeft = card.offsetLeft;
    var cardCenter = cardLeft + card.clientWidth / 2;
    var viewportCenter = carousel.clientWidth / 2;
    targetX = cardCenter - viewportCenter;
    for (i = 0; i < cards.length; i++) {
        cards[i].title = "";
    }
    cards[index].title = "Click to expand";
}

document.querySelector('.left-btn').onclick = () => {
    var i = getCenteredCardIndex();
    if (i > 0) {
        goToCard(i - 1);
    }
};

document.querySelector('.right-btn').onclick = () => {
    var i = getCenteredCardIndex();
    if (i < cards.length - 1) {
        goToCard(i + 1);
    }
};

/* ---------------------------------------
    FIND CURRENT CENTERED CARD
---------------------------------------- */
function getCenteredCardIndex() {
    var center = window.innerWidth / 2;
    let closestIndex = 0;
    let closestDist = Infinity;
    cards.forEach((card, i) => {
        var rect = card.getBoundingClientRect();
        var cardCenter = rect.left + rect.width / 2;
        var dist = Math.abs(center - cardCenter);
        if (dist < closestDist) {
            closestDist = dist;
            closestIndex = i;
        }
    });
    return closestIndex;
}

/* ---------------------------------------
    CLICK CARD TO CENTER IT
---------------------------------------- */
cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        goToCard(index);
    });
});

addEventListener("load", (event) => { 
    carousel.style.visibility = "visible";
})

/* ---------------------------------------
    MODAL BOX IMAGES
---------------------------------------- */
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

function img_box(self, el) {
    if (el.title == "Click to expand") {
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
                document.querySelector("#img_box img").style.width = (document.body.clientWidth) * 0.75 + 'px';
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
/*
• Author: Michaël André Franiatte.
• Contact: michael.franiatte@gmail.com.
• Publisher: https://github.com/michaelandrefraniatte.
• Copyrights: All rights reserved, no permissions granted.
• License: Not open source, not free of charge to use.
*/

Player();

function Player() {
    var texttospeech = document.querySelector('div');

    var speechrecognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    speechrecognition.continuous = true;
    speechrecognition.interimResults = false;
    speechrecognition.start();

    speechrecognition.onend = event => {
        speechrecognition.start();
    };

    speechrecognition.onresult = event => {
        var transcript = event.results[event.results.length - 1][0].transcript;
        if (texttospeech) {
            texttospeech.innerHTML += transcript + "<br>";
        }
    };
}
/*
• Author: Michaël André Franiatte.
• Contact: michael.franiatte@gmail.com.
• Publisher: https://github.com/michaelandrefraniatte.
• Copyrights: All rights reserved, no permissions granted.
• License: Not open source, not free of charge to use.
*/

$(document).ready(function() {
    var div = document.getElementById('info');
    $.getJSON("https://jsonip.com/?callback=?", function (data) {
        div.innerHTML = "Your IP ISP: " + data.ip;
    });
});
/*
• Author: Michaël André Franiatte.
• Contact: michael.franiatte@gmail.com.
• Publisher: https://github.com/michaelandrefraniatte.
• Copyrights: All rights reserved, no permissions granted.
• License: Not open source, not free of charge to use.
*/

miniplayer();

async function miniplayer() {
  const video = document.createElement('video');
  video.srcObject = await navigator.mediaDevices.getDisplayMedia();
  video.onloadedmetadata = async () => {
    video.play();
    await video.requestPictureInPicture();
  }
}
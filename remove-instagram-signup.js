// ==UserScript==
// @name         Remove Instagram Sign Up
// @namespace
// @version      1.0
// @description  Hide instagram's singup pop up and layover
// @author
// @grant        metadata
// ==/UserScript==
const hideInstaLightbox = () => {
    const { getElementsByClassName } = document;
    const lightbox = getElementsByClassName('g6RW6');
    const loginText = getElementsByClassName('_7UhW9');
    const layover = getElementsByClassName('RnEpo');
    const elements = [lightbox, loginText, layover];
    if (lightbox) {
        elements.forEach(el => el[0].setAttribute('style', 'display: none;'));
    }
  }

  window.setInterval(() => {
    hideInstaLightbox();
  }, 5000);
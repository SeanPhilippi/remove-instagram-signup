// ==UserScript==
// @name         Remove Instagram Sign Up
// @namespace    Violentmonkey Scripts
// @match       *://*.instagram.com/*
// @grant       none
// @version      1.0
// @description  Hide instagram's singup pop up and layover
// @author
// ==/UserScript==
const hideInstaLightbox = () => {
    console.log('boom boom!')
    const lightbox = document.getElementsByClassName('g6RW6');
    const loginText = document.getElementsByClassName('_7UhW9');
    const layover = document.getElementsByClassName('RnEpo');
    const elements = [lightbox, loginText, layover];
    if (lightbox) {
        elements.forEach(el => el[0].setAttribute('style', 'display: none;'));
        document.body.style.overflow = "scroll";
    }
    // have a looping check function that checks for the appearance of the overlay
    // when overlay is spotted and hidden, stop watcher.  hiding the lightbox only needs to happen once
    // check to make sure any scrolling disabling is reversed as well...
  }

  window.setInterval(() => {
    hideInstaLightbox();
  }, 5000);
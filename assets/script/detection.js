'use strict';
/*

JavaScript Basics
PREET
Detecting window sizes and cursor coordinates
 */

const pageW = document.querySelector('.page-w');
const pageH = document.querySelector('.page-h');
const cursorX = document.querySelector('.cursor-x');
const cursorY = document.querySelector('.cursor-y');
const circle = document.querySelector('.circle')
const portrait = document.querySelector('.orientation');
const deep = document.querySelector('.pixels');
const os = document.querySelector('.os');
const language = document.querySelector('.language');
const browser = document.querySelector('.browser');
const cookies = document.querySelector('.cookies');



function system() {
    os.innerText = `OS : ${navigator.platform}`;
    language.innerText = `language : ${navigator.language}`;
}

function cooky() {
    let cookie = navigator.cookieEnabled;
    if (!cookie) {
        cookies.innerText = `Cookies: Disabled`;     
    }else{
    cookies.innerText = `Cookies: Enabled`;
    }
}

function browser1() {
    if(navigator.userAgent.includes('Firefox')){
        browser.innerText = `Browser: Firefox`;
    }  else
    if(navigator.userAgent.includes('Edg')){
        browser.innerText = `Browser: Edge`;
    } 
     else
    if(navigator.userAgent.includes('Chrome')){
        browser.innerText = `Browser: Chrome`;
    } 
     else
    if(navigator.userAgent.includes('Safari')){
        browser.innerText = `Browser: Safari`;
    } 
}


function readWindow() {
    pageW.innerText = `window width: ${window.innerWidth}px`;
    pageH.innerText = `window height: ${window.innerHeight}px`;
}

function depth() {
    deep.innerText = `Pixel Depth is : ${screen.pixelDepth}`;

}

function type() {
    if (window.innerWidth > window.innerHeight) {
        portrait.innerText = ' Orientation : Landscape';
    } else {

        portrait.innerText = ' Orientation : Portarait';
    }
}

window.addEventListener('load', () => {

    readWindow();
    type();
    system();
    cooky();
    browser1()
    depth()
});
window.addEventListener('resize', () => {

    readWindow();
    type();
    system();
    cooky();
    browser1()
    depth()
});
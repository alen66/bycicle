'use strict';
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle--menu');
var navToggleClose = document.querySelector('.main-nav__toggle--cross');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  }
});

navToggleClose.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
  }
});

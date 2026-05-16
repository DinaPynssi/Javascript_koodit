'use strict';

const picture = document.querySelector('#target');
const trigger = document.querySelector('#trigger');

trigger.addEventListener('mouseover', function() {
  picture.src = 'img/picB.jpg';
});

trigger.addEventListener('mouseout', function() {
  picture.src = 'img/picA.jpg';
});
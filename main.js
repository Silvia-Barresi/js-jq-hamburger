// primo click, appare il menù;
// se clicco che è già visibile, invece scompare.

var ham = $('.hamburger-menu');
var hamShow = $('.fa-bars');
var hamHide = $('.close');

// se clicco sull'icona è visibile
hamShow.click(
  function(){
    ham.show();
});

// se clicco nuovamente quando è visibile, scompare
hamHide.click(
  function(){
    ham.hide();
});

/* global $ */

$(document).ready(function() {
  
  
  // $('#about').click(function(event){
  //   event.preventDefault();
  //   $('#about').addClass('active');
  //   $('.about').removeClass('hidden');
  //   $('#prototype').removeClass('active');
  //   $('.prototype').addClass('hidden');
  //   $('#contact').removeClass('active');
  //   $('.contact').addClass('hidden');
  // });
  
  // $('#prototype').click(function(event){
  //   event.preventDefault();
  //   $('#prototype').addClass('active');
  //   $('.prototype').removeClass('hidden');
  //   $('#about').removeClass('active');
  //   $('.about').addClass('hidden');
  //   $('#contact').removeClass('active');
  //   $('.contact').addClass('hidden');
  // });
  
  // $('#contact').click(function(event){
  //   event.preventDefault();
  //   $('#contact').addClass('active');
  //   $('.contact').removeClass('hidden');
  //   $('#about').removeClass('active');
  //   $('.about').addClass('hidden');
  //   $('#prototype').removeClass('active');
  //   $('.prototype').addClass('hidden');
  // })
  
  var tabs = ['contact', 'about', 'prototype'];
  
  function eventHandler(event){
    event.preventDefault();
    tabs.forEach(function(item){
      if(event.currentTarget.id === item){
        $('#' + item).addClass('active');
        $('.' + item).removeClass('hidden');
      } else {
        $('#' + item).removeClass('active');
        $('.' + item).addClass('hidden');
      }
    });
  }
  
  $('#prototype').click(eventHandler);
  $('#about').click(eventHandler);
  $('#contact').click(eventHandler);

});
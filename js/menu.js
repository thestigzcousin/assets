
/*------------------------------------window resize reload---------------------------------------*/

$(function(){
  var timer = false;
  var prewidth = $(window).width();
  $(window).resize(function() {
  if (timer !== false) {
  clearTimeout(timer);
  }
  timer = setTimeout(function() {
  var nowWidth = $(window).width();
  if(prewidth !== nowWidth){
  // リロード
  location.reload();
  }
  prewidth = nowWidth;
  }, 200);
  });
  });


/*-------------------------------carousel (without pulg-in)----------------------------------------*/

$(function(){
  if (window.matchMedia("(max-width: 480px)").matches){
    $('.carousel > span').on('click', function(){
      if($(this).hasClass('prev')){
        console.log('左');
        $('.carousel > ul').animate({'margin-left':'-100%'}, 800, function(){
          $('.carousel > ul').css('margin-left', '0');
          $('.carousel > ul').append($('.carousel > ul > li:first-child'));
        });
    } else{
        $('.carousel > ul').prepend($('.carousel > ul > li:last-child'));
        $('.carousel > ul').css('margin-left', '-100%');
        $('.carousel > ul').animate({'margin-left':'0'}, 800);
      }
    });
  } else if (window.matchMedia("(max-width: 767px)").matches){
    $('.carousel > span').on('click', function(){
      if($(this).hasClass('prev')){
        console.log('左');
        $('.carousel > ul').animate({'margin-left':'-50%'}, 800, function(){
          $('.carousel > ul').css('margin-left', '0');
          $('.carousel > ul').append($('.carousel > ul > li:first-child'));
        });
    } else {
        $('.carousel > ul').prepend($('.carousel > ul > li:last-child'));
        $('.carousel > ul').css('margin-left', '-50%');
        $('.carousel > ul').animate({'margin-left':'0'}, 800);
      }
    });
  } else if (window.matchMedia("(max-width: 1200px)").matches){
    $('.carousel > span').on('click', function(){
      if($(this).hasClass('prev')){
        console.log('左');
        $('.carousel > ul').animate({'margin-left':'-33%'}, 800, function(){
          $('.carousel > ul').css('margin-left', '0');
          $('.carousel > ul').append($('.carousel > ul > li:first-child'));
        });
    } else {
        $('.carousel > ul').prepend($('.carousel > ul > li:last-child'));
        $('.carousel > ul').css('margin-left', '-33%');
        $('.carousel > ul').animate({'margin-left':'0'}, 800);
      }
    });
  } else {
    $('.carousel > span').on('click', function(){
      if($(this).hasClass('prev')){
        console.log('左');
        $('.carousel > ul').animate({'margin-left':'-25%'}, 800, function(){
          $('.carousel > ul').css('margin-left', '0');
          $('.carousel > ul').append($('.carousel > ul > li:first-child'));
        });
    } else {
        $('.carousel > ul').prepend($('.carousel > ul > li:last-child'));
        $('.carousel > ul').css('margin-left', '-25%');
        $('.carousel > ul').animate({'margin-left':'0'}, 800);
      }
    });
  };
});


/*-------------------------------pin button clicked on carousel----------------------------------*/

$(document).ready(function(){
  $('.change-text').show();       /* default display */
  $('change-text-after').hide();  /* clicked display */

  /* Executed when clicked */
  $('#1').click(function () {

  /* Add or remove "show" class in .change-text */
  $('.change-text').toggleClass('show');

  if($('.change-text').hasClass('show')){
    $('.change-text').hide();
    $('.change-text-after').show();
  } else {
    $('.change-text').show();
    $('.change-text-after').hide();
    }
  });
});

$(document).ready(function(){
  $('.change-text-2').show();
  $('change-text-after-2').hide();
  $('#2').click(function () {
  $('.change-text-2').toggleClass('show');
  if($('.change-text-2').hasClass('show')){
    $('.change-text-2').hide();
    $('.change-text-after-2').show();
  }else{
    $('.change-text-2').show();
    $('.change-text-after-2').hide();
    }
  });
});

$(document).ready(function(){
  $('.change-text-3').show();
  $('change-text-after-3').hide();
  $('#3').click(function () {
  $('.change-text-3').toggleClass('show');
  if($('.change-text-3').hasClass('show')){
    $('.change-text-3').hide();
    $('.change-text-after-3').show();
  }else{
    $('.change-text-3').show();
    $('.change-text-after-3').hide();
    }
  });
});

$(document).ready(function(){
  $('.change-text-4').show();
  $('change-text-after-4').hide();
  $('#4').click(function () {
  $('.change-text-4').toggleClass('show');
  if($('.change-text-4').hasClass('show')){
    $('.change-text-4').hide();
    $('.change-text-after-4').show();
  }else{
    $('.change-text-4').show();
    $('.change-text-after-4').hide();
    }
  });
});

$(document).ready(function(){
  $('.change-text-5').show();
  $('change-text-after-5').hide();
  $('#5').click(function () {
  $('.change-text-5').toggleClass('show');
  if($('.change-text-5').hasClass('show')){
    $('.change-text-5').hide();
    $('.change-text-after-5').show();
  }else{
    $('.change-text-5').show();
    $('.change-text-after-5').hide();
    }
  });
});
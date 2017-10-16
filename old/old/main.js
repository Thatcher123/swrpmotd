$(document).ready(function() {
  // Hide elements
  $('.button').next().hide();
  $('.back-to-top').hide();

  // When a button is clicked
  $('.button').click(function() {
    $(this).next().slideToggle(1000);
  });

  // Resizing
  let size = (img, text, heading, signature, body) => {
    $('img:not(.staff)').stop().animate({ width: img });
    $('p, h2, li').css('font-size', text);
    $('h1').css('font-size', heading);
    $('#signature, .back-to-top').css('font-size', signature);
    $('body').stop().animate({ width: body });
  };

  let resizeContent = () => {
    if($(window).width() < 900) {
      size('500px', '12px', '16px', '9px', '80%');
      $('.back-to-top').html('\u25B2');
      $('.back-to-top').css('border-radius', '100%');
    } else
    if($(window).width() < 1200) {
      size('600px', '13px', '18px', '10px', '70%');
      $('.back-to-top').html('Beam me up!');
      $('.back-to-top').css('border-radius', '5px');
    } else {
      size('700px', '16px', '24px', '12px', '60%');
      $('.back-to-top').html('Beam me up, Scotty!');
      $('.back-to-top').css('border-radius', '5px');
    };
  };

  resizeContent(); // Resize on page load

  $(window).resize(() => { resizeContent() }); // Resize with page

  // Beam me up, Scotty!
  let offset = 500,
      duration = 500;

  $(window).scroll(function() {
    if($(this).scrollTop() > offset) {
      $('.back-to-top').fadeIn(duration);
    } else {
      $('.back-to-top').fadeOut(duration);
    };
  });

  $('.back-to-top').click(event => {
    event.preventDefault();

    $('html, body').animate({ scrollTop: 0 }, 1000);
    return false;
  });



  // Theme stuff 'cause I'm gay

  let curTheme = 'dark',
      darkPrimary = '#ff8c00',
      lightPrimary = '#1c86ee';

  $('.dark').css({ 'color': darkPrimary, 'font-weight': 'bold' });

  $('.dark').click(() => {
    if(curTheme != 'dark') {
      // Background
      $('html').css({
        'background': '#242424',
        'background': 'linear-gradient(to bottom right, #072039, #000)'
      });
      // Theme
      $('body').css('background', '#222');
      $('p, li').css('color', 'white');
      $('.button, .back-to-top').css('background', darkPrimary);
      $('a').css('color', darkPrimary);
      $('ol > li').removeClass('lightList');
      $('.back-to-top').css('color', 'white');
      // Theme marker
      curTheme = 'dark';
      $('.theme').css({ 'color': 'white', 'font-weight': 'normal' });
      $('.dark').css({ 'color': darkPrimary, 'font-weight': 'bold' });
    };
  });

  $('.light').click(() => {
    if(curTheme != 'light') {
      // Background
      $('html').css('background', 'url(lightBackground.jpg)');
      // Theme
      $('body').css('background', '#fff');
      $('p, li').css('color', 'black');
      $('.button, .back-to-top').css('background', lightPrimary);
      $('a').css('color', lightPrimary);
      $('ol > li').addClass('lightList');
      $('.back-to-top').css('color', 'white');
      // Theme marker
      curTheme = 'light';
      $('.theme').css({ 'color': 'black', 'font-weight': 'normal' });
      $('.light').css({ 'color': lightPrimary, 'font-weight': 'bold' });
    };
  });
});

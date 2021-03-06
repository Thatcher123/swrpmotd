const darkTheme = () => {
  // Background
  $('html').css({
    'background': '#072039',
    'background': 'linear-gradient(to bottom right, #072039, #000)'
  });
  // Theme
  $('body').css('background', '#222');
  $('p, li, .theme').css({ 'color': 'white', 'font-weight': 'normal' });
  $('a, #dark').css({ 'color': '#006aff', 'font-weight': 'bold' });
  $('#back-to-top').css('color', 'white');
  $('h1, h2, #back-to-top').css('background', '#006aff');
  $('ol > li').removeClass('purple');
}
const lightTheme = () => {
  // Background
  $('html').css('background', 'url(assets/space.jpg)');
  // Theme
  $('body').css('background', '#fff');
  $('p, li, .theme').css({ 'color': 'black', 'font-weight': 'normal' });
  $('a, #light').css({ 'color': '#006aff', 'font-weight': 'bold' });
  $('#back-to-top').css('color', 'white');
  $('h1, h2, #back-to-top').css('background', '#006aff');
  $('ol > li').removeClass('purple');
}
const cosmosTheme = () => {
  // Background
  $('html').css('background', 'url(assets/space2.jpg)');
  // Theme
  $('body').css('background', '#222');
  $('p, li, .theme').css({ 'color': 'white', 'font-weight': 'normal' });
  $('a, #cosmos').css({ 'color': '#7d26cd', 'font-weight': 'bold' });
  $('h1, h2').css('background', 'url(assets/space2.jpg)');
  $('#back-to-top').css({ 'background': '#7d26cd', 'color': 'white' });
  $('ol > li').addClass('purple');
}

const themeSelector = () => {
  $('.theme').click(function() {
    switch($(this).attr('id')) {
      case 'dark':
        darkTheme();
      break;
      case 'light':
        lightTheme();
      break;
      case 'cosmos':
        cosmosTheme();
      break;
    };
  });
}

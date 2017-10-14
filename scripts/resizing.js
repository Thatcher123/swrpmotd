const size = (logo, text, stext, heading, signature, body) => {
  $('#logo').stop().animate({ width: logo });
  $('p, li').css('font-size', text);
  $('#intro p, h2').css('font-size', stext);
  $('h1').css('font-size', heading);
  $('#signature, .back-to-top').css('font-size', signature);
  $('body').stop().animate({ width: body });
};

let values = [
  900,
  1200
];

const resizeContent = () => {
  if($(window).width() < values[0]) {
    size('500px', '12px', '14px', '18px', '9px', '80%');
  } else
  if($(window).width() < values[1]) {
    size('600px', '13px', '15px', '24px', '10px', '75%');
  } else {
    size('700px', '14px', '16px', '30px', '12px', '70%');
  }
};

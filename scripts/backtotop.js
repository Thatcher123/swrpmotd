let offset = 1000,
    duration = 1000;

const backToTop = () => {
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
};

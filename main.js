$(document).ready(() => {
  // Hiding elements beep beep
  $('h1, h2').next().hide();
  $('.back-to-top').hide();

  // Show rules with "openrules" parameter
  if(decodeURIComponent(window.location.search.substring(1)) == "showrules") {
    $('.open').show();
  };

  // Buttons!
  $('h1, h2').click(function() {
    $(this).next().slideToggle(1000); // Slide that open like you slide into those DMs
  });

  backToTop(); // Beam me up, Scotty!

  resizeContent(); // Resize content on page load
  $(window).resize(() => resizeContent()); // Automatically resize content!

  themeSelector(); // Theme selector functionality! (ooo fancy)
});

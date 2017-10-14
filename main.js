$(document).ready(() => {

  let converter = new showdown.Converter();
      content = $('#content');
      staffList = $('#staff');
      update = $('#update');

  // Add content to the page from the markdown file!
  $.get('content.md', data => {
    content.html(converter.makeHtml(data)); // the thing with the stuff (yay)
  }, 'text')
  .done(() => { // Executed when the content is added!
    // Wrap all the content around "// start" and "// end" with a div
    // Give divs unique IDs with "// start ID"
    // "introduction" has special styling!

    $('p:contains(// start)').each(function() {
      let divId = $(this).text().split(' ')[2]
      $(this).nextUntil('p:contains(// end)').wrapAll(`<div id="${divId}"></div>`);
    });
    $('p:contains(// start)').remove();
    $('p:contains(// end)').remove();

    // Hiding all them elements! beep beep!
    $('h1, h2').next().hide();

    // Get them buttons doing those jobs! (good work buttons)
    $('h1, h2').click(function() {
      $(this).next().slideToggle(1000); // Slide that open like you slide into those DMs
    });
  });

  // info.json
  $.getJSON("info.json", function(data) {
    console.log(data);
    // Staff list
    $.each(data.stafflist, function(key, val) {
      staffList.append(`<h2>${key}</h2>`);
      console.log($(this))
      for(i = 0; i < $(this).length; i++) {
        console.log($(this)[i]);
        staffList.append(`<a href="http://steamcommunity.com/profiles/${$(this)[i]}/" target="_blank"><img src="https://steamsignature.com/status/english/${$(this)[i]}.png"/></a>`)
      };
    });

    // Last update
    update.html(`<b>Last Update:</b> ${data.lastupdate}`)
  });

  $('.back-to-top').hide();
  backToTop(); // Beam me up, Scotty!

  resizeContent(); // Resize content on page load
  $(window).resize(() => resizeContent()); // Automatically resize content!

  themeSelector(); // Theme selector functionality! (ooo fancy)

});

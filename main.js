$(document).ready(() => {

  let converter = new showdown.Converter();
      content = $('#content');
      staff = $('#staff');
      update = $('#update');

  // Add content to the page from content.md!
  $.get('content.md', data => {
    content.html(converter.makeHtml(data)); // The thing with the stuff
  }, 'text')
  .done(() => { // Executed when the content is successfully added!
    // Wraps all the content around "// start" and "// end" with a div
    // For some reason it doesn't like when divs don't have unique IDs so give all of them an ID by doing like "// start ID"
    // "intro" has special styling yo

    $('p:contains(// start)').each(function() { // Runs for each "// start"
      let divId = $(this).text().split(' ')[2]
      $(this).nextUntil('p:contains(// end)').wrapAll(`<div id="${divId}"></div>`);
    });
    $('p:contains(// start)').remove(); // Remove "// start" from page
    $('p:contains(// end)').remove(); // Remove "// end" from page

    // info.json stuff (yay)
    $.getJSON("info.json", data => {
      document.title = data.title;

      // Staff list
      $.each(data.stafflist, function(key, val) { // For each item in the staff list!
        staff.append(`<h2>${key}</h2>`);
        for(i = 0; i < $(this).length; i++) {
          staff.append(`<a class="staff${key}" href="https://steamcommunity.com/profiles/${$(this)[i]}/" target="_blank"><img src="https://steamsignature.com/status/english/${$(this)[i]}.png"/></a>`)
        };
        $(`.staff${key}`).wrapAll('<div></div>');
      });

      // Add the last update to the page!
      update.html(`<b>Last Update:</b> ${data.lastupdate}`)
    })
    .done(() => { // Executed when stuff has been added (woo)
      // Hiding all them elements! beep beep!
      $('h1, h2').next().hide();
      $('#staff h2').next().show();


      let show = getUrlParameter('show');

      if(show) { // At the end of the URL, shove in "?open=" with ids seperated by ","
        let showIds = show.split(',');

        for(i = 0; i < showIds.length; i++) {
          $(`#${showIds[i]}`).next().show(); // This will then show those on load!
        };
      };

      // Get them buttons doing those jobs! (good work buttons)
      $('h1, h2').click(function() {
        $(this).next().slideToggle(1000); // Slide that open like you slide into those DMs
      });

      let themeParam = getUrlParameter('theme'); // Theme URL parameter!

      if(themeParam) {
        switch(themeParam) {
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
      };
    });
  });

  backToTop(); // Beam me up, Scotty!

  resizeContent(); // Resize content automagically!

  themeSelector(); // Themes! I like to go overboard, okay?
});

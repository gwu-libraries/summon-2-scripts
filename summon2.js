// This is forked from GVSU, who in turn thanked Fairfield University 
// and University of Huddersfield for their code and help

$(document).ready(function() {

  // Add our sylesheet to all pages
  $('head').append('<link rel="stylesheet" type="text/css" href="http://gwappassets-prod.wrlc.org/app-assets/summon-2-scripts/summon2.css" />');

  // Fix the homepage banner links, which are invisible because
  // they are white on a white background
  if($("div.home").css("display") !== 'none') {
    $("div.home").prepend('<div id="home-banner" style="height:5.75em;background-color:#005581;">&nbsp;</div>');
  }

});

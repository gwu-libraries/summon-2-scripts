// This is forked from GVSU, who in turn thanked Fairfield University 
// and University of Huddersfield for their code and help

$(document).ready(function() {

  // Add our sylesheet to all pages
  $('head').append('<link rel="stylesheet" type="text/css" href="http://gwappassets-prod.wrlc.org/app-assets/summon-2-scripts/summon2.css" />');

  // get chat box (because it's inside the default Summon links we're no longer displaying (display:none;)        
  //var chatimg = $(".chat");

  // Need to wait until angular has time to apply changes
  setTimeout(function() {
    // Fix the homepage banner links, which are invisible because
    // they are white on a white background
    if($("div.home").css("display") !== 'none') {
      $("div.home").prepend('<div id="home-banner">&nbsp;</div>');
    }

    // Insert GW links in header
    $( '<div class="gwLinks"><a href="http://www.library.gwu.edu/help/reference/ask-a-librarian">Ask a Librarian</a> &bull; <a href="http://findit.library.gwu.edu/catalog">Catalog</a> &bull; <a href="http://libguides.gwu.edu/databases">Subject Databases</a> &bull; <a href="http://www.library.gwu.edu/howdoi/aboutarticlesplus">About</a> &bull; <a href="https://docs.google.com/spreadsheet/viewform?formkey=dDJBVlR3MHMzS3pDeWRPYU5vNkh0Z2c6MQ"  target="_blank">Found a Problem?</a></div>' ).insertAfter( ".siteLinks" );

    // Change Feedback link to include URL to pass to Google Form 
    $('.gwLinks a').last().attr('href', function() {
      return this.href + '&entry_7=' + encodeURIComponent(location.href);
    });

    // testing var inside function (which adds timeout)        
    //var chatimg = $(".chat");

    // add chat link bacik
    //$(".gwLinks").append(chatimg);

    // empty flow login form         
    //$(".flowLogin .ng-pristine .ng-valid").empty();

  }, 1000);

// end new function here, old articlesplus added here
// });

//$(document).ready(function() {
	// get chat box before emptying link div	
	var chatimg = $(".chat.top");
	// empty topbar link div	
	$(".grid .hidden-tablet .hidden-phone .siteLinks").empty();
        // Add Ask a Librarian and Classic Catalog links
	$('.siteLinks .link').prepend('<a href="http://www.library.gwu.edu/help/reference/ask-a-librarian">Ask a Librarian</a> | <a href="http://findit.library.gwu.edu/catalog">Catalog</a> | <a href="http://libguides.gwu.edu/databases">Subject Databases</a> | <a href="http://www.library.gwu.edu/howdoi/aboutarticlesplus">About</a> | <a href="https://docs.google.com/spreadsheet/viewform?formkey=dDJBVlR3MHMzS3pDeWRPYU5vNkh0Z2c6MQ"  target="_blank">Found a Problem?</a>&nbsp;&nbsp;');
	
	// Change Feedback link to include URL to pass to Google Form 
	$('.siteLinks .link a').last().attr('href', function() {
		return this.href + '&entry_7=' + encodeURIComponent(location.href);	
	}); 
	// add chat link back
	$(".siteLinks .link").append(chatimg);

	// Change message about number of results and add search tip	
	var count = $('#summary .highlight:last').html( );
	$('#summary').replaceWith('<div style="margin-top:5px;"><p><span class="highlight">' + count + '</span>&nbsp;results. <br><span id="refineSearchHelp" style="">Use quotation marks for exact phrases (e.g. "higher education").</span>&nbsp;</p></div>');

	// Add inset note about catalog
	// hiding since issues seem solved.	
	//	if ($('#facet\\:library_catalog_filter[applied|="true"]').length > 0) {
	//		$('label[for|="facet:library_catalog_filter"]').append('<div class="excluded"><table cellspacing="0" cellpadding="5"><tbody><tr><td><span class="highlight">All items not included yet. </span><a href="http://surveyor.gelman.gwu.edu" target="_blank">Go to complete catalog</a>.</td></tr></tbody></table></div>');
	//	}

	// Hide orange "Get Journal Article" button pointing to print holdings - temporary?
	$('.bgh-get-document-button').hide();

	// from mreidsma Prettify Best Bets
	if($(".best-bet-list").length > 0) {
  
		var bbTitle = $(".best-bet-title").text();
		var bbURL = $(".best-bet").find(".more").find("a").attr("href");
		var bbDesc = $(".best-bet-body").find(".detail").text();
 
		if(bbDesc === ".") {
 
			$("li.best-bet").html('<div class="theme-best-bet-icon"></div><div class="best-bet-title"><a href="' + bbURL + '">' + bbTitle + '</a></div>');
 
			} else { // Has a description
 
			$("li.best-bet").html('<div class="theme-best-bet-icon"></div><div class="best-bet-title"><a href="' + bbURL + '">' + bbTitle + '</a></div><div class="best-bet-body"><div class="detail"><p>' + bbDesc + '</p></div>');
 
		}
 
	}
	// provide alternatives in case of error
	//$(".errorMessage").append("  <br>Please try one of the <a href=\'http://libguides.gwu.edu/databases\'>Libraries\' subject databases</a> or the <a href=\'http://surveyor.gelman.gwu.edu\'>catalog</a>.");  

//end document.ready
});


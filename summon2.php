<?php

// This is from the GVSU fork, not using it in our implementation

header("Access-Control-Allow-Origin: *");
require('../libs/simple_html_dom.php');

/* Scrape the catalog page to get the ASRS link so we can really request this bad boy */

$record = $_REQUEST['record'];
$html = file_get_html('http://library.catalog.gvsu.edu/record=' . $record);

$i = 0;

foreach($html->find('table#bib_items tr td[width=38%] a') as $element) {

    //var_dump($element);

    // ASRS item
		if (strpos($element,'asrs') !== false) {
      $link = $element->href;
      $url = 'http://library.catalog.gvsu.edu'. $link;
      echo $url;
    }
	}

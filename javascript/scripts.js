// Site Constructor
var Site = function Site(siteInfo) {
  this.title = siteInfo.title || "No title",
  this.description = siteInfo.description || "No description",
  this.image = siteInfo.image ? `http://www.jasongodson.com/public/images/project-images/${siteInfo.image}.png`
    : "http://placehold.it/400x200",
  this.link = siteInfo.link || '#',
  this.buttonText = siteInfo.buttonText || 'VIEW LIVE SITE',
  this.html =  // onclick to make hover work on mobile
`<div class='item' onclick=''>
   <div class='image'>
     <img src="${this.image}" />
   </div>
   <div class='info'>
     <div class='title'>${this.title}</div>
     <div class='description'>${this.description}</div>
     <a href='${this.link}' target='_blank'><button class='button-awesome' role='button'>${this.buttonText}</button></a>
   </div>
  </div>`
}

$(document).ready( function() {
  // Get the sites data from seperate file
  $.get('./javascript/sitelist.json', function(data) {
    $('#portfolio-items').html('');
    for (var i = 0; i < data.length; i++) {
      data[i] = new Site(data[i]);
    }

    // append all the Sites to the portfolio-items div
    data.forEach(function(site) {
      $('#portfolio-items').append(site.html);
    });
    
    resizeWrapper(); // initial sizing
  });
  
  $(window).resize(resizeWrapper); // resize columns on change in window size
});

// Calculate number of columns and items and resize wrapper accordingly
function resizeWrapper() {
  var width = $(window).width();
  var numColumns = 1;
  const ELEMENT_SIZE = [420, 220]; // size of element [width, height] w/ padding
  if (width > ELEMENT_SIZE[0] * 2) {
    numColumns = Math.floor(width / ELEMENT_SIZE[0]); // calc width
  }
  if (width < 420) {
    $('#wrapper').width(400); // mobile view
  }
  else {
    $('#wrapper').width(numColumns * ELEMENT_SIZE[0]); // col layout view
  }
  
  // Calculate height
  var numItems = $('.item').length;
  $('#portfolio-items').height(Math.ceil(numItems / numColumns) * ELEMENT_SIZE[1] + 61); // set height
}
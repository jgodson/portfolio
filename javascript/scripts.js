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
     <a href='${this.link}' target='_blank'><button role='button'>${this.buttonText}</button></a>
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
  });
});

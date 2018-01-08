/*
  Code by Gabriel Nunes
*/

function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }

var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var currentQuote = '', currentAuthor = '';
function openURL(url){
  window.open(url, 'Share', 'width=1000, height=500, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}
function getQuote() {
  $.ajax({
    jsonp: 'jsonp',
    dataType: 'jsonp',
    url: 'https://api.forismatic.com/api/1.0/',
    contentType: 'application/jsonp',
    data: {
      lang: 'en',
      method: 'getQuote',
      format: 'jsonp'
    },

    success: function(data) {
        console.log(data)
      if (typeof data === 'string') {
        data = JSON.parse(data); 
      }
      currentQuote = data.quoteText;
      currentAuthor = data.quoteAuthor;
      
      $(".quote-text").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#text').text(data.quoteText);
        });

      $(".quote-author").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#author').html(data.quoteAuthor);
        });

      var color = Math.floor(Math.random() * colors.length);
      $("html body").animate({
        backgroundColor: colors[color],
        color: colors[color]
      }, 1000);
      $(".button").animate({
        backgroundColor: colors[color]
      }, 1000);
    }
  });
}
$(document).ready(function() {
  getQuote();
  $('#new-quote').on('click', getQuote);
  $('#fb-quote').on('click', function() {
    if(!inIframe()) {
      openURL('https://www.facebook.com/sharer/sharer.php?u=#url ' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    }
  });
  
});
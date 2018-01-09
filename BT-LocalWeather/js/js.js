var api = "https://fcc-weather-api.glitch.me/api/current?"
var lon, lat;
var tempUnit = "C";
var currentTempInCelsius;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
      var lon = "lon=" + position.coords.longitude;
      var lat = "lat=" + position.coords.latitude;
      console.log(lon, lat)
      getWeather(lon, lat);
    });
  } else {
    $('body').text("Geolocation is not supported by this browser.");
  }
}

function getWeather(lon, lat) {
  var urlString = api + lon + "&" + lat;
  console.log(urlString);
  $.ajax({
    url: urlString,
    success: function(result){
      $("#city").text(result.name + ", ");
      $("#country").text(result.sys.country);
      $("#main").text(result.weather[0].main);
      currentTempInCelsius = result.main.temp;
      $("#temp").text(currentTempInCelsius + String.fromCharCode(176) + " ");
      $('#temp-unit').text(tempUnit);
      $('#icon').attr('src',result.weather[0].icon);
    }
  })
}

$("#temp-unit").click(function(){
  var currentTempUnit = $("#temp-unit").text()
  var newTempUnit = currentTempUnit === "C" ? "F" : "C";
  $("#temp-unit").text(newTempUnit);
  console.log(newTempUnit)
  if (newTempUnit == "F"){
    var farhTemp = Math.round(parseInt($("#temp").text()) * 1.8 +32);
    $("#temp").text(farhTemp + " " + String.fromCharCode(176));
  }
  else{
    $("#temp").text(currentTempInCelsius + " " + String.fromCharCode(176));
  }
})


getLocation();
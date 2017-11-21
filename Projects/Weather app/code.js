$(document).ready(function(){

$('#clickicon i').on('mouseenter',function(){
     $(this).css({color:'#707070'});
});

$('#clickicon i').on('mouseleave',function(){
     $(this).css({color:'#D8D8D8'});
});




var sunny = /(sun|clear|calm|hot)+/i;
var breeze = /breez+/i;
var storm = /(storm|tornado|hurricane)+/i;
var cloudy = /(clouds|fog|dust|haze|smok|bluster)+/i;
var part = /part+/i;
var rainy = /(rain|drizzl|shower)+/i;
var snowy = /(snow|freez|hail|cold)+/i;
var sleet = /sleet+/i;


function weathericon(res){

if(sunny.test(res.weather[0].description)){
    
    $('#icon > i ').attr('class','pe-is-w-sun-2-f pe-5x pe-va');    
}
else if(breeze.test(res.weather[0].description)){

     $('#icon > i ').attr('class','pe-is-w-wind-2 pe-5x pe-va'); 

}
else if(storm.test(res.weather[0].description)){

     $('#icon > i ').attr('class','pe-is-w-thunderbolt-2 pe-5x pe-va'); 

}
else if(cloudy.test(res.weather[0].description)){

     $('#icon > i ').attr('class','pe-is-w-mostly-cloudy-2-f pe-5x pe-va'); 

}

else if(rainy.test(res.weather[0].description)){

     $('#icon > i ').attr('class','pe-is-w-heavy-rain-1-f pe-5x pe-va'); 

}
else if(snowy.test(res.weather[0].description)){

     $('#icon > i ').attr('class','pe-is-w-snowflake pe-5x pe-va'); 

}

}



var latitude;
var longitude;
var temperature;
var tempflag;

/*$("#temp").click(function(){

    var tempstrng=$('#temp h1').text();
    var unit=tempstrng.slice(-1);
    if(unit=='C'){
       temperature=temperature*(9/5)+32;
       $('#temp h1').text(temperature+'°F');
     }

     else if(unit=='F'){

        temperature=(temperature-32)*5/9;
        $('#temp h1').text(temperature+'°C');
     }

});*/

$('#cent').click(function(){

if(tempflag!=='cent'){
 temperature=Math.round((temperature-32)*5/9);
 $('#temp h1').text(temperature+'°C');
 tempflag='cent';
}
});

$('#faren').click(function(){
if(tempflag!=='faren'){
 temperature=Math.round(temperature*(9/5)+32);
 $('#temp h1').text(temperature+'°F');
 tempflag='faren';
}
});
 
 $(document).ajaxStart(function() {
  $("#click h3").text("Fetching data for weather");
});
 

$('#clickicon > i ').click(function(){

  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success);
}

function success(position) {
     latitude=position.coords.latitude;
     longitude=position.coords.longitude;
     coord([latitude,longitude]);
  }
//getlat();
function coord(array){
$.ajax('https://fcc-weather-api.glitch.me/api/current?lat='+array[0]+'&lon='+array[1],{
     method: 'GET',
     dataType: 'json',
     success: function(response){
        $('#locname > h2').text(response.name+","+response.sys.country);
        weathericon(response);
        $('#disc h1').text(response.weather[0].main);
        $('#temp h1').text(response.main.temp+'°C');
        tempflag='cent';
        temperature=response.main.temp;
        $('#click').fadeOut(500,function(){
              
                $('#results').fadeIn(1000);
        });
        //$('#results').fadeIn(500);
     }
});

}

});

});

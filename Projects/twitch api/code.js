$(document).ready(function () {
	/* body... */
//var result;
//var usrname;
//var logo;
//var idname;
var arr=["ESL_SC2", "OgamingSC2", "cretetion", "FreeCodeCamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
//all();
//var clk=1;
$("#all").click(function(){
	//$('#users').empty();
    $('.goq').removeClass('goq');
	$("#users .offline").hide();
    $("#users .online").hide();
    $("#users .all").show();	
	//if(clk==1){
   //all();
//}

});


$("#onl").click(function () {
	$('.goq').removeClass('goq');
    $("#users .offline").hide();
    $("#users .online").show();	
});


$("#ofl").click(function () {
	$('.goq').removeClass('goq');
    $("#users .online").hide();
    $("#users .offline").show();	
});



//function all(){
 //clk=0;
arr.forEach( function(element, index) {
	
//if(index==7){

	//clk=1;
//}

$.ajax({
    url:"https://wind-bow.glitch.me/twitch-api/users/"+element,
    method:'get',
    dataType: 'jsonp',
    success: function(response) {
    	//$(".row img").attr('src',response.logo);
    	//$('.row a').attr("href",'https://www.twitch.tv/'+response.name);
    	//$('.row a').text(response.display_name);
        var usrname=response.display_name;
        var logo=response.logo;
        var idname=response.name;
       stream(usrname,logo,idname);

     }
   });
});

//}

function stream(usr,log,idnm){
 var result;
$.ajax({
url:"https://wind-bow.glitch.me/twitch-api/streams/"+usr,
method:"get",
dataType:'jsonp',
success: function(response){
if(response.stream==null){
result="<div class=\"usr offline all\"><div class=\"row\"><img src="+log+" height=\"60\" width=\"70\" class=\"col-3\"><a href=\"https://www.twitch.tv/"+idnm+"\" class=\"usrname col-4\" target=\"_blank\">"+usr+"</a><p class=\"col-4 status\">Offline</p></div></div>";
}
else if(response.stream!==null){
 result="<div class=\"usr online all\"><div class=\"row\"><img src="+log+" height=\"60\" width=\"70\" class=\"col-3\"><a href=\"https://www.twitch.tv/"+idnm+"\" class=\"usrname col-4\" target=\"_blank\">"+usr+"</a><p class=\"col-4 status\">Online</p></div><p>Streaming="+response.stream.channel.status+"</p></div>";
}

$('#users').append(result);
}
});
}




$("#search").autocomplete({

   source:arr

});




$("#go").click(function(){
    
    $('.goq').removeClass('goq');
  $(".usr a").each(function(i,obj){
      
      if($(this).text()==$("#search").val()){

          $(this).closest('.usr').addClass('goq');
          $('.all').hide();
          $('.goq').show();
      }

  });
    

 /*var flag=1;
$.ajax({
    url:"https://wind-bow.gomix.me/twitch-api/users/"+$('#search').val(),
    method:'get',
    dataType: 'jsonp',
    success: function(response) {
    	//$(".row img").attr('src',response.logo);
    	//$('.row a').attr("href",'https://www.twitch.tv/'+response.name);
    	//$('.row a').text(response.display_name);
        var usrname=response.display_name;
        var logo=response.logo;
        var idname=response.name;
       stream(usrname,logo,idname,flag);

     }
   });*/

});

});
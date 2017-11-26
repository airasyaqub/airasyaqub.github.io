$(document).ready(function() {
	/* body... */

	

var globalres;
var keyflag=0;


$('#searchentr').click(sclick);
$('#searchentr1').click(sclick);


function sclick(){
  $('#results').html("");
for (var i = 0; i < globalres[3].length; i++) {
       
         var link="<div class=\"link col-lg-6 col-md-8 col-sm-12\"><a href="+globalres[3][i]+" target=\"_blank\">"+globalres[1][i]+"</a><p>"+globalres[2][i]+"</p></div>";
         $("#results").append(link);
  }
    
if(keyflag==0){
     
     keyflag=1;
     $('#initspg').remove();
     $("#sndspg").show();
}

}


$('#searchbox').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('#searchentr').click();//Trigger search button click event
        }
    });

$('#searchbox1').keypress(function(e){
        if(e.keyCode == 13){//Enter key pressed
            e.preventDefault();
            $('#searchentr1').click();//Trigger search button click event
        }
    });


$('#searchbox').autocomplete({
	 source: function(query, result) {

$.ajax({
    url:"https://en.wikipedia.org/w/api.php?list=search&search="+query.term+"&prop=info&inprop=url&action=opensearch&utf8=&format=json",
    method:'get',
    dataType: 'jsonp',
    success: function(response) {
       console.log(response);
       globalres=response;
       result(response[1]);  
     }
   });
}
});

$('#searchbox1').autocomplete({
   source: function(query, result) {

$.ajax({
    url:"https://en.wikipedia.org/w/api.php?list=search&search="+query.term+"&prop=info&inprop=url&action=opensearch&utf8=&format=json",
    method:'get',
    dataType: 'jsonp',
    success: function(response) {
       console.log(response);
       globalres=response;
       result(response[1]);  
     }
   });
}
});


});



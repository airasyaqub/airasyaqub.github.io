$(document).ready(function() {
	/* body... */

	
var dataList =$('#json-datalist');
var input = $('#ajax');
var globalres;
//var $ul=$('<ul></ul>');


$('#searchentr').click(function(){

  for (var i = 0; i < globalres[3].length; i++) {
       
         var link="<div class=\"link\"><a href="+globalres[3][i]+" target=\"_blank\">"+globalres[1][i]+"</a><p>"+globalres[2][i]+"</p></div>";
         $("#results").append(link);
  }
    
    $('#initspg').hide(1,function(){

     $("#sndspg").show();

    });


});

$('#searchbox').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('#searchentr').click();//Trigger search button click event
        }
    });



$('#searchbox').autocomplete({

	 source: function(query, result) {
    dataList.html("");
    //$ul.html("");

$.ajax({

    url:"https://en.wikipedia.org/w/api.php?list=search&search="+query.term+"&prop=info&inprop=url&action=opensearch&utf8=&format=json",
    //url:"http://en.wikipedia.org/w/api.php?format=json&action=opensearch&search="+query.term,
    /*data: {
        format: "json",
        action: "query",
        page: 'islam',
        prop:"info"
    },*/
    method:'get',
    dataType: 'jsonp',
    success: function(response) {
       console.log(response);
       globalres=response;
       var res=response[1];

       for(var i=0;i<7;i++){

          var opt=$('<option>');
          opt.attr('value',res[i]);
         dataList.append(opt);

       }
       
       
     }

   });
}

});

//--------------------------------------------------------

var dataList1 =$('#json-datalist1');
var input1 = $('#ajax');
//var globalres;

$('#searchentr1').click(function(){
          
         
        $("#results").html("");
  for (var i = 0; i < globalres[3].length; i++) {
       
         var link="<div class=\"link\"><a href="+globalres[3][i]+" target=\"_blank\">"+globalres[1][i]+"</a><p>"+globalres[2][i]+"</p></div>";
         $("#results").append(link);
  }
    

});

$('#searchbox1').keypress(function(e){
        if(e.keyCode == 13){//Enter key pressed
          
          e.preventDefault();
            $('#searchentr1').click();//Trigger search button click event
        }
    });


$('#searchbox1').autocomplete({

   source: function(query, result) {
    dataList.html("");
    //$ul.html("");

$.ajax({

    url:"https://en.wikipedia.org/w/api.php?list=search&search="+query.term+"&prop=info&inprop=url&action=opensearch&utf8=&format=json",
    //url:"http://en.wikipedia.org/w/api.php?format=json&action=opensearch&search="+query.term,
    /*data: {
        format: "json",
        action: "query",
        page: 'islam',
        prop:"info"
    },*/
    method:'get',
    dataType: 'jsonp',
    success: function(response) {
       console.log(response);
       globalres=response;
       var res=response[1];

       for(var i=0;i<7;i++){

          var opt=$('<option>');
          opt.attr('value',res[i]);
         dataList1.append(opt);

       }
       
       
     }

   });
}

});

/*function listgenerator(res){

 //$ul=$('<ul></ul>');
//$ul.html('');
var sugname=res[1];
for (var i = 0; i < 7; i++) {

   $ul.append('<li>'+sugname[i]+'</li>');

}

$('#searchbox').after($ul);
}*/


});



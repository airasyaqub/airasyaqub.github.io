$(document).ready(function(){

generatequote();

var quote;
var author;
function generatequote(){
 
$('p').fadeOut(1);
$('footer').fadeOut(1);
$.ajax('https://random-quote-generator.herokuapp.com/api/quotes/',{
     method: 'GET',
     dataType: 'json',
     success: function(response){
        getquote(response);
     }
});



function getquote(res){
var i=Math.floor(Math.random()*49);
 quote=res[i].quote;
 author=res[i].author;
$('blockquote').show();
$('p').text(quote).fadeIn(300);
$('footer').text(author).fadeIn(300);
}


}

$('.getquote').on('click',function(){
	$('blockquote').fadeOut(300,generatequote);
});

$('.tweet').on('click',function(){
    tweet();
});

function tweet(){

$('.tweet a').attr('href','https://twitter.com/intent/tweet?text='+encodeURIComponent(quote)+encodeURIComponent(author));

}

});

/*$(document).ready(function(){

generatequote();
function generatequote(){
//var i=Math.floor(Math.random()*49);
$('p').fadeOut(1);
$('footer').fadeOut(1);
$.ajax('https://random-quote-generator.herokuapp.com/api/quotes/',{

     method: 'GET',
     dataType: 'json',
     success: function(response){
     	     var i=Math.floor(Math.random()*49);
             var quote=response[i].quote;
             var author=response[i].author;
             //$('blockquote').append('<p class=\'mb-0\'>'+quote+'</p>');
             //$('blockquote').append('<footer class=\'blockquote-footer\'>'+author+'</footer>');
             $('blockquote').show();
             $('p').text(quote).fadeIn(700);
             $('footer').text(author).fadeIn(700);

     }


});


}

$('button').on('click',function(){
	$('blockquote').fadeOut(600,generatequote);
	//$('footer').fadeOut(2000,generatequote);
	//generatequote();
});

});*/
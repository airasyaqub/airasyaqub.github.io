$(document).ready(function() {


	//console.log($("#Ind").offset());
	//console.log($("a").hash);

	var scrollLink = $('.scroll');
  
  // Smooth scrolling
   	scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top-70
    }, 1000 );
  });

	if ($(window).scrollTop() > 40) {
	    $("nav").css("background-color", "black"); 
	  }

	$(".togglebox").click(function () {
		$('.navbox').slideToggle();
	});
    
    $(".togglebox").click(function () {
		$(".navbox").css("display", "flex");
	});

	$(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 40) {
	    $("nav").css("background-color", "black"); 
	  }

	  else{
	  	$("nav").css("background-color", "");
	  }

  });

	

	$(".options > h4").click(function(event){
		$(".options > h4").css({"background-color":"","color":"black"});
		$(this).css({"background-color":"#000033","color":"white"});
		//$(".details > p").hide();
		$("#frst1").text("");
		if(event.target.id==="frst"){
			$("#frst1").html("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nisi suscipit, tempore amet voluptatibus placeat a repellat minus deleniti quo asperiores pariatur sunt reiciendis, dolore perspiciatis quae quis, et. Placeat ipsam sapiente, ullam cupiditate magnam labore itaque dolorem dolorum nam quibusdam possimus doloribus architecto sed ab dicta quis repellat nemo in quaerat eligendi reprehenderit iusto sequi? Repellat doloremque assumenda voluptatem nulla sunt dolorum reiciendis possimus unde, ipsam recusandae dolorem adipisci, saepe sapiente alias ducimus. Voluptate laboriosam voluptates autem optio quod?<br><br>consectetur adipisicing elit. Odit nisi suscipit, tempore amet voluptatibus placeat a repellat minus deleniti quo asperiores pariatur sunt reiciendis, dolore perspiciatis quae quis, et. Placeat ipsam sapiente, ullam cupiditate magnam labore itaque dolorem dolorum nam quibusdam possimus doloribus architecto sed ab dicta quis repellat nemo in quaerat eligendi reprehenderit iusto sequi? Repellat doloremque assumenda");
			$("#frst1").fadeIn();
		}
		if(event.target.id==="scnd"){
			$("#frst1").html("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nisi suscipit, tempore amet voluptatibus placeat a repellat minus deleniti quo asperiores pariatur sunt reiciendis, dolore perspiciatis quae quis, et. Placeat ipsam sapiente, ullam cupiditate magnam labore itaque dolorem dolorum nam quibusdam possimus doloribus architecto sed ab dicquod?<br><br>consectetur adipisicing elit. Odit nisi suscipit, tempore amet voluptatibus placeat a repellat minus deleniti quo asperiores pariatur sunt reiciendis, dolore perspiciatis quae quis, et. Placeat ipsam sapiente, ullam cupiditate magnam labore itaque dolorem dolorum nam quibusdam possimus doloribus architecto sed ab dicta quis repellat nemo in quaerat eligendi reprehenderit iusto sequi? Repellat doloremque assumenda");
			$("#frst1").fadeIn();
		}
		if(event.target.id==="thrd"){
			$("#frst1").html("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nisi suscipit, tempore amet voluptatibus placeat a repellat minus deleniti quo asperiores pariatur sunt reiciendis, dolore perspiciatis quae quis, et. Placeat ipsam sapiente, ullam cupiditate magnam labore itaque dolorem dolorum nam quibusdam possimus doloribus architecto sed ab dicquod?<br><br>consectetur adipisicing elit. Odit nisi suscipit, tempore amet voluptatibus placeat a repellat minus deleniti quo asperiores pariatur sunt reiciendis, dolore perspiciatis quae quis, et. Placeat ipsam sapiente, ullam cupiditate magnam labore itaque dolorem dolorum nam quibusdam possimus doloribus architecto sed a");
			$("#frst1").fadeIn();
		}
		if(event.target.id==="frth"){
			$("#frst1").html("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nisi suscipit, tempore amet voluptatibus placeat a repellat minus deleniti quo asperiores pariatur sunt reiciendis, dolore perspiciatis quae quis, et. Placeat ipsam sapiente, ullam cupiditate magnam labore itaque dolorem dolorum nam quibusdam possimus doloribus architecto sed ab dicquod?<br><br>consectetur adipisicing elit. Odit nisi suscipit, tempore amet voluptatibus placeat a repellat minus deleniti quo asperiores pariatur sunt reiciendis, dolore perspiciatis quae quis, et. Placeat ipsam sapiente, ullam cupiditate magnam labore itaque dolorem dolorum nam quibusdam possimus doloribus architecto sed a si suscipit, tempore amet voluptatibus placeat a repellat minus deleniti quo asperiores pariatur sunt reiciendis, dolore perspiciatis quae quis, et. Placeat ipsam sapiente, ullam cupiditate magnam labore itaque dolorem dolorum nam quibusdam possimus doloribus architecto sed ab dicquod?");
			$("#frst1").fadeIn();
		}
		if(event.target.id==="fifth"){
			$("#frst1").html("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nisi suam labore itaque dolorem dolorum nam quibusdam possimus doloribus architecto sed ab dicta quis repellat nemo in quaerat eligendi reprehenderit iusto sequi? Repellat doloremque assumenda voluptatem nulla sunt dolorum reiciendis possimus unde, ipsam recusandae dolorem adipisci, saepe sapiente alias ducimus. Voluptate laboriosam voluptates autem optio quod?<br><br>consectetur adipisicing elit. Odit nisi suscipit, tempore amet voluptatibus placeat a repellat minus deleniti quo asperiores pariatur sunt reiciendis, dolore perspiciatis quae quis, et. Placeat ipsam sapiente, ullam cupiditate magnam labore itaque dolorem dolorum nam quibusdam possimus doloribus architecto sed ab dicta quis repellat nemo in quaerat eligendi reprehenderit iusto sequi? Repellat doloremque assumenda");
			$("#frst1").fadeIn();
		}
	});

});
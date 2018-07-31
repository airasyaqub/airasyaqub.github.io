$(document).ready(function() {
	// body...

	//navbar toggle function

	$('#navbar .toggle').on('click',function(){
		$('.rightnav').slideToggle();
	});

	//slider function

	var n=0;
	var slideArr=['one','two','three'];
	var clear;
	$('.left').addClass('animateLeft');
	$('.right').addClass('animateRight');
	slideShow(n);

	$('.indicators hr').click(function(){
		var i=$(this).index();
		clearTimeout(clear);
		slideShow(i);
	});

	function slideShow(n){
		n++;
		if (n>3||n<1){n=1;}
		if($('.'+slideArr[n-1]).hasClass('showed')){
			$('.'+slideArr[n-1]+' .left').removeClass('animateLeft');
			$('.'+slideArr[n-1]+' .right').removeClass('animateRight');
		}

		slideArr.forEach( function(e, i) {
		$('.'+e).hide();
		});
		$('.indicators hr').css({'border-color':'grey'});
		$('.'+slideArr[n-1]).show();
		$('.'+slideArr[n-1]).addClass('showed');
		$('.indicators hr:nth-child('+n+')').css({'border-color':'white'}); 
		clear=setTimeout(slideShow,6000,n);
	}

	/*viewport animation*/

	if(($(window).scrollTop()-$('.careem').offset().top)>-250){
		$('.careemimage').addClass('animatecareem');
	}

	if(($(window).scrollTop()-$('.vista').offset().top)>-350){
		$('.careemimage').addClass('animatecareem');
	}

	if(($(window).scrollTop()-$('.rta').offset().top)>-325){
		$('.rtaimage').addClass('animaterta');
	}

	//alert($(window).scrollTop()-$('.rta').offset().top);

	$(window).on('scroll',function(){
	if(($(window).scrollTop()-$('.careem').offset().top)>-250){
		$('.careemimage').addClass('animatecareem');
	}

	if(($(window).scrollTop()-$('.vista').offset().top)>-350){
		$('.vistaimage').addClass('animatevista');
	}

	if(($(window).scrollTop()-$('.rta').offset().top)>-325){
		$('.rtaimage').addClass('animaterta');
	}


	});

	/*var scrollLink = $('.scroll');
  
  // Smooth scrolling
   	scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top-70
    }, 1000 );
  });*/

  $('.green').mouseenter(function(){
  		$('.g-overlay').css({'opacity':'1'});
  });

   $('.green').mouseleave(function(){
  		$('.g-overlay').css({'opacity':'0.9'});
  });

    $('.topmiddle').mouseenter(function(){
  		$('.topmiddle .b-overlay').css({'opacity':'0.7'});
  		$('.topmiddle h6').css({'opacity':'1'});
  		$('.bg-topmiddle').css({'transform':'scale(1.1,1.1)'});
  });

   $('.topmiddle').mouseleave(function(){
  		$('.topmiddle .b-overlay').css({'opacity':'0'});
  		$('.topmiddle h6').css({'opacity':'0'});
  		$('.bg-topmiddle').css({'transform':'scale(1,1)'});
  });

    $('.topright').mouseenter(function(){
  		$('.topright .b-overlay').css({'opacity':'0.7'});
  		$('.topright h6').css({'opacity':'1'});
  		$('.bg-topright').css({'transform':'scale(1.1,1.1)'});
  });

   $('.topright').mouseleave(function(){
  		$('.topright .b-overlay').css({'opacity':'0'});
  		$('.topright h6').css({'opacity':'0'});
  		$('.bg-topright').css({'transform':'scale(1,1)'});
  });

  $('.bottommiddle').mouseenter(function(){
  		$('.bottommiddle .b-overlay').css({'opacity':'0.7'});
  		$('.bottommiddle h6').css({'opacity':'1'});
  		$('.bg-bottommiddle').css({'transform':'scale(1.1,1.1)'});
  });

   $('.bottommiddle').mouseleave(function(){
  		$('.bottommiddle .b-overlay').css({'opacity':'0'});
  		$('.bottommiddle h6').css({'opacity':'0'});
  		$('.bg-bottommiddle').css({'transform':'scale(1,1)'});
  });

    $('.bottomright').mouseenter(function(){
  		$('.bottomright .b-overlay').css({'opacity':'0.7'});
  		$('.bottomright h6').css({'opacity':'1'});
  		$('.bg-bottomright').css({'transform':'scale(1.1,1.1)'});
  });

   $('.bottomright').mouseleave(function(){
  		$('.bottomright .b-overlay').css({'opacity':'0'});
  		$('.bottomright h6').css({'opacity':'0'});
  		$('.bg-bottomright').css({'transform':'scale(1,1)'});
  });




});


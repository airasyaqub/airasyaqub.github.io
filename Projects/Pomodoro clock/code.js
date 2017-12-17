$(document).ready(function () {

	var sessiontime=25; //number to show on screen for work
	var breaktime=5;    //number to show on screen for break
	var ms=sessiontime; //minutes for work
	var mb=breaktime;   //minutes for break
	var sessionchange=1;  //if anyone change work time between countdown
	var breakchange=1;   //if anyone change break time between countdown
	var session='work';  //what session is being run right now
	var flag;  //flag to know if to increment/decement break-time or work-time
	var loopflag; //to set work/break time again to given input after every countdown is ended
	var pauseflag=0;  //to get if user pause the countdown or not
	var workfunc;  //function for work
	var breakfunc;  //function for break
	var secwork;  //seconds for work
	var secbreak;  //seconds for break
	var totaltime=60*sessiontime;  //total seconds for work (to use in animation)
	var totalbreaktime=60*breaktime; //total seconds for break (to use in animation)
	var animatepercent=0;  //percentage of animation filling
	var i=1;  //to use in animation percentage for work
	var j=1;  //to use in animation percentage for break
	var listen = new Audio("tune.mp3");
	var listenbreak = new Audio("tune1.mp3");

         $('#dialog').dialog({
           width:400,
           height: 300,
           modal:true,
           draggable: false,
           resizable:true,
           autoOpen: false
       });

	$('#inst').click(function(){
      $('#dialog').dialog('open');       
	});

	$('.brkneg').click(function(){
         flag=0;    
         decrement();
         breakchange=1;
         $('.num').text(breaktime); 
         if (session=='break') {
         $('#time').text(breaktime);
         //totalbreaktime=60*breaktime;
     } 
     totalbreaktime=60*breaktime;
     mb=breaktime;
	});

    $('.brkpos').click(function(){
         flag=0;
         increment();
         breakchange=1;
         $('.num').text(breaktime);
         if (session=='break') {
         $('#time').text(breaktime);
         //totalbreaktime=60*breaktime;
     } 
     totalbreaktime=60*breaktime;
     mb=breaktime;
	});

$('.sneg').click(function(){
         flag=1;
         decrement();
         sessionchange=1;
         $('.num1').text(sessiontime);
         if (session=='work') {
         $('#time').text(sessiontime);
     }
     totaltime=60*sessiontime;
     ms=sessiontime;
	});

$('.spos').click(function(){
         flag=1;
         increment();
         sessionchange=1;
         $('.num1').text(sessiontime);
         if (session=='work') {
         $('#time').text(sessiontime);
     }
     totaltime=60*sessiontime;
     ms=sessiontime;
	});

function decrement(){
if(breaktime>1&&flag==0){
   breaktime-=1;
}
else if(breaktime<=1&&flag==0){
	breaktime=1;
}
else if(sessiontime>1&&flag==1) {
	sessiontime-=1;
}
else if(sessiontime<=1&&flag==1){
  sessiontime=1;
}
}
function increment(){
	if(flag==0){
	breaktime+=1;
}
else if(flag==1){
	sessiontime+=1;
}
}

//---------------------------------------------------------------------------------------------------

$('#circle').click(function(){
   
   if(sessionchange==1){
   //m=sessn;
   secwork=0;
   i=1;
   sessionchange=0;
   ms=sessiontime;
   //startflag=1;
}
if(breakchange==1){
	secbreak=0;
	j=1;
	breakchange=0;
    mb=breaktime;
}    

     if(pauseflag==0){
     pauseflag=1;
     $(".bol").attr('disabled','disabled');
     if(session=='work'){
   	 workfunc=setInterval(worktimer,1000);
   	}
   	else if(session=='break'){
  	breakfunc=setInterval(breaktimer,1000);
   	}
   }

   else if(pauseflag==1){
    pauseflag=0;
    $(".bol").removeAttr('disabled');
      if(session=='work'){
   	 clearInterval(workfunc);
   	}
   	else if(session=='break'){

   		clearInterval(breakfunc);
   	}

   }
});

//--------------------------------------------------------------------------------------------------------------

function worktimer(){

	if(loopflag==1){
		sessiontime=$('.num1').text();
		sessiontime=Number(sessiontime);
		ms=sessiontime;
		loopflag=0;
	}
 
 if(animatepercent<=100){ 
//totaltime=60*sessiontime;
animatepercent=(i/totaltime)*100;
i+=1;
$('#circle').css('background','linear-gradient(0deg, rgb(153, 204, 0) 0%,rgb(153, 204, 0) '+animatepercent+'%,#202020 '+animatepercent+'%)');
}

session='work';

if(ms!==0&&secwork==0){
  secwork=59;
  ms-=1;
 $('#time').text(ms+':'+secwork);
}
   
else if(secwork!==0){ 
   secwork-=1;
   if(secwork>=10){
     $('#time').text(ms+':'+secwork);
   }
   else{
   	  $('#time').text(ms+':0'+secwork);
   }
 }

else if(ms==0&&secwork==0){
 $('#name').text('Break');
 $('#circle').css('background','none');
 clearInterval(workfunc);
 loopflag=1;
 j=1;
 animatepercent=0;
 listen.play();
 breakfunc=setInterval(breaktimer,1000);
}
}

//----------------------------------------------------------------------------------------------------------------
function breaktimer(){

  if(loopflag==1){
		breaktime=$('.num').text();
		breaktime=Number(breaktime);
		mb=breaktime;
		loopflag=0;
	}

	session='break';
   
   if(animatepercent<=100){ 
//totaltime=60*breaktime;
animatepercent=(j/totalbreaktime)*100;
j+=1;
$('#circle').css('background','linear-gradient(0deg, rgb(255, 138, 128) 0%,rgb(255, 138, 128) '+animatepercent+'%, #202020 '+animatepercent+'%)');
}

  if(mb!==0&&secbreak==0){
  secbreak=59;
  mb-=1;
 $('#time').text(mb+':'+secbreak);
}
   
else if(secbreak!==0){ 
   secbreak-=1;
   if(secbreak>=10){
     $('#time').text(mb+':'+secbreak);
   }
   else{
   	  $('#time').text(mb+':0'+secbreak);
   }
 }

else if(mb==0&&secbreak==0){
 $('#name').text('Session');
 $('#circle').css('background','none');
 clearInterval(breakfunc);
 loopflag=1;
 i=1;
 animatepercent=0;
 listenbreak.play();
 workfunc=setInterval(worktimer,1000);
}

}

});
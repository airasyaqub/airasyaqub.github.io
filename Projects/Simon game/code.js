$(document).ready(function() {
	// body...
	var rsound=new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
	var gsound=new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
	var bsound=new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
	var ysound=new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
	var beep=new Audio('1.mp3');
	var wins= new Audio('2.mp3');
	var onoff='off';
	var gamestart;
	var error=false;
	var boxnumber; //score
	var arrfunc=[];
	//var number;
	//var patfunc;
	//var patfunc1;
	var patfunc2;
	//var patfunc3;
	//var patfunc4;


	$('#onfbox').click(function(){
		if(onoff==='off'){
			onoff='on';
			$('#onfbtn').css('float','right');
			$('#box p').text('- -');
		    gamestart=setTimeout(start,10);
		}

		else if(onoff=='on'){

			onoff='off';
			$('#onfbtn').css('float','left');
			$('#box p').text('');
			$('#start').off('click');
			$('#strict').off('click');
			$('.slice').off('click');
			for(var k=0;k<arrfunc.length;k++){
				clearTimeout(arrfunc[k]);
			}
			/*clearTimeout(patfunc);
			clearTimeout(patfunc1);
			clearTimeout(patfunc2);
			clearTimeout(patfunc4);
			clearTimeout(patfunc3);
			clearTimeout(gamestart);*/
		}
	});



	function start(){
		var strict=false;
		var colors=['blue','red','green','yellow'];
		var pattern;
		$('#start').click(function(){
			pattern=[];
			boxnumber=0;
			setTimeout(givepattern,0);
		});

		$('#strict').click(function(){
			if(strict==false){
				strict=true;
				$('#strind').css('background-color','red');
			}
			else if(strict==true){
				strict=false;
				$('#strind').css('background-color','grey');
			}

		});



		function givepattern(){
			//if(onoff=='off'){
			//return;
		//} 

			if(chkwin()){
				$('.slice').css('cursor','default');
				$('.slice').off('click');
			    return; }

			/*if(boxnumber==4){
				pattern=[];
				error=false;
				boxnumber=0;
				$('#box p').text('Won');
				setTimeout(givepattern,1000);
			}*/

			if(strict==true&&error==true){
				boxnumber+=1;
			//console.log(boxnumber);
		    var number2=Math.floor(Math.random()*4);
			pattern.push(colors[number2]);


			}

			$('.slice').css('cursor','default');
			$('.slice').off('click');
			//console.log($('.slice').off('click'));
			
			if(error===false){
			//console.log(boxnumber);
			boxnumber+=1;
			//console.log(boxnumber);
		    var number=Math.floor(Math.random()*4);
			pattern.push(colors[number]);
			
		}
			$('#box p').text(boxnumber);
			console.log(pattern);

			for(var i=0;i<pattern.length;i++){
					//const j =i;
					//$('.slice').off('click');
					var number1=0;
				patfunc2=setTimeout((function(j) { number1++;genersounds(pattern[j]);
				if(number1==pattern.length){
				humanturn();
			}
		}).bind(null,i),i*800);

				//console.log('before '+arrfunc);
				arrfunc.push(patfunc2);
				//console.log('after '+arrfunc);
			}
			//$('.slice').off('click');
			//humanturn();


           		
 		 }

 		 	 function genersounds(clr){

			$('#'+clr).css('background-color','grey');
        	if(clr=='blue'){
          	bsound.play();
       	 	}
        	else if(clr=='green'){
          	gsound.play();
       		 }
        	else if(clr=='red'){
          	rsound.play();
       		 }
        	else if(clr=='yellow'){
          	ysound.play();
       		 }
        	setTimeout(function(){$('#'+clr).css('background-color',clr);},500);
     		 } 


     		 function humanturn(){
     		 		error=false;
     		 		var humanpattern=[];
     		 		var elementschecked=0;
     		 		//var i=0;
     		 		$('.slice').css('cursor','pointer');
     		 		//console.log($('.slice').click(function(e){}));
     		 		$('.slice').click(function(e){
     		 			genersounds(e.target.id);
     		 			elementschecked+=1;
     		 			humanpattern.push(e.target.id);
     		 			checkmatched(humanpattern,elementschecked);

     		 		});
     		 }


     		 function checkmatched(hmnptrn,elementschecked){
     		 	
     		 	for(var i=0;i<hmnptrn.length;i++){

     		 		 if(pattern[i]!==hmnptrn[i]){
     		 		error=true;
     		 		beep.play();
     		 		chekstrct();
     		 		setTimeout(givepattern,1000);
     		 		//givepattern();
     		 		break;
     		 	   }
     			}

     			if(elementschecked===pattern.length&&error===false){
     		 	  setTimeout(givepattern,1000);
     		 		//patfunc3=setTimeout((function(j) { givepattern();}).bind(null,i),i*1000);
     		 		//givepattern();
     		 	   }
     		 			
     		 				}

     		 function chekstrct(){

     		 	if(strict==true){
     		 		$('#box p').text('!!');
     		 		boxnumber=0;
     		 		pattern=[];
     		 	}

     		 }

     		 function chkwin(){
     		 	if(boxnumber===4){
     		 		$('#box p').text('won');
     		 		wins.play();
     		 		//pattern=[];
					error=false;
					//boxnumber=0;
					return true;
     		 	}
     		 }
		


		}	

});


//clearInterval(soundplay);
          //bsound.play();
          //$('#blue').css('background-color','blue');
          //$('#blue').animate({backgroundColor:"grey"},300,function(){//,{
              //step:function(now,fx){
              //    $('#blue').css('background-color',now);
              //},duration:1000},'linear',function(){
              //  $('#blue').css('background-color','blue');
            //  $('#blue').css('background-color','blue');
            //  });
            //$('#blue').css('background-color','blue');
              //});

            



       /*pattern.forEach( function(elem, index) {

              setTimeout(yo.bind(window,elem),index*1000);*/
              //clr=elem;
        //setTimeout(function(clr){
          /*switch (elem) {
          case 'blue':
            // statements_1
            setTimeout(function(){$('#blue').css('background-color','grey');
              bsound.play();
              setTimeout(function(){$('#blue').css('background-color','blue');},500);},1000);
            break;
          case 'green':
            // statements_1
            setTimeout(function(){$('#green').css('background-color','grey');
              gsound.play();
              setTimeout(function(){$('#green').css('background-color','green');},500);},1000);
            
            break;
          case 'red':
            // statements_1
            setTimeout(function(){$('#red').css('background-color','grey');
              rsound.play();
              setTimeout(function(){$('#red').css('background-color','red');},500);},1000);
            
            break;
          case 'yellow':
            // statements_1
            setTimeout(function(){  $('#yellow').css('background-color','grey');
              ysound.play();
              setTimeout(function(){$('#yellow').css('background-color','yellow');},500);},1000);
          
            break;
          
        }*/

        //},1000);
      /*  function yo(elem){
          console.log(elem);
        switch (elem) {
          case 'blue':
            // statements_1
            $('#blue').css('background-color','grey');
              bsound.play();
              setTimeout(function(){$('#blue').css('background-color','blue');},500);
            break;
          case 'green':
            // statements_1
            $('#green').css('background-color','grey');
              gsound.play();
              setTimeout(function(){$('#green').css('background-color','green');},500);
            break;
          case 'red':
            // statements_1
            $('#red').css('background-color','grey');
              bsound.play();
              setTimeout(function(){$('#red').css('background-color','red');},500);
            break;
          case 'yellow':
            // statements_1
            $('#yellow').css('background-color','grey');
              ysound.play();
              setTimeout(function(){$('#yellow').css('background-color','yellow');},500);
            break;
          
        }

      }
      });*/
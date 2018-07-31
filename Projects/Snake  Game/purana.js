$(document).ready(function(){
	var canvas=$('canvas');
	//canvas[0].width=0.7*(window.innerWidth);
	//canvas[0].height=0.7*(window.innerHeight);
	var c=$("canvas")[0].getContext('2d');
	var currentMove='r';
	var prevMove='r';
	var firstIter=true;

	 $(window).keydown(function(e){
	 	console.log(e);
        switch (e.which) {
        	case 37:
        		// statements_1
        		if(currentMove!=='r'&&currentMove!=='l'){
        			firstIter=false;
        			prevMove=currentMove;
        			currentMove='l';
        		}
        		break;
        	case 38:
        		// statements_1
        		if(currentMove!=='u'&&currentMove!=='d'){
        			firstIter=false;
        			prevMove=currentMove;
        			currentMove='u';
        		}
        		break;
        	case 39:
        		if(currentMove!=='r'&&currentMove!=='l'){
        			firstIter=false;
        			prevMove=currentMove;
        			currentMove='r';
        		}
        		break;
        	case 40:
        		// statements_1
        		if(currentMove!=='u'&&currentMove!=='d'){
        			firstIter=false;
        			prevMove=currentMove;
        			currentMove='d';
        		}
        		break;
        }
        e.preventDefault(); 
    });
	function snake(x,y,dx,dy,i){
		this.x=x;
		this.y=y;
		this.dx=dx;
		this.dy=dy;
		this.i=i;
		this.outOfSight=false;

		this.draw=function() {
			//console.log('drawww');
			//console.log(this.x,this.y,this.i+' in draw');
			c.beginPath();
			c.fillRect(this.x,this.y,12,12);
			c.fillStyle = "black";
			c.fill();
			c.stroke();
		};

		this.update=function(){

			/*if(currentMove==='l'){
				if(snakeArr[0].y===snakeArr[snakeArr.length-1].y){this.dx=-2;this.dy=0;}
				else if(this==snakeArr[snakeArr.length-1]){this.dx=-13;this.dy=0;}
				else if(this!==snakeArr[snakeArr.length-1]){
					if(this.y!==snakeArr[snakeArr.length-1].y){if(prevMove=='d'){this.dy=13;}else if(prevMove=='u'){this.dy=-13;}this.dx=0;}
					else if(this.y==snakeArr[snakeArr.length-1].y){this.dx=-13;this.dy=0;}
				}
			}
			if(currentMove==='u'){
				if(snakeArr[0].x===snakeArr[snakeArr.length-1].x){this.dx=0;this.dy=-2;}
				else if(this==snakeArr[snakeArr.length-1]){this.dx=0;this.dy=-13;}
				else if(this!==snakeArr[snakeArr.length-1]){
					if(this.x!==snakeArr[snakeArr.length-1].x){if(prevMove=='r'){this.dx=13;}else if(prevMove=='l'){this.dx=-13;}this.dy=0;}
					else if(this.x==snakeArr[snakeArr.length-1].x){this.dx=0;this.dy=-13;}
				}
			}
			if(currentMove==='d'){
				if(snakeArr[0].x===snakeArr[snakeArr.length-1].x){this.dx=0;this.dy=2;}
				else if(this==snakeArr[snakeArr.length-1]){this.dx=0;this.dy=13;}
				else if(this!==snakeArr[snakeArr.length-1]){
					if(this.x!==snakeArr[snakeArr.length-1].x){if(prevMove=='r'){this.dx=13;}else if(prevMove=='l'){this.dx=-13;}this.dy=0;}
					else if(this.x==snakeArr[snakeArr.length-1].x){this.dx=0;this.dy=13;}
				}
			}
			if(currentMove==='r'&&firstIter==false){
				if(snakeArr[0].y===snakeArr[snakeArr.length-1].y){this.dx=2;this.dy=0;}
				else if(this==snakeArr[snakeArr.length-1]){this.dx=13;this.dy=0;}
				else if(this!==snakeArr[snakeArr.length-1]){
					if(this.y!==snakeArr[snakeArr.length-1].y){if(prevMove=='d'){this.dy=13;}else if(prevMove=='u'){this.dy=-13;}this.dx=0;}
					else if(this.y==snakeArr[snakeArr.length-1].y){this.dx=13;this.dy=0;}
				}
			}*/

			if(currentMove==='l'){
				//if(snakeArr[0].y===snakeArr[snakeArr.length-1].y){this.dx=-1;this.dy=0;}
				 if(this==snakeArr[snakeArr.length-1]){this.dx=-1;this.dy=0;}
				else if(this!==snakeArr[snakeArr.length-1]){
					if(this.y!==snakeArr[snakeArr.length-1].y){if(prevMove=='d'){this.dy=1;}else if(prevMove=='u'){this.dy=-1;}this.dx=0;}
					else if(this.y==snakeArr[snakeArr.length-1].y){this.dx=-1;this.dy=0;}
				}
			}
			if(currentMove==='u'){
				//if(snakeArr[0].y===snakeArr[snakeArr.length-1].y){this.dx=-1;this.dy=0;}
				 if(this==snakeArr[snakeArr.length-1]){this.dx=0;this.dy=-1;}
				else if(this!==snakeArr[snakeArr.length-1]){
					if(this.x!==snakeArr[snakeArr.length-1].x){if(prevMove=='l'){this.dx=-1;}else if(prevMove=='r'){this.dx=1;}this.dy=0;}
					else if(this.x==snakeArr[snakeArr.length-1].x){this.dx=0;this.dy=-1;}
				}
			}
			if(currentMove==='r'){
				//if(snakeArr[0].y===snakeArr[snakeArr.length-1].y){this.dx=-1;this.dy=0;}
				 if(this==snakeArr[snakeArr.length-1]){this.dx=1;this.dy=0;}
				else if(this!==snakeArr[snakeArr.length-1]){
					if(this.y!==snakeArr[snakeArr.length-1].y){if(prevMove=='d'){this.dy=1;}else if(prevMove=='u'){this.dy=-1;}this.dx=0;}
					else if(this.y==snakeArr[snakeArr.length-1].y){this.dx=1;this.dy=0;}
				}
			}
			if(currentMove==='d'){
				//if(snakeArr[0].y===snakeArr[snakeArr.length-1].y){this.dx=0;this.dy=1;}
				 if(this==snakeArr[snakeArr.length-1]){this.dx=0;this.dy=1;}
				else if(this!==snakeArr[snakeArr.length-1]){
					if(this.x!==snakeArr[snakeArr.length-1].x){if(prevMove=='l'){this.dx=-1;}else if(prevMove=='r'){this.dx=1;}this.dy=0;}
					else if(this.x==snakeArr[snakeArr.length-1].x){this.dx=0;this.dy=1;}
				}
			}

			
			/*if(this.x>$("canvas")[0].width&&currentMove==='r'){
				this.x=-10-(this.i*12)-i;
				this.outOfSight=true;
			}

			if(this.x<0&&currentMove==='l'){
				this.x=1210-(this.i*12)-i;
				this.outOfSight=true;
			}

			if(this.y>$("canvas")[0].height){
				this.y=-10-(this.i*12)-i;
				this.outOfSight=true;
			}

			if(snakeArr[0].x>$("canvas")[0].width||this==snakeArr[0]){
				this.outOfSight=false;
			}
			if(snakeArr[0].x<0||this==snakeArr[0]){
				this.outOfSight=false;
			}
			if(snakeArr[0].y>$("canvas")[0].height||this==snakeArr[0]){
				this.outOfSight=false;
			}*/

			//if(this.outOfSight===false){
				this.x+=this.dx;
				this.y+=this.dy;
				//console.log(this.x,this.y);
			//}
			

			this.draw();
		};
	}

	var snakeArr=[];

	function init(){
		snakeArr=[];
		for(let i=0;i<8;i++){
			var x=100;
			var y=100;
			var dx=1;
			var dy=0;
			x=100-(i*12)-i;
			snakeArr.unshift(new snake(x,y,dx,dy,i));
		}
		//console.log(snakeArr);
	}

	init();
	
		

		/*c.clearRect(0,0,$("canvas")[0].width,$("canvas")[0].height);
		snakeArr[2].dx=13;
		snakeArr[2].dy=0;
		snakeArr[2].update();
		snakeArr[1].dx=13;
		snakeArr[1].dy=0;
		snakeArr[1].update();
		snakeArr[0].dx=0;
		snakeArr[0].dy=13;
		snakeArr[0].update();
		c.clearRect(0,0,$("canvas")[0].width,$("canvas")[0].height);
		snakeArr[2].dx=5;
		snakeArr[2].dy=0;
		snakeArr[2].update();
		snakeArr[1].dx=5;
		snakeArr[1].dy=0;
		snakeArr[1].update();
		snakeArr[0].dx=5;
		snakeArr[0].dy=0;
		snakeArr[0].update();*/


		/*c.clearRect(0,0,$("canvas")[0].width,$("canvas")[0].height);
		snakeArr[2].update();
		snakeArr[1].update();
		snakeArr[0].update();
		c.clearRect(0,0,$("canvas")[0].width,$("canvas")[0].height);
		snakeArr[2].dx=13;
		snakeArr[2].dy=0;
		snakeArr[2].update();
		snakeArr[1].dx=0;
		snakeArr[1].dy=13;
		snakeArr[1].update();
		snakeArr[0].dx=0;
		snakeArr[0].dy=13;
		snakeArr[0].update();
		c.clearRect(0,0,$("canvas")[0].width,$("canvas")[0].height);
		snakeArr[2].dx=13;
		snakeArr[2].dy=0;
		snakeArr[2].update();
		snakeArr[1].dx=13;
		snakeArr[1].dy=0;
		snakeArr[1].update();
		snakeArr[0].dx=0;
		snakeArr[0].dy=13;
		snakeArr[0].update();
		c.clearRect(0,0,$("canvas")[0].width,$("canvas")[0].height);
		snakeArr[2].dx=5;
		snakeArr[2].dy=0;
		snakeArr[2].update();
		snakeArr[1].dx=5;
		snakeArr[1].dy=0;
		snakeArr[1].update();
		snakeArr[0].dx=5;
		snakeArr[0].dy=0;
		snakeArr[0].update();*/

		
		
		

	
	var idFrame;
	
	function animate(){
		idFrame=requestAnimationFrame(animate);
		c.clearRect(0,0,$("canvas")[0].width,$("canvas")[0].height);
		for(var j=snakeArr.length-1;j>=0;j--){
			snakeArr[j].update();
		}
	}

	idFrame=requestAnimationFrame(animate);

});


//------------------------------------------------------------------------------------------------
$(document).ready(function(){
	var canvas=$('canvas');
	var c=$("canvas")[0].getContext('2d');

	var snakeArr;
	var cellW=12;
	var idFrame;
	var currentMove;
	//for frame cotrol
	var fps = 15;
	var now;
	var then = Date.now();
	var interval = 1000/fps;
	var delta;
	

	function snake(x,y){
		this.x=x;
		this.y=y;
	}


	function start(){
		snakeArr=[];
		var x=100;
		var y=100;
		var dx;
		var dy;
		currentMove='r';
		for(var i=0;i<15;i++){
			x=100+(i*cellW);
			snakeArr.push(new snake(x,y));
			paint(snakeArr[i].x,snakeArr[i].y);
		}
		gameloop();
	}

	start();

   
 
	function gameloop() {
		requestAnimationFrame(gameloop);
		now = Date.now();
		delta = now - then;
		if (delta > interval) {
			then = now - (delta % interval);
			c.clearRect(0,0,$("canvas")[0].width,$("canvas")[0].height);
			main();
		}
	}

	function paint(x,y){
			c.beginPath();
			c.fillStyle = "black";
			c.fillRect(x,y,cellW,cellW);
			c.strokeStyle = "white";
			c.strokeRect(x,y,cellW,cellW);
		}

	function move(){
			var head={x:snakeArr[snakeArr.length-1].x+dx,y:snakeArr[snakeArr.length-1].y+dy};
			snakeArr.push(head);
			snakeArr.shift();
			snakeArr.forEach(function(e,i){paint(snakeArr[i].x,snakeArr[i].y);});
		}

		function outOfSight(){
			if(snakeArr[0].x>$("canvas")[0].width&&currentMove=='r'){
				return 'ex';
			}
			else if(snakeArr[0].x<0&&currentMove=='l'){
				return 'nex';
			}
			else if(snakeArr[0].y>$("canvas")[0].height&&currentMove=='b'){
				return 'ey';
			}
			else if(snakeArr[0].y<0&&currentMove=='t'){
				return 'ney';
			}
			else{
				return false;
			}
		}


	var outofSightprev;

	function main(){

		

		//console.log('in main');
		if(currentMove=='l'){dx=-12;dy=0;}
		else if(currentMove=='t'){dx=0;dy=-12;}
		else if(currentMove=='r'){dx=12;dy=0;}
		else if(currentMove=='b'){dx=0;dy=12;}

		move();

		if((snakeArr[0].x<$("canvas")[0].width&&snakeArr[0].x>0)||(snakeArr[0].y<$("canvas")[0].height&&snakeArr[0].y>0)){
			console.log('in if before switch');
			outofSightprev=false;
		}

		console.log(outofSightprev+' before switch outofsightprev');

		var res=outOfSight();
		console.log(res+' before switch outofsight funtion result');

		if(res!=false&&outofSightprev===false){
			switch(res){
			case 'ex':
				console.log('in ex');
				for(var i=0;i<snakeArr.length;i++){
					x=-10-(i*cellW);
					snakeArr[i].x=x;
				}
				//snakeArr[snakeArr.length-1].x=-20;
				console.log('in ex snakeArr');
				console.log(snakeArr);
				outofSightprev=true;
				break;
			case 'nex':
				//snakeArr[snakeArr.length-1].x=1220;
				console.log('in nex');
				for(var i=0;i<snakeArr.length;i++){
					x=1300-(i*cellW);
					snakeArr[i].x=x;
				}
				//snakeArr[snakeArr.length-1].x=-20;
				console.log('in nex snakeArr');
				console.log(snakeArr);
				outofSightprev=true;
				break;
			case 'ey':
				//snakeArr[snakeArr.length-1].y=-20;
				console.log('in ey');
				for(var i=0;i<snakeArr.length;i++){
					y=-10-(i*cellW);
					snakeArr[i].y=y;
				}
				//snakeArr[snakeArr.length-1].x=-20;
				console.log('in ey snakeArr');
				console.log(snakeArr);
				outofSightprev=true;
				break;
			case 'ney':
				for(var i=0;i<snakeArr.length;i++){
					y=800-(i*cellW);
					snakeArr[i].y=y;
				}
				outofSightprev=true;
				break;
			}
		}



		/*snakeArr.forEach(function(e,i){
			//move();
			paint(snakeArr[i].x,snakeArr[i].y);
		});*/
		
	}



	$(window).keydown(function(e){
        switch (e.which) {
        	case 37:
        		// statements_1
        		if(currentMove!=='r'&&currentMove!=='l'){currentMove='l';}
        		break;
        	case 38:
        		// statements_1
        		if(currentMove!=='t'&&currentMove!=='b'){currentMove='t';}
        		break;
        	case 39:
        		// statements_1
        		if(currentMove!=='r'&&currentMove!=='l'){currentMove='r';}
        		break;
        	case 40:
        		// statements_1
        		if(currentMove!=='t'&&currentMove!=='b'){currentMove='b';}
        		break;
        }
        e.preventDefault(); 
    });

	
	/*move();
	c.clearRect(0,0,$("canvas")[0].width,$("canvas")[0].height);
	for(var i=0;i<5;i++){
		paint(snakeArr[i].x,snakeArr[i].y);
	}*/
	
});

//----------------------------------------------------------------------------------------------------------------------------------
$(document).ready(function(){
	var canvas=$('canvas');
	var c=$("canvas")[0].getContext('2d');
	var w=$("canvas")[0].width;
	var h=$("canvas")[0].height;
	var snakeArr;
	var cellW=12;
	var foodW=12;
	var idFrame;
	var currentMove;
	var outofSightprev;
	//for frame cotrol
	var fps = 15;
	var now;
	var then = Date.now();
	var interval = 1000/fps;
	var delta;
	

	function snake(x,y){
		this.x=x;
		this.y=y;
	}

	function food(x,y){
		this.x=x;
		this.y=y;
	}

	var ourFood;
	var foodx;
	var foody;
	var dx;
	var dy;
	function start(){
		snakeArr=[];
		var x=10;
		var y=10;
		foodx=Math.round(Math.random()*(w-cellW)/cellW);
		foody=Math.round(Math.random()*(h-cellW)/cellW);
		dx=0;
		dy=0;
		ourFood=new food(foodx,foody);
		currentMove='r';
		for(var i=0;i<14;i++){
			x=10+i;
			snakeArr.push(new snake(x,y));
			paint(snakeArr[i].x,snakeArr[i].y,'white','black',cellW);
		}
		gameloop();
	}

	start();

   //console.log(food1);
 
	function gameloop() {
		requestAnimationFrame(gameloop);
		now = Date.now();
		delta = now - then;
		if (delta > interval) {
			then = now - (delta % interval);
			c.clearRect(0,0,$("canvas")[0].width,$("canvas")[0].height);
			main();
		}
	}

	function main(){
		//console.log(food1.x,food1.y,foodW);
		paint(ourFood.x,ourFood.y,null,'red',foodW);
		if(currentMove=='l'){dx=-1;dy=0;}
		else if(currentMove=='t'){dx=0;dy=-1;}
		else if(currentMove=='r'){dx=1;dy=0;}
		else if(currentMove=='b'){dx=0;dy=1;}
		checkFoodEaten();
		checkOutOfSight();
		keyBoardEventHandler();
	}


	//Paint function for cells
	function paint(x,y,strokeColor,fillColor,width){
			c.beginPath();
			c.fillStyle = fillColor;
			c.fillRect(x*width,y*width,width,width);
			c.strokeStyle = strokeColor;
			c.strokeRect(x*width,y*width,width,width);
		}

	//movment function of snake
	function move(){
			var head={x:snakeArr[snakeArr.length-1].x+dx,y:snakeArr[snakeArr.length-1].y+dy};
			snakeArr.push(head);
			snakeArr.shift();
			snakeArr.forEach(function(e,i){paint(e.x,e.y,'white','black',cellW);});
		}

	function checkFoodEaten(){
		if(snakeArr[snakeArr.length-1].x===ourFood.x&&snakeArr[snakeArr.length-1].y===ourFood.y){
			foodx=Math.round(Math.random()*(w-cellW)/cellW);
			foody=Math.round(Math.random()*(h-cellW)/cellW);
			ourFood.x=foodx;
			ourFood.y=foody;
			var head={x:snakeArr[snakeArr.length-1].x+dx,y:snakeArr[snakeArr.length-1].y+dy};
			snakeArr.push(head);
		}
		else{
			move();
		}
	}


	//function to return from which side,whole snake is out of canvas
	function outOfSight(){
		if(snakeArr[0].x>99&&currentMove=='r'){
			return 'rightExcede';
		}
		else if(snakeArr[0].x<0&&currentMove=='l'){
			return 'leftExcede';
		}
		else if(snakeArr[0].y>45.5&&currentMove=='b'){
			return 'bottomExcede';
		}
		else if(snakeArr[0].y<0&&currentMove=='t'){
			return 'topExcede';
		}
		else{
			return false;
		}
	}

	//function to check if snake is out of canvas or not
	function checkOutOfSight(){

		if((snakeArr[0].x<99&&snakeArr[0].x>0)||(snakeArr[0].y<45.5&&snakeArr[0].y>0)){
			outofSightprev=false;
		}
			
		var res=outOfSight();

		if(res!=false&&outofSightprev===false){
			switch(res){
				case 'rightExcede':
					for(var i=0;i<snakeArr.length;i++){
						x=-10+i;
						snakeArr[i].x=x;
					}
					outofSightprev=true;
					break;
				case 'leftExcede':
					for(var i=0;i<snakeArr.length;i++){
						x=110-i;
						snakeArr[i].x=x;
					}
					outofSightprev=true;
					break;
				case 'bottomExcede':
					for(var i=0;i<snakeArr.length;i++){
						y=-10+i;
						snakeArr[i].y=y;
					}
					outofSightprev=true;
					break;
				case 'topExcede':
					for(var i=0;i<snakeArr.length;i++){
						y=55-i;
						snakeArr[i].y=y;
					}
					outofSightprev=true;
					break;
			}
		}
	}


	//function to toggle on/off for keyboard pressing event.It will disable arrow keys when snake is out of canvas
	function keyBoardEventHandler(){
		if(snakeArr[snakeArr.length-1].x<99||snakeArr[snakeArr.length-1].x>0||snakeArr[snakeArr.length-1].y<45.5||snakeArr[snakeArr.length-1].y>0){
			$(window).on('keydown',function(e){
				switch (e.which) {
        			case 37:
        				if(currentMove!=='r'&&currentMove!=='l'){currentMove='l';}
        				break;
        			case 38:
        				if(currentMove!=='t'&&currentMove!=='b'){currentMove='t';}
        				break;
        			case 39:
        				if(currentMove!=='r'&&currentMove!=='l'){currentMove='r';}
        				break;
        			case 40:
        				if(currentMove!=='t'&&currentMove!=='b'){currentMove='b';}
        				break;
        		}
        		e.preventDefault(); 
			});
		}
		if(snakeArr[snakeArr.length-1].x>99||snakeArr[snakeArr.length-1].x<0||snakeArr[snakeArr.length-1].y>45.5||snakeArr[snakeArr.length-1].y<0){
			$(window).off('keydown');
		}
	}

	
});

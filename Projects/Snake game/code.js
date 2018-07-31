$(document).ready(function(){
	var canvas=$('canvas');
	var c=$("canvas")[0].getContext('2d');
	var w=$("canvas")[0].width;
	var h=$("canvas")[0].height;
	var snakeArr;
	var cellW=12;
	var foodW=12;
	var score;
	var idFrame;
	var currentMove;
	var outofSightprev;
	var ourFood;
	var foodx;
	var foody;
	var dx;
	var dy;
	//for frame cotrol
	var fps = 25;
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

	function start(){
		score=0;
		$('h1').text('Score: '+score);
		snakeArr=[];
		var x=10;
		var y=10;
		foodx=Math.round(Math.random()*(w-cellW)/cellW);
		foody=Math.round(Math.random()*(h-cellW)/cellW);
		dx=0;
		dy=0;
		ourFood=new food(foodx,foody);
		currentMove='r';
		for(var i=0;i<5;i++){
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
		if(collisionDetection()){
			start();
		}
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

	//function to check if food is eaten. If eaten,will increase the size
	function checkFoodEaten(){
		if(snakeArr[snakeArr.length-1].x===ourFood.x&&snakeArr[snakeArr.length-1].y===ourFood.y){
			score+=10;
			$('h1').text('Score: '+score);
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


	function collisionDetection(){
		for(var j=0;j<snakeArr.length-1;j++){
			if(snakeArr[snakeArr.length-1].x===snakeArr[j].x&&snakeArr[snakeArr.length-1].y===snakeArr[j].y){
				return true;
			}
		}
		return false;
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


		if((snakeArr[0].x<99&&snakeArr[0].x>0)&&(snakeArr[0].y<45.5&&snakeArr[0].y>0)){
			outofSightprev=false;
		}
		
		var res=outOfSight();
		console.log('above switch: '+outofSightprev);
		console.log('above res '+res);

		if(res!=false&&outofSightprev===false){
			switch(res){
				case 'rightExcede':
					for(var i=0;i<snakeArr.length;i++){
						x=(0-snakeArr.length)+i;
						snakeArr[i].x=x;
					}
					outofSightprev=true;
					break;
				case 'leftExcede':
					for(var i=0;i<snakeArr.length;i++){
						x=(100+snakeArr.length)-i;
						snakeArr[i].x=x;
					}
					outofSightprev=true;
					break;
				case 'bottomExcede':
					for(var i=0;i<snakeArr.length;i++){
						y=(0-snakeArr.length)+i;
						snakeArr[i].y=y;
					}
					outofSightprev=true;
					break;
				case 'topExcede':
					for(var i=0;i<snakeArr.length;i++){
						y=(46+snakeArr.length)-i;
						snakeArr[i].y=y;
					}
					outofSightprev=true;
					break;
			}
		}
		console.log('below switch: '+outofSightprev);

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

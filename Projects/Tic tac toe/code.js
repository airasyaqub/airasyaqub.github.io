$(document).ready(function() {
	// body...
	var huplayer;
	var aiplayer;
	$('#circle').click(function(){
   		huplayer='o';
   		aiplayer='x';
   		$('#choose').hide();
   		$('#grid').show();
   		$('#wl').show();
   		start();
	});

	$('#cross').click(function(){
   		huplayer='x';
   		aiplayer='o';
   		$('#choose').hide();
   		$('#grid').show();
   		$('#wl').show();
   		start();
	});

	var wincombo=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

	//start();
	$('#rep').click(function(){
		$('#rep').hide();
		start();
	});

	function start () {
		// body...
		var winspot;
		$('.box').css('cursor','pointer');
		$('#wl h1').text('PLAY');
		var board=[1,2,3,4,5,6,7,8,9];
		$('.box').html('');
		var human;
		var ai;
		if(huplayer=='x'){
			 human='<p class="x">X</p>';
			 ai= '<p class="o">O</p>';
		}
		else{
			 ai='<p class="x">X</p>';
			 human= '<p class="o">O</p>';
		}
		
		//console.log(human);
		$('.box').click(humanturn);


		function humanturn(e){
			
			$(this).off("click");
			$(this).css('cursor','default');
			//console.log(human);
			$(this).append(human);
			var clickedindex=board.indexOf(Number(e.target.id));
			board.splice(clickedindex,1,huplayer);
			//var loc=null;
			//var loc=checkwin(huplayer,board);
			//console.log(loc);
			if(checkwin(huplayer,board)){
				for(var k=0;k<wincombo[winspot].length;k++){
					var selector= '#'+wincombo[winspot][k]+' > p';
					console.log(selector);
					$(selector).css("color","green");
				}
				$('.box').off('click');
				$('#rep').show();
				$('.box').css('cursor','default');
				$('#wl h1').text('You win');
			}

			else if(checktie(board)){

				$('.box').off('click');
				$('#rep').show();
				$('.box').css('cursor','default');
				$('#wl h1').text('TIE');
				$('.o,.x').css('color','orange');
			}

			else if(!checktie(board)){

				//aiturn(e.target.id,board);
				$('.box').off('click');
				$('.box').css('cursor','default');
				setTimeout(function(){

					aiturn(e.target.id,board); 

				}, 1100);

			}
		
		}

		function aiturn(eid,brd){

			//var aiclicked=brd.indexOf(emptyspots(brd)[0]);
			//var arr=emptyspots(brd);
			//arr.forEach( function(element, index) {
			//	$('#'+element).on('click',humanturn);
			//});
			//$('.box').on('click',humanturn);
			//$('.box').css('cursor','pointer');
			var aispot=minimax(aiplayer,brd).index;
			console.log(aispot);
			var winflag=0;
			//var aispot=aiclicked+1;
			//var aiclicked=board.indexOf(aispot);
			board.splice(aispot-1,1,aiplayer);
			$('#'+aispot).append(ai);
			$('#'+aispot).off('click');
			$('#'+aispot).css('cursor','default');
			//var loc2=checkwin(aiplayer,board);
			if(checkwin(aiplayer,board)){
				for(var k=0;k<wincombo[winspot].length;k++){
					var selector= '#'+wincombo[winspot][k]+' > p';
					console.log(selector);
					$(selector).css("color","red");
				}
				winflag=1;
				$('.box').off('click');
				$('.box').css('cursor','default');
				$('#rep').show();
				$('#wl h1').text('AI win');
			}
			else if(checktie(board)){

				$('.box').off('click');
				$('.box').css('cursor','default');
				$('#rep').show();
				$('#wl h1').text('Tie');
				$('.o,.x').css('color','orange');
			}

			if(winflag==0){
			var arr=emptyspots(brd);
			arr.forEach( function(element, index) {
				$('#'+element).on('click',humanturn);
				$('#'+element).css('cursor','pointer');
			});
		}

		}

  		function checkwin(player,brd){

  			var playedspots=[];
  			if(player==huplayer){

  				brd.forEach( function(element, index) {
  					// statements
  					if(element==huplayer){
  					var spt=index+1;
  					playedspots.push(spt);
  				}
  				});
  			}

  			else if (player==aiplayer) {
  				brd.forEach( function(element, index) {
  					// statements
  					if(element==aiplayer){
  					var spt=index+1;
  					playedspots.push(spt);
  				}
  				});		
  			}
  			//console.log(playedspots);
		for(var i=0;i<wincombo.length;i++){
			for(var j=0;j<wincombo[i].length;j++){
					//var winning;
				if(playedspots.indexOf(wincombo[i][j])!==-1){
					if(j<wincombo[i].length-1){
						continue;
					}
				}
				else{
					break;			
				}
				winspot=i;
				return true;
				}
		}
	}

		function emptyspots(brd){
			return brd.filter(function(a){
				return typeof(a)=='number';
			});
		}

		function checktie(brd){
			if(emptyspots(brd).length===0){
				return "tie";
			}
		}


		function minimax(player,newboard){

			var availspots=emptyspots(newboard);

			if(checkwin(huplayer,newboard)){
				return {score:-10};
			}
			else if (checkwin(aiplayer,newboard)) {
				return {score:10};
			}
			else if (availspots.length===0) {
				return {score:0};
			}

			var moves=[];
			for(var i=0;i<availspots.length;i++){

				var move={};
				move.index=availspots[i];
				newboard[availspots[i]-1]=player;
				var result;
				if(player==aiplayer){
					result=minimax(huplayer,newboard);
					move.score=result.score;
				}
				else {
					result=minimax(aiplayer,newboard);
					move.score=result.score;
				}

				newboard[availspots[i]-1]=move.index;
				moves.push(move);
			}

			var bestvalue;
			//var bestscore;
			//console.log(moves);
			if(player==aiplayer){
				var bestscore=-10000;
				for(var j=0;j<moves.length;j++){
					if(moves[j].score>bestscore){
						bestscore=moves[j].score;
						bestvalue=j;
					}

				}
			}
			else{
				var bestscore=10000;
				for(var j=0;j<moves.length;j++){
					if(moves[j].score<bestscore){
						bestscore=moves[j].score;
						bestvalue=j;
					}

				}

			}

			return moves[bestvalue];

		}

	}



});
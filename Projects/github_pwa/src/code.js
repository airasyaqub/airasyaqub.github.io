$(document).ready(function () {
	// body... 

	AOS.init({
  		duration: 800
	});



	var followersArr;
	var errorShowed=false;
	var gettingResponse=false;

	if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js', {
        scope: './'
    }).then(function (registration) {
        console.log("registration");
        //registration.update();
    }).catch (function (error) {
        // Something went wrong during registration. The service-worker.js file
        // might be unavailable or contain a syntax error.
        console.log('Registration failed  ' + error);
    });
} else {
    // The current browser doesn't support service workers.
    console.log(`The current browser doesn't support service workers.`);
}

	$('#main input').val('');
	 

	$('#main input').keydown(function(e){
		var inputVal=$('#main input').val();
		if(inputVal&&e.keyCode==13&&gettingResponse==false){
			gettingResponse=true;
			errorShowed=false;
			searchMain(inputVal,'index');
		}
		
	});

	$('#main button').click(function(){
		var inputVal=$('#main input').val();
		if(inputVal&&gettingResponse==false){
			errorShowed=false;
			gettingResponse=true;
			searchMain(inputVal,'index');
		}
	});

	$('#searchIcon').click(function(){
		$('#mainuser').html('');
		$('#users').html('');
		$('#main input').val('');
		$('#main').css({'display':'flex'});
		$('#searchIcon').css({'display':'none'});
		$('#mainuser').css({'display':'none'});
		$('#users').css({'display':'none'});
	});


	function showDialog(message){
		//console.log(message);
		gettingResponse=false;
		vex.dialog.alert(message);
	}



	function searchMain(userName,page){
		//console.log(userName,page);
		fetch(`https://api.github.com/users/${userName}`).then(function(response){
			if(response.ok===false){
				if(response.status==403){
					throw Error('API rate limit exceeded');
				}
				else if(response.status==404){
					throw Error('no user found');
				}
			}
			return response.json();			
		}).then(function(response){
			if(page=='index'){
				//console.log(response);
				showMainUser(response);}
			else if(page=='followers'){
				//console.log(response);
				showFollowers(response);}
		}).catch(function(err){
			//console.log(err);
			if(err=='Error: API rate limit exceeded'&&errorShowed==false){
				errorShowed=true;
				showDialog('Error: API rate limit exceeded.Please try again after 15 to 20 min.');
			}
			else if(err=='Error: no user found'&&errorShowed==false){
				errorShowed=true;
				showDialog('Error: no user found');
			}
			else if(errorShowed==false){
				errorShowed=true;
				showDialog('Error: Internet connection');
			}
			//vex.dialog.alert(err);
			//showDialog(err);
		});
	}

	function showMainUser(response){
		var mainName=response.name;
		var mainCompany=response.company;
		var mainBio=response.bio;
		if(response.name==null){mainName='Not specified';}
		if(response.company==null){mainCompany='Not yet employed';}
		if(response.bio==null){mainBio='Not yet added';}
		$('#mainuser').append(
		`<div id="user" class="col-md-11 col-sm-12">
		<div class="image">
			<img src="${response.avatar_url}">
		</div>
		<div class="info">
			<div class="upper">
				<h1>${mainName}</h1>
				<p>${mainCompany}</p>
			</div>
			<div class="lower">
				<h3>BIO</h3>
				<p>${mainBio}</p>
				<div class="table">
					<table border="0">
						<tr>
							<td><button class="btns followers" style="background-color:#45B810"><i class="fa fa-bell"></i> followers (<span>${response.followers}</span>)</button></td>
							<td><button class="btns following" style="background-color:#F02A2A"><i class="fa fa-user-plus"></i> following (<span>${response.following}</span>)</button></td>
						</tr>
						<tr>
							<td><button class="btns repo" style="background-color:#2FACEB"><a href="https://github.com/${response.login}"><i class="fa fa-book"></i> Repositries</a></button></td>
							<td><button class="btns git" style="background-color:#E4F81A"><a href="https://github.com/${response.login}"><i class="fa fa-github"></i> view on github</a></button></td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>`);
		$('#searchIcon').css({'display':'flex'});
		$('#main').css({'display':'none'});
		//$('#mainuser').css({'display':'block'});
		$('#mainuser').fadeIn(1000);
		//console.log(followersArr);
		clickAttach(response);
		gettingResponse=false;
	}


	function clickAttach(response){
		//console.log('clickFollowers');
		$('#mainuser #user .info .lower .table table td .followers').click(function(){
			var str=$(this).text();
			var patt = new RegExp("\(0\)");
			if(!patt.test(str)&&gettingResponse==false){
				errorShowed=false;
				gettingResponse=true;
				//$('#mainuser').css({'display':'none'});
				//$('#users').css({'display':'flex'});
				getResponse(response,'followers');
			}
		});
		$('#mainuser #user .info .lower .table table td .following').click(function(){
			var str=$(this).text();
			var patt = new RegExp("\(0\)");
			if(!patt.test(str)&&gettingResponse==false){
				errorShowed=false;
				gettingResponse=true;
				//$('#mainuser').css({'display':'none'});
				//$('#users').css({'display':'flex'});
				getResponse(response,'following');
			}
		});
	}

	function getResponse(response,endpoint){
		//console.log("getResponse");
		fetch(`https://api.github.com/users/${response.login}/${endpoint}`).then(function(response){
			if(response.ok===false){
				if(response.status==403){
					throw Error('API rate limit exceeded');
				}
				else if(response.status==404){
					throw Error('no user found');
				}
			}
			return response.json();
		}).then(function(response){
			//console.log(response);
			//console.log(followersArr);
			followersArr=response;
			$('#mainuser').css({'display':'none'});
			$('#users').css({'display':'flex'});
			getFollowers();
		}).catch(function(err){
			//console.log(err);
			if(err=='Error: API rate limit exceeded'){showDialog('Error: API rate limit exceeded.Please try again after 15 to 20 min.');}
			else if(err=='Error: no user found'){showDialog('Error: no user found');}
			else{showDialog('Error: Internet connection');}
			//console.log(err);
		});
	}

	function getFollowers(){
		//console.log('getFollowers');
		//console.log(followersArr);
		$('#users').html('');
		followersArr.forEach(function(e,i){
			searchMain(e.login,'followers');
		});
	}


	function showFollowers(response){
		//console.log("showFollowers");
		//console.log($('#mainuser'));
		//console.log($('#users'));
		//console.log(response);
		var name=response.name;
		var company=response.company;
		var bio=response.bio;
		if(response.name==null){name='Not specified';}
		if(response.company==null){company='Not yet employed';}
		if(response.bio==null){bio='Not yet added';}
		var i=searchIndex(response);

		$('#users').append(

		`<div id="user" class="col-lg-4 col-md-4 col-sm-5 col-11" data-aos="fade-right" data-aos-once="true" data-index=${i}>
		<div class="image">
			<img src="${response.avatar_url}">
		</div>
		<div class="info">
			<div class="upper">
				<h5>${name}</h5>
				<p>${company}</p>
			</div>
			<div class="lower">
				<h5>BIO</h5>
				<p>${bio}</p>
				<div class="table">
					<table border="0">
						<tr>
							<td><button class="btns followers" style="background-color:#45B810"><i class="fa fa-bell"></i> followers (<span>${response.followers}</span>)</button></td>
							<td><button class="btns following" style="background-color:#F02A2A"><i class="fa fa-user-plus"></i> following (<span>${response.following}</span>)</button></td>
						</tr>
						<tr>
							<td><button class="btns repo" style="background-color:#2FACEB"><a href="https://github.com/${response.login}"><i class="fa fa-book"></i> Repositries</a></button></td>
							<td><button class="btns git" style="background-color:#E4F81A"><a href="https://github.com/${response.login}"><i class="fa fa-github"></i> view on github</a></button></td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>`
		);
		gettingResponse=false;
	}

	function searchIndex(response){
		var res;
		followersArr.forEach(function(e,i){
			if (response.login==e.login){res=i;}
		});
		return res;
	}

	

	$(document).on('click','#users .followers' ,function(){
		var clickedFollower=Number($(this).closest('#user').attr("data-index"));
		var str=$(this).text();
		//console.log(str);
		var patt = /\(0\)/;
		if(!patt.test(str)&&gettingResponse==false){
			errorShowed=false;
			gettingResponse=true;
		
			getResponse(followersArr[clickedFollower],'followers');	
		}
			
		
		//console.log($(this).closest('#user').index());
	});

	$(document).on('click','#users .following' ,function(){
		var clickedFollower=Number($(this).closest('#user').attr("data-index"));	
		var str=$(this).text();
		//console.log(str);
		var patt = /\(0\)/;
		if(!patt.test(str)&&gettingResponse==false){
			errorShowed=false;
			gettingResponse=true;
		
			getResponse(followersArr[clickedFollower],'following');	
		}	
		//console.log($(this).closest('#user').index());
	});




});
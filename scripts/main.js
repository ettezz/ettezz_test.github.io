var myImage = document.querySelector('img');
var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');
myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	
	if(mySrc === 'images/image1.jfif'){
		myImage.setAttribute ('src','images/image2.jfif');
//		myTitle.textContent = '!!!!!!';
	}
	else if(mySrc === 'images/image2.jfif'){
		myImage.setAttribute ('src','images/image3.jfif');
//		myTitle.textContent = '.....';
	}
	else{
		myImage.setAttribute ('src','images/image1.jfif');
//		myTitle.textContent = '!????';
	}
}




myButton.onclick = function(){
	setUserName();
}



function setUserName(){
	let myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	//myHeading.innerHTML = 'Mozilla is cool ' + myName;

	if(!localStorage.getItem('name') || myName === null){
		setUserName();
	}

	else{
		myHeading.innerHTML = 'Mozilla is cool, 早安, ' + myName;
	}
}

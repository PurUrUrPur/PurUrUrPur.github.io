var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');
myImage.onclick = function(){
var mySrc = myImage.getAttribute('src');
if(mySrc === 'images/mozilla-firefox.png'){
    myImage.setAttribute('src', 'images/mozilla-anime.png')
}else{
    myImage.setAttribute('src', 'images/mozilla-firefox.png');
}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Hello, ' + myName + '!';
}

if(!localStorage.getItem('name')){
setUserName();    
}else{
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = "Hello, " + storedName + "!";
}

myButton.onclick = function(){
    setUserName();
}
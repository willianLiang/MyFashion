var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/index_pic.jpg') {
      myImage.setAttribute ('src','images/index_pic2.jpg');
    } else {
      myImage.setAttribute ('src','images/index_pic.jpg');
    }
}
//--------以上按一下換圖片----------
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName||myName === null){
    setUserName();
  } else {
   localStorage.setItem('name',myName);
   myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
//--------以上顯示使用者名稱跟更換----------
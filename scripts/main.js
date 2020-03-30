const myHeading = document.querySelector('h1');
myHeading.textContent= 'Hey there!';

document.querySelector('html').onclick=function(){
    alert('Ouch! Stop poking me!');
}
let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/whale1.gif'){
        myImage.setAttribute('src','images/whale2.gif');
    } else {
        myImage.setAttribute ('src','images/whale1.gif');
    }
}

var imagesList = [
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg'
];

var i = 0;
var time = 3000;
var img = document.getElementsByClassName('img100');
var slide = document.getElementsByClassName('slides')[0];


function changeImage() {

  if (i < imagesList.length - 1){
    img[i].classList.toggle("shown");
    img[i+1].classList.toggle("shown");
    i++;
  } else {
    img[i].classList.toggle("shown");
    i = 0;
    img[i].classList.toggle("shown");
  }

  setTimeout("changeImage()", time);
}


function populateImages () {
  var imgSkel =`<img class="img100 shown" src="###" alt="">`;

  imagesList.forEach((item, i) => {
    newImg = imgSkel.replace('###', imagesList[i]);
    if (i > 0) newImg = newImg.replace('shown', '');
    slide.insertAdjacentHTML('beforeEnd', newImg);
  });
}


window.onload = function () {
  populateImages();
  changeImage();
};

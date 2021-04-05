var images = [
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg'
];
var i = 0;
var time = 3000;
var img = document.getElementsByClassName('img100');

function changeImage() {

  if (i < images.length - 1){
    img[i].classList.remove("shown");
    img[i].classList.add("hidden");
    img[i+1].classList.remove("hidden");
    img[i+1].classList.add("shown");
    i++;
  } else {
    img[i].classList.add("hidden");
    img[i].classList.remove("shown");
    i = 0;
    img[i].classList.add("shown");
    img[i].classList.remove("hidden");
  }

  setTimeout("changeImage()", time);
}



var slide = document.getElementsByClassName('slides')[0];

function populateImages () {
  var imgSkel =`<img class="img100 shown" src="###" alt="">`;

  images.forEach((item, i) => {
    newImg = imgSkel.replace('###', images[i]);
    if (i > 0) newImg = newImg.replace('shown', 'hidden');
    slide.insertAdjacentHTML('beforeEnd', newImg);
  });

}

window.onload = function () {
  populateImages();
  changeImage();

};

const $button = $('<a class="button moreInfoBtn" href="#mountain">More Info...</a>');
$('.moreinfo').append($button);



//Toggle the More Info Text
$('.moreinfo').on('click', '.button', function(event) {
  button = $(event.target);
  extrainfo =  $(event.target).parent().find(".extrainfo");
  extrainfo.toggle();
  if (extrainfo.is(':visible')) {
    button.html("Show Less");
  } else {
    button.html("More Info...");
``}
});



// Working Slideshow
const slidePicArray = document.getElementsByClassName('slideImage');
let currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);
const prevSlideBtn = document.getElementById('prev');
const nextSlideBtn = document.getElementById('next');

const bothBtns = document.getElementsByClassName('slideshowButton');


function nextSlide() {
  slidePicArray[currentSlide].className = 'slideImage';
  currentSlide = (currentSlide+1)%slidePicArray.length;
  slidePicArray[currentSlide].className = 'slideImage show';
};


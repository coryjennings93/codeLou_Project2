// function argCheck(parameter1, parameter2, parameter3){
//   console.log(parameter1 + parameter2 + parameter3);
// }

// // Function with extra arguments
// argCheck(1,2,3,4);
// // Logs 6 (1 + 2 + 3, ignores 4)

// // Function with missing arguments
// argCheck(1,2);


const $button = $('<a class="button" href="#mountain">More Info...</a>');
$('.moreinfo').append($button);



//Hide the more info text
// $('.moreinfo p').hide();
// when button is pressed show
$('.moreinfo').on('click', '.button', function(event) {
  // $(this).prev().show();
  button = $(event.target);
  extrainfo =  $(event.target).parent().find(".extrainfo");
  extrainfo.toggle();
  if (extrainfo.is(':visible')) {
    button.html("Show Less");
  } else {
    button.html("Show More");

  }
  
});

// $(this).click(function(event) {
  // $(this).prev().hide();
  
  // });

const slidePicArray = document.getElementsByClassName('slideImage');
let currentSlide = 0;
var slideInterval = setInterval(nextSlide,4000);
const prevSlideBtn = document.getElementById('prev');
const nextSlideBtn = document.getElementById('next').textContent;

function nextSlide() {
  slidePicArray[currentSlide].className = 'slideImage';
  currentSlide = (currentSlide+1)%slidePicArray.length;
  slidePicArray[currentSlide].className = 'slideImage show';
};



// for (let i = 0; i < slidePicArray.length; i += 1) {
//    slidePicArray[i].className = "show";
//    slideInterval();

// };



// for (let i = 0; i < slidePicArray.length; i += 1) {
//   slidePicArray[i].style.display = "block"
//   // If you go over all slides, restart the index to show the first slide and start again
//   if (i === slides.length) index = 0; 
      
//   slides[index].classList.add('active');

// }, 2000)

// };
// };





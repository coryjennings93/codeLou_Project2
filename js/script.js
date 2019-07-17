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
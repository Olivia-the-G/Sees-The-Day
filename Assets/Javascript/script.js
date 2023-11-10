
// save user input to local storage when the save button is clicked
$(".saveBtn").on("click", function() {
  var textInput = $(this).siblings(".description").val();
  var thisTime = $(this).parent().attr("id");
  localStorage.setItem(thisTime, textInput);

  console.log(`Time Block: ${thisTime}, User Input: ${textInput}`);
});


// apply past, present, and future classes to time blocks 
function whatTimeIsIt() {
  var currentHour = dayjs().hour();
    console.log(`Current hour: ${currentHour}`);
  
  $(".time-block").each(function () {
    // use the specific id for each time block 
    var blockTime = parseInt($(this).attr("id").split("hour-")[1]);

      // compare id to current hour
      if (blockTime < currentHour) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (blockTime === currentHour) {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      };
  });
};
  
// get any saved input from local storage
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

whatTimeIsIt();

//display the current date in the header of the page
const currentDay = dayjs().format('MMMM-D-YYYY');
$("#currentDay").text(`Today's date is ${currentDay}`);
console.log(`Today's date: ${currentDay}`);
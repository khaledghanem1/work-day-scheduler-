$(document).ready(function () {
  // Getting current date to show in the header
  var currentDate = moment().format("dddd, MMMM Do YYYY");

  // Getting the current hour to figure out past,present,future
  var currentHour = moment().hour();


  //Pushing current day value to the id in the html
  $("#currentDay").text(currentDate);
 //Created a function to track hours of the day
    function hourTracking() {
        //For each through the time blocks in html
        $(".time-block").each(function () {
        //Splitting the id's in the html to get the value of hours
        var htmlTime = parseInt($(this).attr("id").split("hour")[1]);
        console.log(htmlTime);

        

        
        //If the current hour = html time then add the present class and remove future and past classes
        if (currentHour === htmlTime) {
            console.log(currentHour);
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");

        //If the current hour > html time then add the past class and remove present and future classes
        } else if (currentHour > htmlTime) {
            console.log(htmlTime + "past");
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");

        //If the current hour < html time then add the future class and remove present and past classes

        } else if (currentHour < htmlTime) {
            console.log(htmlTime + "future");
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }
        });
    }
    hourTracking();
  
  $( ".time-block button" ).click(function() {
    console.log(this)
    var notes = $(this).siblings("textarea").val();
    var time =$(this).siblings(".hour").html();
    console.log(notes, time)
    localStorage.setItem(time,notes);
  });

$("#hour9 textarea").val(localStorage.getItem("9:00 AM"));
$("#hour10 textarea").val(localStorage.getItem("10:00 AM"));
$("#hour11 textarea").val(localStorage.getItem("11:00 AM"));
$("#hour12 textarea").val(localStorage.getItem("12:00 PM"));
$("#hour13 textarea").val(localStorage.getItem("01:00 PM"));
$("#hour14 textarea").val(localStorage.getItem("02:00 PM"));
$("#hour15 textarea").val(localStorage.getItem("03:00 PM"));
$("#hour16 textarea").val(localStorage.getItem("04:00 PM"));
$("#hour17 textarea").val(localStorage.getItem("05:00 PM"));

 
});

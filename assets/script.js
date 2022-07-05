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
    var time =$(this).parent().attr("id");
    console.log(notes, time)
    localStorage.setItem(time,notes);
    $("#localStorage").text("Appointment Saved to Local Storage")
  });

$("#hour9 textarea").val(localStorage.getItem("hour9"));
$("#hour10 textarea").val(localStorage.getItem("hour10"));
$("#hour11 textarea").val(localStorage.getItem("hour11"));
$("#hour12 textarea").val(localStorage.getItem("hour12"));
$("#hour13 textarea").val(localStorage.getItem("hour13"));
$("#hour14 textarea").val(localStorage.getItem("hour14"));
$("#hour15 textarea").val(localStorage.getItem("hour15"));
$("#hour16 textarea").val(localStorage.getItem("hour16"));
$("#hour17 textarea").val(localStorage.getItem("hour17"));

 
});

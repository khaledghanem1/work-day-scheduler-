$(document).ready(function () {

   var currentDate = moment().format("dddd, MMMM Do YYYY");
   var currentHour = moment().hour();
   var previousHour = currentHour -1;
   var htmlTime = $(".hourBlock .time").html()
    $("#currentDay").text(currentDate)
     
    function hourTracking() {
        if(currentHour === htmlTime) {
            console.log(currentHour)
        } else if (currentHour > htmlTime) {
            console.log(currentHour, previousHour + "previous")
        }
    }
    hourTracking();




});
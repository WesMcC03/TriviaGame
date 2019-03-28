var correctanswer = 0;
var wronganswer = 0;

document.onload = function(){

$("#startbutton").on("click", start);
$('Restart').click(quiz.reset);
};

// Holds setInterval for Timer
var intervalId


// Prevents timer from speeding up
  var clockRunning = false;

  // Timer Object
  var timer = {
      time: 0,

  // Resets the quiz Timer
  reset: function(){
      timer.time = 0;
  },

  // Starts the Quiz Timer
  start: function() {
      if(!clockRunning) {
          intervalId = setInterval(timer.count, 1000);
          clockRunning = true;
          console.log(timer)
      }

  },

  count: function() {
      var converted = Convert(time);
      //increments time by 1    
      timer.time++;
      // 
      var converted = timer.Convert(timer.time);
      console.log(converted)

      $("#display").text(converted);
  },

  Convert: function(t) {

      var minutes = Math.floor(t / 60);
      var seconds = Math.floor(t / 60 );

      if (seconds < 10) {
          seconds = "0" + seconds;
        }
      
        if (minutes === 0) {
          minutes = "00";
        }
        else if (minutes < 10) {
          minutes = "0" + minutes;
        }
      
        return minutes + ":" + seconds;
  }

  }









  // TIMER DISPLAY
  $('#display').text('00:00');


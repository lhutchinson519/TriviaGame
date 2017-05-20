
var counter= 10;
var correctAnswers="";
var incorrectAnswers="";
var unanswered="";
//correct answers
var answerQuestion1 = $("#Q1inlineRadio3").html();
var answerQuestion2= "#Q2inlineRadio2";
var answerQuestiion3= "#Q3inlineRadio4";
var answerQuestion4= "#Q4inlineRadio1";

//on clicking the start button, the timer begins
//and the computer keeps track of which answers chosen are correct
$("#start").click(function() {
      setInterval(function() {
      counter--;
      $("#remaining").text(counter);
      }, 1000);

        if (counter == 0);{
          $("#done").click(function() {
          counter = 10;
          $("#remaining").html("10");

    });
  }
});

$("input[name='inlineRadioOptions']").click(function() {
    console.log("answer is chosen");

    var chosenAnswer = $("input[name='inlineRadioOptions']").html(chosenAnswer)
        if (chosenAnswer= answerQuestion1){
          console.log("correct")
        }
        else{
          console.log("incorrect")
        }
      });




// function start() {
//   intervalId = setInterval(count, 1000);
// }

// function stop() {
//   console.log("stopping");
//   clearInterval(intervalId);

// }

// function count() {

//   time--;
//   $("#remaining").html(count, 1000);

// }




//counter for the timer
var counter= 10;

//end display results
var correctAnswers=0
$("#correctAnswers").html(correctAnswers);
var incorrectAnswers=0
$("#incorrectAnswers").html(incorrectAnswers);
var unanswered=0
$("#unanswered").html(unanswered);

//correct answers
var answerQuestion1= $("#Q1inlineRadio3").parent().text().trim();
var answerQuestion2= $("#Q2inlineRadio2").parent().text().trim();
var answerQuestion3= $("#Q3inlineRadio4").parent().text().trim();
var answerQuestion4= $("#Q4inlineRadio1").parent().text().trim();

//showing the all done div when clicking the done button

$("#done").click(function() {
  $("#allDone").toggle();
});

//on clicking the start button, the timer begins
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

//on clicking a button, checking if its chosen
//referring to the input id being clicked and comparing
$("input[name='inlineRadioOptions']").click(function(answer) {

//declaring variable chosen
    var chosenAnswer = $(this).parent().text().trim();
    //var chosenAnswer = $("input[name='inlineRadioOptions']").parent().text();//(answer.target.id);
    console.log("chosen: " + answer.target.id);

//if the chosen answer = target id its correct
        if (chosenAnswer== answerQuestion1){
          console.log("correct")
          correctAnswers++;
          $("#correctAnswers").append(correctAnswers);
          console.log("Number of correct answers: " + correctAnswers);}

          else{
            console.log(chosenAnswer.text+"|"+answerQuestion1);
            console.log("incorrect")
            incorrectAnswers++;
            $("#incorrectAnswers").append(incorrectAnswers);
            console.log("Number of incorrect answers: " + incorrectAnswers);}

          if ($("input[name='inlineRadioOptions']:checked").val()){
            console.log('checked');
            console.log("unanswered: " + unanswered)}
            else {
            unanswered++;
            $("#unanswered").append(unanswered);
            console.log('nothing checked');}
          });

      

//question 2
      //   if (chosenAnswer== answerQuestion2){
      //     console.log("correct")
      //     correctAnswers++;
      //     console.log("Number of correct answers: " + correctAnswers)
      //   }
      //   else{
      //     console.log(chosenAnswer.text+"|"+answerQuestion1);
      //     console.log("incorrect")
      //     incorrectAnswers++;
      //     console.log("Number of incorrect answers: " + incorrectAnswers)
      //   }
      // });



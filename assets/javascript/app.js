$(document).ready(function(){

//counter for the timer
var counter= 10;

//end display results
var correctAnswers=0
$("#correctAnswers").append(correctAnswers);
var incorrectAnswers=0
$("#incorrectAnswers").append(incorrectAnswers);
var unanswered=4
$("#unanswered").append(unanswered);

//correct answers

// var allCorrectAnswers = ["#Q1inlineRadio3","#Q2inlineRadio2", "#Q3inlineRadio4", "#Q4inlineRadio1"];

var answerQuestion1= $("#Q1inlineRadio3").parent().text().trim();
var answerQuestion2= $("#Q2inlineRadio2").parent().text().trim();
var answerQuestion3= $("#Q3inlineRadio4").parent().text().trim();
var answerQuestion4= $("#Q4inlineRadio1").parent().text().trim();

//showing the all done div when clicking the done button
//allDone").hide();

    $("#done").click(function(e) {
      e.preventDefault();
      $("#allDone").show();
      counter=1
      $("#remaining").html(counter);
    });
 
  // if (counter==0){
  //   $("#allDone").show();
  // }

//on clicking the start button, the timer begins
$("#start").click(function() {
     var timer = setInterval(timer, 1000);

      function timer(){
      counter--;
      $("#remaining").text(counter);

        if (counter <= 0){
          clearInterval(timer);
          $("#done").click(function() {
          counter = 10;
          $("#remaining").html("10");

            });
          $("#allDone").show();
          }
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
          $("#correctAnswers").html("Correct Answers: " + correctAnswers);
          console.log("Number of correct answers: " + correctAnswers);}

          else{
            console.log(chosenAnswer.text+"|"+answerQuestion1);
            console.log("incorrect")
            incorrectAnswers++;
            $("#incorrectAnswers").html("Incorrect Answers: " + incorrectAnswers);
            console.log("Number of incorrect answers: " + incorrectAnswers);}

          if ($("input[type='radio']:checked").val()){
            unanswered--;
            $("#unanswered").html("Unanswered: " + unanswered);
            console.log('checked');
            console.log("unanswered: " + unanswered);
            }
            else {
            console.log('nothing checked');}
          });

$("input[name='inlineRadioOptions2']").click(function(answer) {

//declaring variable chosen
    var chosenAnswer = $(this).parent().text().trim();
    //var chosenAnswer = $("input[name='inlineRadioOptions']").parent().text();//(answer.target.id);
    console.log("chosen: " + answer.target.id);
//question 2
        if (chosenAnswer== answerQuestion2){
          console.log("correct")
          correctAnswers++;
          $("#correctAnswers").html("Correct Answers: " + correctAnswers);
          console.log("Number of correct answers: " + correctAnswers);}

          else{
            console.log(chosenAnswer.text+"|"+answerQuestion2);
            console.log("incorrect")
            incorrectAnswers++;
            $("#incorrectAnswers").html("Incorrect Answers: " + incorrectAnswers);
            console.log("Number of incorrect answers: " + incorrectAnswers);}


          if ($("input[type='radio']:checked").val()){
            unanswered--;
            $("#unanswered").html("Unanswered: " + unanswered);
            console.log('checked');
            console.log("unanswered: " + unanswered);
            }
            else {
            console.log('nothing checked');}
          });

//question 3
$("input[name='inlineRadioOptions3']").click(function(answer) {

//declaring variable chosen
    var chosenAnswer = $(this).parent().text().trim();
    //var chosenAnswer = $("input[name='inlineRadioOptions']").parent().text();//(answer.target.id);
    console.log("chosen: " + answer.target.id);

        if (chosenAnswer== answerQuestion3){
          console.log("correct")
          correctAnswers++;
          $("#correctAnswers").html("Correct Answers: " + correctAnswers);
          console.log("Number of correct answers: " + correctAnswers);}

          else{
            console.log(chosenAnswer.text+"|"+answerQuestion3);
            console.log("incorrect")
            incorrectAnswers++;
            $("#incorrectAnswers").html("Incorrect Answers: " + incorrectAnswers);
            console.log("Number of incorrect answers: " + incorrectAnswers);}


          if ($("input[type='radio']:checked").val()){
            unanswered--;
            $("#unanswered").html("Unanswered: " + unanswered);
            console.log('checked');
            console.log("unanswered: " + unanswered);
            }
            else {
            console.log('nothing checked');}
          });

//question 4

$("input[name='inlineRadioOptions4']").click(function(answer) {

//declaring variable chosen
    var chosenAnswer = $(this).parent().text().trim();
    //var chosenAnswer = $("input[name='inlineRadioOptions']").parent().text();//(answer.target.id);
    console.log("chosen: " + answer.target.id);


        if (chosenAnswer== answerQuestion4){
          console.log("correct")
          correctAnswers++;
          $("#correctAnswers").html("Correct Answers: " + correctAnswers);
          console.log("Number of correct answers: " + correctAnswers);}

          else{
            console.log(chosenAnswer.text+"|"+answerQuestion4);
            console.log("incorrect")
            incorrectAnswers++;
            $("#incorrectAnswers").html("Incorrect Answers: " + incorrectAnswers);
            console.log("Number of incorrect answers: " + incorrectAnswers);}

          if ($("input[type='radio']:checked").val()){
            unanswered--;
            $("#unanswered").html("Unanswered: " + unanswered);
            console.log('checked');
            console.log("unanswered: " + unanswered);
            }
            else {
            console.log('nothing checked');}
          });

 });
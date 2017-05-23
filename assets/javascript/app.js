var total = 5;
var score = 0;
var time = 25;
var intervalId;

//Set Correct Answers using an Array
var answers = ["b", "c", "d", "a", "d"];

setTimeout(disableButtons, 25000);
setTimeout(submitAnswers, 25000);


function disableButtons() {
    // disables submit button
    $("#submit").prop("disabled", true);
    // disables answers
    $(".answer").prop("disabled", true);
}

function submitAnswers() {

    var q1 = document.forms["triviaForm"]["q1"].value;
    var q2 = document.forms["triviaForm"]["q2"].value;
    var q3 = document.forms["triviaForm"]["q3"].value;
    var q4 = document.forms["triviaForm"]["q4"].value;
    var q5 = document.forms["triviaForm"]["q5"].value;


    //Check answers using FOR loop
    for (i = 1; i <= total; i++) {
        if (eval("q" + i) == answers[i - 1]) {
            score++;
        }
    }

    $("#results").html("<h3>You scored " + score + " out of " + total + "</h3>");

    disableButtons();

    // stops timer on click
    stop();

    //Return false because it is not being entered into a database
    return false;

};

// run submitAnswers when submit button is clicked
$("#submit").on("click", submitAnswers);


function run() {
    intervalId = setInterval(decrement, 1000);
}


function decrement() {
    //  Decrease number by one.
    time--;
    //  Show the number in the #show-number tag.
    $("#time-left").html("<h2>" + time + " seconds!</h2>");
    //  Once number hits one...
    if (time === 1) {
        $("#time-left").html("<h2>" + time + " second!</h2>");
    }
    //  Once number hits zero...
    if (time == 0) {
        //  ...run the stop function.
        $("#time-left").html("<h2>Time's up!</h2>");
        stop();
        // $("#submit").prop("disabled", true);
        // $(".answer").prop("disabled", true);

    }
}

function stop() {
    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
}

run();

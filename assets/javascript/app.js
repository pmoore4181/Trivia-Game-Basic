function submitAnswers() {
	var total = 5;
	var score = 0;

	
	
	//Get user input using variable and selecting each question in quizForm
	var q1 = document.forms["triviaForm"]["q1"].value;
	var q2 = document.forms["triviaForm"]["q2"].value;
	var q3 = document.forms["triviaForm"]["q3"].value;
	var q4 = document.forms["triviaForm"]["q4"].value;
	var q5 = document.forms["triviaForm"]["q5"].value;
	
	
	//Validation using FOR loop
	for(i = 1; i <= total; i++) {
		if(eval("q"+i) == null || eval("q"+i) == "") {
			alert("You missed question " + i);
			return false;
		}
	}


	//Set Correct Answers using an Array
	var answers = ["b", "c", "d", "a", "d"];
	
	//Check answers using FOR loop

	for(i = 1; i <= total; i++) {
		if(eval("q"+i) == answers [i - 1]) {
			score++;
		}
	}
			
	//Show results on page and in alert
	var results = document.getElementById("results");
	results.innerHTML = "<h3>You scored <span>"+score +"</span> out of <span>" +total +"</span> points</h3>";
	
	//Return false because it is not being entered into a database
	return false;
}
$(".alert").hide();
google.load("visualization", "1", {packages:["corechart"]});

var questionArray = [
	"Name?", "Age?", "Gender?",
];
var answerArray = [
	["Mr. Meyers", "Monica", "Sam"],
	["fetus", "tot", "grandpa"],
	["Boy", "Girl", "Other"],
];

var selectedAnswers = [];
var questionCounter = 0;

var displayQuestion = function() {
	document.getElementById('questionText').innerHTML = questionArray[questionCounter];
	console.log(questionCounter);
	for (var i=0; i<questionArray.length; i++){
		var questionText = questionArray[questionCounter];
		document.getElementById("questionText").innerHTML = questionText;

	}
}

var displayAnswers = function() {
	$("input").removeAttr("checked");
	var answers = answerArray[questionCounter];
	for (var i=0; i<answers.length; i++){
		var answerText = answers[i];
		var choiceName = "choice" + (i+1);
		console.log(choiceName);
		document.getElementById(choiceName).innerHTML = answerText;
	}
}

var buttonClicked= function() {
	$(".alert").hide();
	var radioButtons = document.getElementsByClassName("radioButton");
	var checkedFlag = false;
	for (var i=0; i< radioButtons.length; i++) {
		var currentButton = radioButtons[i];
		if (currentButton.checked == true) {
			checkedFlag = true;
			var choiceName = "choice" + (i+1);
			var selection = document.getElementById(choiceName).innerHTML;
			console.log("test");
			selectedAnswers.push(selection);
			break;
	}
	}
	if (checkedFlag == false) {
		//display alert
		$(".alert").show();
		return;
	}

	console.log("fuckyea");
	questionCounter++;
	var count = questionArray[0].length + questionArray[1].length + questionArray[2].length;
	if (questionCounter >= count) {
		submitForm();
		return;
	}
	displayQuestion();
	displayAnswers();

}

var submitForm = function() {
	var urlbase = "https://docs.google.com/a/10bbe53c718545135caef58a7747f9e0e749a275.googledrive.com/forms/d/1GdbDnxUGigc_GWOhosWm6Lyc4KCtZ4LhGYienH4Z9qY/formResponse";
	$.ajax({
		url: urlbase,
		data: {"entry.1926605000": selectedAnswers[0], "entry.45808793": selectedAnswers[1], "entry.740604650": selectedAnswers[2]},
		type: "POST",
		dataType: "xml",
		complete: function(data) {

		}

	});
}

displayQuestion();
displayAnswers();



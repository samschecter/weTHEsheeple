var petitionRecord = [];

function Petitioner(properties) {
  this.name = properties.name;
  this.gender = properties.gender;
  this.age = properties.age;
}

// this function is called when a new person is asked to sign the petition

function addAPetitioner() {
  var add = confirm("Welcome to the minecraft sheep Petition! Would you like to sign?");
    if (add == true) {
    inputData();
  }
    else if (add == false) {
    alert("Thank you. End the brutality!");
  }
}

// each question is asked, and put into a temporary object

function inputData() {
  var tempName = prompt("What is your first and last name?");
  var tempGender = prompt("What gender do you identify with?");
  var tempAge = prompt("How old are you?");

  petitionerProperties = {
    name: tempName,
    gender: tempGender,
    age: Number(tempAge)
  };

  petitionRecord = new Petitioner (petitionerProperties);
  console.log(petitionRecord);
  
}

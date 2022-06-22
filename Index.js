var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
return new bootstrap.Popover(popoverTriggerEl)
});
var input = document.getElementById("Countries");
var firstGuess = document.getElementById("Guess");
var secondGuess = document.getElementById("Guess1");
var thirdGuess = document.getElementById("Guess2");
var fourthGuess = document.getElementById("Guess3");
var fifthGuess = document.getElementById("Guess4");
var countries = ["Albania", "Andorra", "Austria", "Azerbaijan", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kazakhstan", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "The Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom", "Vatican City"];
var countryPick = countries[Math.floor(Math.random()*countries.length)];
var flag = "Flag of Countries/" + countryPick + ".png";
var map = "Map of Countries/" + countryPick + ".png";
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();
today = yyyy + '/' + mm + '/' + dd;
console.log(today);
console.log(countryPick);
document.getElementById("Countries").addEventListener('keypress', event=> {
if (event.keyCode === 13) {
event.preventDefault();
resetIfInvalid(input);
input.value="";
}
});
function resetIfInvalid(input){
if (input.value == "")
   return;
var options = input.list.options;
for (var i = 0; i< options.length; i++) {
   if (input.value == options[i].value)
       guessInput();
}
input.value = "";
};
function guessInput(){
    if (firstGuess.value==""){
    firstGuess.innerText=input.value;
    firstGuess.value=input.value;
    firstGuess.disabled=false;
    inputCheck();
    }
    else if (firstGuess.value!="" && secondGuess.value=="" && thirdGuess.value=="" && fourthGuess.value=="" && fifthGuess.value==""){
    secondGuess.innerText=input.value;
    secondGuess.value=input.value;
    secondGuess.disabled=false;
    inputCheck();
    }
    else if (firstGuess.value!="" && secondGuess.value!="" && thirdGuess.value=="" && fourthGuess.value=="" && fifthGuess.value==""){
    thirdGuess.innerText=input.value;
    thirdGuess.value=input.value;
    thirdGuess.disabled=false;
    inputCheck();
    }
    else if (firstGuess.value!="" && secondGuess.value!="" && thirdGuess.value!="" && fourthGuess.value=="" && fifthGuess.value==""){
    fourthGuess.innerText=input.value;
    fourthGuess.value=input.value;
    thirdGuess.disabled=false;
    inputCheck();
    }
    else if (firstGuess.value!="" && secondGuess.value!="" && thirdGuess.value!="" && fourthGuess.value!="" && fifthGuess.value=="" && input.value==countryPick){
    fifthGuess.innerText=input.value;
    inputCheck();
    }
    else if (firstGuess.value!="" && secondGuess.value!="" && thirdGuess.value!="" && fourthGuess.value!="" && fifthGuess.value=="" && input.value!=countryPick){
    fifthGuess.innerText=input.value;
    alert("It is " + countryPick + "!");
    input.disabled="true";
    document.getElementById("Flags").src= flag;
    document.getElementById("Maps").src= map;
    document.getElementById("Names").innerHTML=countryPick;
    document.getElementById("Flags").style.display= "block";
    document.getElementById("Maps").style.display= "block";
    document.getElementById("Names").style.display= "block";
    }
};
function inputCheck(){
    if(input.value==countryPick){
        alert("Your Guess is Correct!");
        input.disabled="true";
        document.getElementById("Flags").src= flag;
        document.getElementById("Maps").src= map;
        document.getElementById("Names").innerHTML=countryPick;
        document.getElementById("Flags").style.display= "block";
        document.getElementById("Maps").style.display= "block";
        document.getElementById("Names").style.display= "block";
        firstGuess.disabled=true;
        secondGuess.disabled=true;
        thirdGuess.disabled=true;
        fourthGuess.disabled=true;
        localStorage.setItem("GuessTime", today);
        console.log(localStorage.getItem("GuessTime"));
    }
    else{
        return;
    }
};
function refreshFunction(){
    firstGuess.value="";
    secondGuess.value="";
    thirdGuess.value="";
    fourthGuess.value="";
    fifthGuess.value="";
    firstGuess.disabled=true;
    secondGuess.disabled=true;
    thirdGuess.disabled=true;
    fourthGuess.disabled=true;
    input.value="";
};
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
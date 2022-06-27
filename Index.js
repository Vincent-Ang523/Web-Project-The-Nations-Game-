import countries from './CountryInfo.js'
//triggers the modal please don't erase
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
return new bootstrap.Popover(popoverTriggerEl)
});
let input = document.getElementById("userInputs");
let modalClose = document.getElementById("closeButton");
let crossButton = document.getElementById("xButton");
let firstGuess = document.getElementById("Guess");
let secondGuess = document.getElementById("Guess1");
let thirdGuess = document.getElementById("Guess2");
let fourthGuess = document.getElementById("Guess3");
let fifthGuess = document.getElementById("Guess4");
let firstCountry = countries[Math.floor(Math.random()*countries.length)]; //chooses random object from the countries list
let secondCountry = ""; //when the user inputs a country, the country's value will be registered in this variable
let countryPick = firstCountry.Name;
console.log(countryPick)
let flag = "Flag of Countries/" + countryPick + ".png";
let map = "Map of Countries/" + countryPick + ".png";
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); 
let yyyy = today.getFullYear();
today = yyyy + '/' + mm + '/' + dd;
document.getElementById("userInputs").addEventListener('keypress', event=> {
if (event.keyCode === 13) {
event.preventDefault();
resetIfInvalid(input);
input.value="";
}
});
function resetIfInvalid(input){
if (input.value == "")
   return;
let options = input.list.options;
for (let i = 0; i< options.length; i++) {
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
    fourthGuess.disabled=false;
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
    firstGuess.disabled=true;
    secondGuess.disabled=true;
    thirdGuess.disabled=true;
    fourthGuess.disabled=true;
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
window.addEventListener("load", function() {
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
}); //Uses add event listener to prevent reference error
firstGuess.addEventListener("click", firstHint);
secondGuess.addEventListener("click", secondHint);
thirdGuess.addEventListener("click", thirdHint);
fourthGuess.addEventListener("click", fourthHint);
function firstHint(){
  secondCountry = countries.find(x => x.Name == firstGuess.value);
  Hints()
}
function secondHint(){
  secondCountry = countries.find(x => x.Name == secondGuess.value);
  Hints()
}
function thirdHint(){
  secondCountry = countries.find(x => x.Name == thirdGuess.value);
  Hints()
}
function fourthHint(){
  secondCountry = countries.find(x => x.Name == fourthGuess.value);
  Hints()
}
function Hints(){
  let colors = firstCountry.flagColors.filter(element => secondCountry.flagColors.includes(element)); //finds the colors that are present in both the first country's flag colors array and the second country's
  function similarFlagDesign() {
    if(firstCountry.flagDesign==secondCountry.flagDesign){
      document.getElementById("Hint").style.display="block";
      document.getElementById("Hint").innerHTML = "Both Countries have " + firstCountry.flagDesign + " flag designs";
    }
    else{
      return;
    }
  }
  function borderEachOther() {
    if(firstCountry.Borders.includes(secondCountry.Name)==true){
     document.getElementById("Hint1").style.display="block";
     document.getElementById("Hint1").innerHTML = "Both countries border each other";
    }
    else{
      return;
    }
  }
  
  function similarColors() {
    if(colors!=null && colors.length==1){
      document.getElementById("Hint2").style.display="block";
      document.getElementById("Hint2").innerHTML = "Both Countries have " + colors + " in their flags";
    }
    else if(colors!=null && colors.length==2){
      document.getElementById("Hint2").style.display="block";
      document.getElementById("Hint2").innerHTML = "Both Countries have " + colors[0] + " and "+ colors[1] + " in their flags";
    }
    else if(colors!=null && colors.length>2){
      let text=""
      for(let i=0; i<colors.length-1; i++){
      text += colors[i]+", "
      }
      document.getElementById("Hint2").style.display="block";
      document.getElementById("Hint2").innerHTML = "Both Countries have " + text + "and " + colors[colors.length-1] + " in their flags";
    }
    else{
      return;
    }
  }
  
  function europeanUnion() {
    if(firstCountry.isPartOfTheEU==secondCountry.isPartOfTheEU && firstCountry.isPartOfTheEU=="yes"){
      document.getElementById("Hint3").style.display="block";
      document.getElementById("Hint3").innerHTML = "Both countries are members of the EU";
    }
    else if(firstCountry.isPartOfTheEU==secondCountry.isPartOfTheEU && firstCountry.isPartOfTheEU=="no"){
      document.getElementById("Hint3").style.display="block";
      document.getElementById("Hint3").innerHTML = "Both countries are not members of the EU";
    }
    else {
      return;
    }
  }
  
  function nato () {
    if(firstCountry.isPartofNato==secondCountry.isPartofNato && firstCountry.isPartofNato=="yes"){
      document.getElementById("Hint4").style.display="block";
      document.getElementById("Hint4").innerHTML =  "Both countries are members of NATO";
    }
    else if(firstCountry.isPartofNato==secondCountry.isPartofNato && firstCountry.isPartofNato=="no"){
      document.getElementById("Hint4").style.display="block";
      document.getElementById("Hint4").innerHTML = "Both countries are not members of NATO";
    }
    else {
      return;
    }
  }
  similarFlagDesign();
  borderEachOther();
  similarColors();
  europeanUnion();
  nato();
};

modalClose.addEventListener("click", modalExit)
crossButton.addEventListener("click", modalExit)

function modalExit(){
  document.getElementById("Hint").style.display="none";
  document.getElementById("Hint").innerHTML = "";
  document.getElementById("Hint1").style.display="none";
  document.getElementById("Hint1").innerHTML = "";
  document.getElementById("Hint2").style.display="none";
  document.getElementById("Hint2").innerHTML = "";
  document.getElementById("Hint3").style.display="none";
  document.getElementById("Hint3").innerHTML = "";
  document.getElementById("Hint4").style.display="none";
  document.getElementById("Hint4").innerHTML = "";
}
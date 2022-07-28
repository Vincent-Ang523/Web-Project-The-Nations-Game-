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
let firstCountry = countries[0];
//let firstCountry = countries[Math.floor(Math.random()*countries.length)]; //chooses random object from the countries list
let secondCountry = ""; //when the user inputs a country, the country's value will be registered in this variable
let countryPick = firstCountry.Name;
console.log(countryPick);
let flag = "Flag of Countries/" + countryPick + ".png";
let map = "Map of Countries/" + countryPick + ".png";
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); 
let yyyy = today.getFullYear();
today = yyyy + '/' + mm + '/' + dd;
let warning = document.getElementById("warning");
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
      if(input.value!=firstGuess.value){
    secondGuess.innerText=input.value;
    secondGuess.value=input.value;
    secondGuess.disabled=false;
    warning.style.display="none";
    inputCheck();
      }
      else if(input.value==firstGuess.value){
      warning.style.display="block";
      input.value="";
      }
    }
    else if (firstGuess.value!="" && secondGuess.value!="" && thirdGuess.value=="" && fourthGuess.value=="" && fifthGuess.value==""){
      if(input.value!=firstGuess.value && input.value!=secondGuess.value){
      thirdGuess.innerText=input.value;
      thirdGuess.value=input.value;
      thirdGuess.disabled=false;
      warning.style.display="none";
      inputCheck();
      }
      else if(input.value==firstGuess.value || input.value==secondGuess.value){
      warning.style.display="block";
      input.value="";
      }
    }
    else if (firstGuess.value!="" && secondGuess.value!="" && thirdGuess.value!="" && fourthGuess.value=="" && fifthGuess.value==""){
      if(input.value!=firstGuess.value && input.value!=secondGuess.value && input.value!=thirdGuess.value){
      fourthGuess.innerText=input.value;
      fourthGuess.value=input.value;
      fourthGuess.disabled=false;
      warning.style.display="none";
      inputCheck();
      }
      else if(input.value==firstGuess.value || input.value==secondGuess.value || input.value==thirdGuess.value){
        warning.style.display="block";
        input.value=""; 
      }
    }
    else if (firstGuess.value!="" && secondGuess.value!="" && thirdGuess.value!="" && fourthGuess.value!="" && fifthGuess.value==""){
      if(input.value!=firstGuess.value && input.value!=secondGuess.value && input.value!=thirdGuess.value && input.value!=fourthGuess.value){
      fifthGuess.innerText=input.value;
      fifthGuess.value=input.value;
      fifthGuess.disabled=false;
      warning.style.display="none";
      inputCheck();
      }
      else if(input.value==firstGuess.value || input.value==secondGuess.value || input.value==thirdGuess.value || input.value==fourthGuess.value){
        warning.style.display="block";
        input.value="";  
      }
    }
    else if (firstGuess.value!="" && secondGuess.value!="" && thirdGuess.value!="" && fourthGuess.value!="" && fifthGuess.value!="" && input.value==countryPick){
      if(input.value!=firstGuess.value && input.value!=secondGuess.value && input.value!=thirdGuess.value && input.value!=fourthGuess.value && input.value!=fifthGuess.value){
      inputCheck();
      }
      else if(input.value==firstGuess.value || input.value==secondGuess.value || input.value==thirdGuess.value || input.value==fourthGuess.value || input.value==fifthGuess.value){
      warning.style.display="block";
      input.value="";
      }
      }
    else if (firstGuess.value!="" && secondGuess.value!="" && thirdGuess.value!="" && fourthGuess.value!="" && fifthGuess.value!="" && input.value!=countryPick){
      if(input.value!=firstGuess.value && input.value!=secondGuess.value && input.value!=thirdGuess.value && input.value!=fourthGuess.value && input.value!=fifthGuess.value){
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
      fifthGuess.disabled=true;
      }
      else if(input.value==firstGuess.value || input.value==secondGuess.value || input.value==thirdGuess.value || input.value==fourthGuess.value || input.value==fifthGuess.value){
      warning.style.display="block";
      input.value="";
      }
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
        fifthGuess.disabled=true;
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
  fifthGuess.disabled=true;
  input.value="";
}); //Uses add event listener to prevent reference error
firstGuess.addEventListener("click", firstHint);
secondGuess.addEventListener("click", secondHint);
thirdGuess.addEventListener("click", thirdHint);
fourthGuess.addEventListener("click", fourthHint);
fifthGuess.addEventListener("click", fifthHint);
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
function fifthHint(){
  secondCountry = countries.find(x => x.Name == fifthGuess.value);
  Hints()
}
function Hints(){
  let colors = firstCountry.flagColors.filter(element => secondCountry.flagColors.includes(element)); //finds the colors that are present in both the first country's flag colors array and the second country's
  let languages = firstCountry.Language.filter(element => secondCountry.Language.includes(element)); //finds the languages that are present in both the first country's offical languages array and the second country's
  function similarFlagDesign() {
    if(firstCountry.flagDesign==secondCountry.flagDesign && firstCountry.flagDesign!=""){
      document.getElementById("Hint").style.display="block";
      document.getElementById("Hint").innerHTML = "Both countries have " + firstCountry.flagDesign + " flag designs";
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
      document.getElementById("Hint2").innerHTML = "Both countries have " + colors + " in their flags";
    }
    else if(colors!=null && colors.length==2){
      document.getElementById("Hint2").style.display="block";
      document.getElementById("Hint2").innerHTML = "Both countries have " + colors[0] + " and "+ colors[1] + " in their flags";
    }
    else if(colors!=null && colors.length>2){
      let text=""
      for(let i=0; i<colors.length-1; i++){
      text += colors[i]+", "
      }
      document.getElementById("Hint2").style.display="block";
      document.getElementById("Hint2").innerHTML = "Both countries have " + text + "and " + colors[colors.length-1] + " in their flags";
    }
    else{
      return;
    }
  }
  
  function economicUnion() {
    if(firstCountry.economicUnions==secondCountry.economicUnions && firstCountry.economicUnions!=""){
      document.getElementById("Hint3").style.display="block";
      document.getElementById("Hint3").innerHTML = "Both countries are members of the "+firstCountry.economicUnions;
    }
    else {
      return;
    }
  }
  
  function militaryAlliance() {
    if(firstCountry.militaryAlliances==secondCountry.militaryAlliances && firstCountry.militaryAlliances!=null){
      document.getElementById("Hint4").style.display="block";
      document.getElementById("Hint4").innerHTML =  "Both countries are members of "+firstCountry.militaryAlliances;
    }
    else {
      return;
    }
  }
  function region(){
    if(firstCountry.Region==secondCountry.Region && firstCountry.Region!=null){
      document.getElementById("Hint5").style.display="block";
      document.getElementById("Hint5").innerHTML =  "Both countries are in "+firstCountry.Region;
    }
    else {
      return;
    }
  }
  function continent(){
    if(firstCountry.Continent==secondCountry.Continent && firstCountry.Region!=secondCountry.Region){
      document.getElementById("Hint6").style.display="block";
      document.getElementById("Hint6").innerHTML =  "Both countries are in "+firstCountry.Continent;
    }
    else {
      return;
    }
  }
  function commonLanguages() {
    if(languages!=null && languages.length==1){
      document.getElementById("Hint7").style.display="block";
      document.getElementById("Hint7").innerHTML = "Both countries speak " + languages;
    }
    else if(languages!=null && languages.length==2){
      document.getElementById("Hint7").style.display="block";
      document.getElementById("Hint7").innerHTML = "Both countries speak " + languages[0] + " and "+ languages[1];
    }
    else if(languages!=null && languages.length>2){
      let text=""
      for(let i=0; i<languages.length-1; i++){
      text += languages[i]+", "
      }
      document.getElementById("Hint7").style.display="block";
      document.getElementById("Hint7").innerHTML = "Both countries speak " + text + "and " + languages[languages.length-1];
    }
    else{
      return;
    }
  }
  similarFlagDesign();
  borderEachOther();
  similarColors();
  economicUnion();
  militaryAlliance();
  region();
  continent();
  commonLanguages();
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
  document.getElementById("Hint5").style.display="none";
  document.getElementById("Hint5").innerHTML = "";
  document.getElementById("Hint6").style.display="none";
  document.getElementById("Hint6").innerHTML = "";
  document.getElementById("Hint7").style.display="none";
  document.getElementById("Hint7").innerHTML = "";
}
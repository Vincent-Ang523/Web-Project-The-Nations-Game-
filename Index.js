import countries from './CountryInfo.js'
//Triggers the modal in the page

let input = document.getElementById("Countries");
let firstGuess = document.getElementById("Guess");
let secondGuess = document.getElementById("Guess1");
let thirdGuess = document.getElementById("Guess2");
let fourthGuess = document.getElementById("Guess3");
let fifthGuess = document.getElementById("Guess4");
let firstCountry = countries[Math.floor(Math.random()*countries.length)];
let countryPick = firstCountry.Name;
let flag = "Flag of Countries/" + firstCountry + ".png";
let map = "Map of Countries/" + firstCountry + ".png";
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); 
let yyyy = today.getFullYear();
today = yyyy + '/' + mm + '/' + dd;
console.log(today);
console.log(firstCountry);
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
let options = input.list.options;
for (let i = 0; i< options.length; i++) {
   if (input.value == options[i].value)
       guessInput();
       similarFlagDesign();
       borderEachOther();
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
    firstGuess.disabled=false;
    secondGuess.disabled=true;
    thirdGuess.disabled=true;
    fourthGuess.disabled=true;
    input.value="";
};
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
function hints(){
  let secondCountry = countries.find(x => x.Name === input.value);
  let colors = firstCountry.flagColors.filter(element => secondCountry.flagColors.includes(element));
  let colorsLength = colors.length;
function similarFlagDesign() {
    if(firstCountry.flagDesign==secondCountry.flagDesign){
      document.getElementById("Hint").style.display="block";
      document.getElementById("Hint").innerHTML = "Both Countries have " + firstCountry.flagDesign + " flag designs" + "<br>";
    }
    else {
      return;
    }
  };
  function borderEachOther() {
    if(firstCountry.Borders.includes(secondCountry.Name)!=null){
      document.getElementById("Hint1").style.display="block";
      document.getElementById("Hint1").innerHTML = "Both countries border each other";
    }
    else{
      return;
    }
  }
  
  function similarColors() {
    if(colors!=null && colors.length==1){
      return "Both Countries have " + colors + " in their flags"
    }
    else if(colors!=null && colors.length==2){
      return "Both Countries have " + colors[0] + " and "+ colors[1] + " in their flags"
    }
    else if(colors!=null && colors.length>2){
      let text=""
      for(let i=0; i<colorsLength-1; i++){
      text += colors[i]+", "
      }
      return "Both Countries have " + text + "and " + colors[colorsLength-1] + " in their flags"
    }
    else {
      return;
    }
  }
  console.log(similarColors());
  
  function europeanUnion() {
    if(firstCountry.isPartOfTheEU==secondCountry.isPartOfTheEU && firstCountry.isPartOfTheEU=="yes"){
      return "Both countries are members of the EU"
    }
    else if(firstCountry.isPartOfTheEU==secondCountry.isPartOfTheEU && firstCountry.isPartOfTheEU=="no"){
      return "Both countries are not members of the EU"
    }
    else {
      return ""
    }
  }
  console.log(europeanUnion())
  
  function nato () {
    if(firstCountry.isPartofNato==secondCountry.isPartofNato && firstCountry.isPartofNato=="yes"){
      return "Both countries are members of NATO"
    }
    else if(firstCountry.isPartofNato==secondCountry.isPartofNato && firstCountry.isPartofNato=="no"){
      return "Both countries are not members of NATO"
    }
    else {
      return ""
    }
  }
  console.log(nato())
}
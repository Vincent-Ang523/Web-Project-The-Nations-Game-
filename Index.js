import countries from './CountryInfo.js'
//triggers the modal
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
return new bootstrap.Popover(popoverTriggerEl)
});
let input = document.getElementById("userInputs");
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
console.log(countryPick);
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
});
firstGuess.addEventListener("click", Hints);
secondGuess.addEventListener("click", Hints);
thirdGuess.addEventListener("click", Hints);
fourthGuess.addEventListener("click", Hints);
fifthGuess.addEventListener("click", Hints);
function Hints(){
  let secondCountry = countries.find(x => x.Name === input.value);
  let colors = firstCountry.flagColors.filter(element => secondCountry.flagColors.includes(element));
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
      document.getElementById("Hint2").style.display="block";
      document.getElementById("Hint2").innerHTML = "Both Countries have " + colors + " in their flags";
    }
    else if(colors!=null && colors.length==2){
      document.getElementById("Hint2").style.display="block";
      document.getElementById("Hint2").innerHTML = "Both Countries have " + colors[0] + " and "+ colors[1] + " in their flags";
    }
    else if(colors!=null && colors.length>2){
      let text=""
      for(let i=0; i<colorsLength-1; i++){
      text += colors[i]+", "
      }
      document.getElementById("Hint2").style.display="block";
      document.getElementById("Hint2").innerHTML = "Both Countries have " + text + "and " + colors[colorsLength-1] + " in their flags";
    }
    else {
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
      document.getElementById("Hint3").innerHTML = "Both countries are not members of NATO";
    }
    else {
      return;
    }
  }
};
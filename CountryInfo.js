

var Germany={
  Name: "Germany",
  Language:["German"],
  flagDesign:"Tricolor",
  flagColors:['Black','Red','Yellow'],
  Borders:['France', 'The Netherlands', 'Belgium', 'Luxembourg', 'Austria', 'Switzerland,', 'Poland', 'Denmark', 'Czech Republic'],
  isPartOfTheEU: "yes",
  lettersUsed:['G','E','R','M','A','N','Y'],
  isPartofNato: "yes",
  Region: "Central Europe"
}
var France={
  Name: "France",
  Language:["French"],
  flagDesign:"Tricolor",
  flagColors:['Black','Yellow','Red'],
  Borders:['Spain', 'The Netherlands', 'Belgium', 'Luxembourg', 'Andorra', 'Switzerland,', 'Italy', 'Germany'],
  isPartOfTheEU: "yes",
  lettersUsed:['F','R','A','N','C','E'],
  isPartofNato: "yes",
  Region: "Western Europe"
}
var Russia={
  Name: "Russia",
  Language:["Russian"],
  flagDesign:"Tricolor",
  flagColors:['White','Blue','Red'],
  Borders:['Belarus', 'Poland', 'Ukraine', 'Finland', 'Estonia', 'Latvia,', 'Lithuania', 'Kazakhstan', 'Azerbaijan', 'Georgia'],
  isPartOfTheEU: "no",
  lettersUsed:['R','U','S','S','I','A'],
  isPartofNato: "no",
  Region: "Eastern Europe"
}
var countries=[Russia, France, Germany]
var firstCountry=countries[Math.floor(Math.random()*countries.length)]
var input=document.getElementById("Countries")
var secondCountry=countries.find(x => x.Name === input.value);
document.getElementById("Countries").addEventListener('keypress', event=> {
  if (event.keyCode === 13) {
    similarFlagDesign();
    borderEachOther();
    input.value="";
  }
});

function similarFlagDesign() {
  if(firstCountry.flagDesign==secondCountry.flagDesign){
    document.getElementById("Hint").style.display="block";
    document.getElementById("Hint").innerHTML = "Both Countries have " + firstCountry.flagDesign + " flags" + "<br>";
  }
  else {
    return;
  }
};

var xBorders = firstCountry.Borders
function borderEachOther() {
  if(firstCountry.Borders.includes(secondCountry.Name)!=null){
    document.getElementById("Hint1").style.display="block";
    document.getElementById("Hint1").innerHTML = "Both countries border each other";
  }
  else{
    return;
  }
}

var colors = firstCountry.flagColors.filter(element => secondCountry.flagColors.includes(element))
var colorsLength = colors.length;
function similarColors() {
  if(colors!=null && colors.length==1){
    return "Both Countries have " + colors + " in their flags"
  }
  else if(colors!=null && colors.length==2){
    return "Both Countries have " + colors[0] + " and "+ colors[1] + " in their flags"
  }
  else if(colors!=null && colors.length>2){
    let text=""
    for(var i=0; i<colorsLength-1; i++){
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

console.log("Hello World")

function CalculateTheSum() {
  console.log(Number(document.getElementById("Calculate").value)+3)
}

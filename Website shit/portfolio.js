function SelectInput(){
	document.querySelector('#submit').onclick=ValidateInput;
}
function ValidateInput(){
	var x = document.getElementById('oordeelgebruiker').value;
	if(x=="Zeg iets over Sam!") {
		alert("Je hebt niks ingevoerd!");
	}
	if(x.length <= 4){
		alert("Vul minstens 5 karakters in!");
	}
console.log(x); //voor testen met chrome console.
}

window.onload=SelectInput; // voer deze functie uit wanneer de pagina geladen word.
window.onload=SelectInput; // voer deze functie uit wanneer de pagina geladen word.

function SelectInput(){
	document.querySelector('#submit').onclick=ValidateInput, addreactie;
	/*document.querySelector('#homeknop').onclick=ShowHome;
	//document.querySelector('#forumknop').onclick=ShowForum;
	//document.querySelector('#uitlogknop').onclick=LogOut;
	//document.querySelector('#mijnberichtenknop').onclick=ShowMessages;
	document.querySelector('#profielknop').onclick=ShowProfile;
	dit is miss later nog nodig ofzo*/
}
function ValidateInput(){
	var text = document.getElementById('oordeelgebruiker').value;
	var name = document.getElementById('naamgebruiker').value;
	if(text=="Zeg iets over Sam!" || name=="Voer uw naam in.") {
		alert("Je hebt niks ingevoerd!");
	}
	else if(text.length <= 4){
		alert("Vul minstens 5 karakters in!");
	}

	else{
		addreactie();
	}
}

/*function DisplayImage(){
var par = document.getElementById("imagebox");
var img = document.createElement("image");
img.src = "Resources/sam.jpg";
par.appendChild(img);
}*/

function addreactie() {
var text = document.getElementById('oordeelgebruiker').value;
var name = document.getElementById('naamgebruiker').value;
var element = document.createElement("p");
var label = document.createElement("Label");
label.innerHTML = name;     



element.setAttribute("value", text);



var foo = document.getElementById("reacties");


foo.appendChild(label);
foo.appendChild(element);
alert("Bedankt! Je beoordeling "+text+" is opgeslagen.");
}
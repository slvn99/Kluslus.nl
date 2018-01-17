window.onload=SelectInput; // voer deze functie uit wanneer de pagina geladen word.

function SelectInput(){
	document.querySelector('#submit').onclick=ValidateInput;
	/*document.querySelector('#homeknop').onclick=ShowHome;
	//document.querySelector('#forumknop').onclick=ShowForum;
	//document.querySelector('#uitlogknop').onclick=LogOut;
	//document.querySelector('#mijnberichtenknop').onclick=ShowMessages;
	document.querySelector('#profielknop').onclick=ShowProfile;
	dit is miss later nog nodig ofzo*/
}
function ValidateInput(){
	var x = document.getElementById('oordeelgebruiker').value;
	if(x=="Zeg iets over Sam!") {
		alert("Je hebt niks ingevoerd!");
	}
	else if(x.length <= 4){
		alert("Vul minstens 5 karakters in!");
	}

	else{
		alert("Bedankt! Je beoordeling " + x + " is opgeslagen.")
	}
console.log(x); //voor testen met chrome console.
}


function SelectInput(){
	document.querySelector('#submit').onclick=ValidateInput;
	document.querySelector('#homeknop').onclick=ShowHome;
	document.querySelector('#forumknop').onclick=ShowForum;
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

function ShowForum(){	
    window.location.replace("file:///C:/Users/Hidde/Documents/GitHub/Kluslus.nl/Website%20shit/forum.html");
	}

function ShowHome(){	
    window.location.replace("file:///C:/Users/Hidde/Documents/GitHub/Kluslus.nl/Website%20shit/home.html");
	}
window.onload=SelectInput; // voer deze functie uit wanneer de pagina geladen word.
window.onload=SelectInput; // voer deze functie uit wanneer de pagina geladen word.
var counter = 1;
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
var section = document.getElementById('mainsection');
var newart = document.createElement("article");
var label = document.createElement("Label");
var artname = document.createElement('h1');
label.innerHTML = text;   
artname.innerHTML = name;  
console.log(section);
newart.setAttribute("ID",("reactie"+ counter));
newart.setAttribute("style","float:center;border-radius: 5px;border:solid red 1px;margin:15px;");
/*newart.setAttribute("style","border radius 5px;");	
newart.setAttribute("style","margin-top 20px;");
newart.setAttribute("style","padding 15px;");	
newart.setAttribute("style","box-shadow 5px 5px;");	*/
console.log(newart);
newart.appendChild(artname);
section.appendChild(newart);
newart.appendChild(label);





//var foo = document.getElementById("reacties");


//foo.appendChild(label);
//foo.appendChild(element);
//alert("Bedankt! Je beoordeling "+text+" is opgeslagen.");
counter++;
}
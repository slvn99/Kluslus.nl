
window.onload=SelectInput; // voer deze functie uit wanneer de pagina geladen word.
var counter = 1; // counter voor dynamische benaming van reacties.
function SelectInput(){
	document.querySelector('#submit').onclick=ValidateInput, addreactie;
}
function ValidateInput(){
	var text = document.getElementById('oordeelgebruiker').value;
	var name = document.getElementById('naamgebruiker').value;
	if(text=="Zeg iets over Sam!" || name=="Voer uw naam in.") 
		alert("Je hebt niks ingevoerd!");
	
	else if(text.length <= 4)
		alert("Je beoordeling moet minstens vijf karakters lang zijn.");
	
	else if(text==name)
		alert("Je naam is geen goeie beoordeling.");

	else
		addreactie();
	
}



function addreactie() {
var text = document.getElementById('oordeelgebruiker').value;
var name = document.getElementById('naamgebruiker').value;
var section = document.getElementById('mainsection');
var newart = document.createElement("article");
var label = document.createElement("Label");
var artname = document.createElement('h1');
label.innerHTML = text;   
artname.innerHTML = name;  
newart.setAttribute("ID",("reactie"+ counter));
newart.setAttribute("style","border-radius: 5px;border:solid red 1px;margin:15px;padding:15px;box-shadow:5px 5px;display:block;");
newart.appendChild(artname);
section.appendChild(newart);
newart.appendChild(label);
//nu zouden die variabelen dus gesaved moeten worden naar een db oid. of alleen section variable geen idee.
alert("Je reactie "+text+" is opgeslagen!");
counter++;
saveReactie(text,name);
}

function saveReactie(text,name){
	var fso = new ActiveXObject("Scripting.FileSystemObject");
    var fh = fso.OpenTextFile("Resources/reacties.txt", 8, false, 0);
    fh.WriteLine(name + ' , ' + text );
    fh.Close();
}

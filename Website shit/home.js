function getStuff(){
	document.querySelector('#logo').onclick=talk;
}
function talk(){
	alert('yoyoma!');
}
window.onload=getStuff;
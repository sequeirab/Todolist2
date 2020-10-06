
function newList(){
	let createList = document.createElement("LI");
	let inputValue = document.getElementById("myInput").value;
	let createNode = document.createTextNode(inputValue);	
	createList.appendChild(createNode);
	document.getElementById("myUL").appendChild(createList);
}

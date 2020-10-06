


function newList(){
	let createList = document.createElement("LI");
	let inputValue = document.getElementById("myInput").value;
	let createNode = document.createTextNode(inputValue);	
	createList.appendChild(createNode);
	let appendX = document.createElement("SPAN")
	let newEL = document.getElementById("myUL").appendChild(createList);
	if(inputValue === ""){
		alert("Insert a real To Do");
	} else {
		document.querySelector(newEl).appendChild(appendX);
		appendX.className = "close";
	}
}

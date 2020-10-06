let nodeList = document.getElementsByTagName("LI");
for(let i = 0; i < nodeList.length; i++){
	const span = document.createElement("SPAN");
	const txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	nodeList[i].appendChild(span);
}


function newList(){
	let createList = document.createElement("LI");
	let inputValue = document.getElementById("myInput").value;
	let createNode = document.createTextNode(inputValue);	
	createList.appendChild(createNode);
		
	if(inputValue === ""){
		alert("Insert a real To Do");
	} else {
		document.getElementById("myUL").appendChild(createList);

	}
	document.getElementById("myInput").value = "";


	const span = document.createElement("SPAN");
	const txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	createList.appendChild(span);
}

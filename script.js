let nodeList = document.getElementsByTagName("LI");
for(let i = 0; i < nodeList.length; i++){
	const span = document.createElement("SPAN");
	const txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	nodeList[i].appendChild(span);
}

const close = document.getElementsByClassName("close");
for(let i = 0; i < close.length; i++){
	close[i].onclick = function() {
		let div = this.parentElement;
		div.style.display = "none";
	}
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

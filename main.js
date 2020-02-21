// выбираем первый элемент
function changeFirstElement () {
	let elem = document.getElementsByTagName("li");
	elem[0].style.color = "green";
	elem[0].id = "myId"
	elem[elem.length - 1].id = "newId";
	elem[elem.length - 1].style.color = "black";
};

// выбираем последний элемент
function changeLastElement () {
	let elem = document.getElementsByTagName("li");
	elem[elem.length - 1].style.color = "green";
	elem[elem.length - 1].id = "myId";
	elem[0].id = "newId";
	elem[0].style.color = "black";
};

// выбираем следущий элемент   
function nextElement () {
	let elem = document.getElementById("myId");
	elem.style.color = "black";
	elem.nextSibling.id = "myId";
	elem.id = "newId";
	document.getElementById("myId").style.color = "green";
};

// выбираем предыдущий элемент
function beforElement () {

	let elem = document.getElementById("myId");
	elem.style.color = "black";
	elem.previousSibling.id = "myId";
	elem.id = "newId";
	document.getElementById("myId").style.color = "green";
};

//добавляем последний элемент
function addLastElement(form) {
	let el = document.getElementById("myId");
	el.id = "newId";
	let newElement = document.createElement("li");
	newElement.id = "myId";
	newElement.innerHTML = "Последний элемент";
	myList.append(newElement);
	let elem = document.getElementsByTagName("li");
	elem[0].id = "newId";
};

//удаляем последний элемент
function removeLastElement(form) {
	let mainObj = document.getElementById("myList");
	let delLi = mainObj.lastChild;
	mainObj.removeChild(delLi);
	let li = document.getElementsByTagName("li");
	li[li.length - 1].id ="myId";
};

//добавляем первый элемент
function addFirstElement(form) {
	let newElement = document.createElement("li");
	newElement.id = "myId";
	newElement.innerHTML = "Нулевой элемент";
	myList.prepend(newElement);
};

//удаляем первый элемент
function removeFirstElement(form) {
	let mainObj = document.getElementById("myList");
	let delLi = mainObj.firstElementChild;
	mainObj.removeChild(delLi);
	let li = document.getElementsByTagName("li");
	li[0].id = "myId";
};


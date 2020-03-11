let selectedChild;

//очистка стилей
function clearStyle(){

    let list = document.getElementById("myList").childNodes;

    for (let i = 0; i < list.length; i++) {
        list[i].style.color = "";
    };
};

// выбираем первый элемент
function choseFirst() {

    clearStyle();
    selectedChild = document.getElementById("myList").firstChild;
    selectedChild.style.color = "green";
};

// выбираем последний элемент
function choseLast() {

    clearStyle();
    selectedChild = document.getElementById("myList").lastChild;
    selectedChild.style.color = "green";
};

// выбираем следущий элемент 
function choseNext() {

    let list = document.getElementById("myList").childNodes;
    clearStyle();
    if (selectedChild == null) {
        choseFirst();   
    } else {
        selectedChild = selectedChild.nextSibling;
        selectedChild.style.color = "green";
    };
};

// выбираем предыдущий элемент
function chosePrevious() {

    let list = document.getElementById("myList").childNodes;
    clearStyle();
    if (selectedChild == null) {
        choseLast();   
    } else {
        selectedChild = selectedChild.previousSibling;
        selectedChild.style.color = "green";
    };
};

//добавляем последний элемент
function addLastElement(form) {

    clearStyle();
    let newElement = document.createElement("li");
    newElement.innerHTML = "Последний элемент";
    myList.append(newElement);
};

//удаляем последний элемент
function removeLastElement(form) {

    clearStyle();
    let mainObj = document.getElementById("myList");
    let delLi = mainObj.lastChild;
    mainObj.removeChild(delLi);
};

//добавляем первый элемент
function addFirstElement(form) {

    clearStyle();
    let newElement = document.createElement("li");
    newElement.innerHTML = "Нулевой элемент";
    myList.prepend(newElement);
};

//удаляем первый элемент
function removeFirstElement (form) {

    clearStyle();
    let list = document.getElementById("myList");
    let delLi = list.firstElementChild;
    list.removeChild(delLi);
};
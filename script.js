
var addListButton = document.getElementById("add-list");
//console.log(addListButton);

addListButton.addEventListener("click", function() {
    console.log("button clicked");

    var addListPopup = document.getElementById("add-list-popup");
    addListPopup.style.display = "flex";
});

var closeButtonsArray = document.querySelectorAll(".close");
console.log(closeButtonsArray);
closeButtonsArray = Array.from(closeButtonsArray);
console.log(closeButtonsArray);


closeButtonsArray.forEach(function(closeButton, i) {
    closeButton.addEventListener("click", function() {
        var addListPopup = document.getElementById("add-list-popup");
        addListPopup.style.display = "none";
    });  
});




var addItemButton = document.getElementById("add-item");
//console.log(addItemButton);

addItemButton.addEventListener("click", function() {
    console.log("button clicked");

    var addItemPopup = document.getElementById("add-item-popup");
    addItemPopup.style.display = "flex";
});

var closeButtonsArray = document.querySelectorAll(".close");
console.log(closeButtonsArray);
closeButtonsArray = Array.from(closeButtonsArray);
console.log(closeButtonsArray);


closeButtonsArray.forEach(function(closeButton, i) {
    closeButton.addEventListener("click", function() {
        var addItemPopup = document.getElementById("add-item-popup");
        addItemPopup.style.display = "none";
    });  
});

//for (var i = 0;  i < closeButtonsArray.length; i++) {
//    var closeButton = closeButtonsArray[i];
// }




























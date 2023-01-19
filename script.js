const inputSection = document.querySelector(".input-section");
const text = document.querySelector(".text");
const buttonAdd = document.querySelector(".button-add");
const buttonReset = document.querySelector(".button-reset");
const contentSection = document.querySelector(".content-section");
const checkbox = document.querySelector("#checkbox");
// var doIt = document.querySelector(".do");
var calculate = 0;
text.addEventListener("keyup", function (e) {
  if (e.keyCode == 13) {
    add();
  }
});
buttonAdd.addEventListener("click", add);

function add() {
  if (text.value != "") {
    calculate++;
    var p = document.createElement("p");

    var deleteButton = document.createElement("div");
    var doIt = document.createElement("div");

    deleteButton.classList.add("delete-button");
    doIt.classList.add(".do");
    deleteButton.innerText = "Sil";
    doIt.innerText = "edildi";
    p.innerText = calculate + "." + text.value;
    contentSection.appendChild(p);
    p.appendChild(deleteButton);
    p.appendChild(doIt);
    p.style.wordWrap='wrap';  // pye width ve wrap vermek isteyirdim ki, contentden kenara cixmasin.Amma alinmadi
    p.style.marginBottom = "0.4rem";
    p.style.width='10rem'; // 

    doIt.style.display = "inline-block"; // do classin style da goturmedyi ucun,  tek tek burda style verdim
    doIt.style.cursor = "pointer";
    doIt.style.color = "white";
    doIt.style.backgroundColor = "rgb(21, 116, 34)";
    doIt.style.borderRadius = "0.2rem";
    doIt.style.marginLeft = "0.4rem";
    doIt.style.fontSize = "1rem";
    doIt.style.textAlign = "center";
    doIt.style.width = "2.9rem";
    doIt.style.height = "1.4rem";
    doIt.style.position = "absolute";
    doIt.style.left = "21.2rem";
    doIt.style.height = "1.4rem";

    doIt.addEventListener("click", function () {
      p.style.textDecorationLine = "line-through";
      doIt.style.textDecorationLine = "none";
        
    });

    text.value = "";


    deleteButton.addEventListener("click", function () {
      contentSection.removeChild(p);
      calculate--;
    });
    buttonReset.addEventListener("click", function () {
      contentSection.removeChild(p);
    });
  }
}

// sira nomreleri qaldi
//uzun metn yazdiqda sagiya dusmur contentden kenara cixir
// edildiye 1 defe click etmek olur

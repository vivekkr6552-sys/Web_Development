const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        if(button.id !== "clear" && button.id !== "equal"){
            display.value += button.textContent;
        }
    });
});

clear.addEventListener("click", function(){
    display.value = "";
});

equal.addEventListener("click", function(){
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
});
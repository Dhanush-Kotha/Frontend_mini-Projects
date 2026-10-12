windows.onload = function() {


let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach(function(button) {
    button.addEventListener("click", function(e) {

        e.preventDefault();

        let value = this.innerText;   // ✅ correct and safe
        console.log(value);

        if (value === "=") {
            try {
                string = eval(string);
                input.value = string;
            } catch (err) {
                input.value = "Error";
                string = "";
            }
        } 
        else if (value === "AC") {
            string = "";
            input.value = "";
        } 
        else if (value === "DEL") {
            string = string.slice(0, -1);
            input.value = string;
        } 
        else {
            string += value;
            input.value = string;
        }

    });
});
};
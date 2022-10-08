let string = "";
let buttons = document.querySelectorAll("button");
let x = document.querySelector("input");

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === "AC") {
            if (!(x.placeholder)) {
                x.placeholder = "Hey type here..!";
            } else {
                x.placeholder = "";
            }
        }
        if (x.placeholder) {
            if (e.target.innerHTML === "=") {
                string = eval(string);
            }
            else if (e.target.innerHTML === "DEL") {
                string = string.slice(0, -1);
            }
            else if (e.target.innerHTML === "C") {
                string = "";
            }
            else if (e.target.innerHTML === "AC") {
            }
            else {
                string += e.target.innerHTML;
            }
            document.querySelector(".screen").value = string;
        }

    })
})
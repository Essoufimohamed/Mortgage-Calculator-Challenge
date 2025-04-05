let mortgageAmount = document.getElementById("mortgageAmount");
let mortgageYears = document.getElementById("mortgageYears");
let mortgagePersentage = document.getElementById("mortgagePersentage");
let emptyContainer = document.getElementById("empty-container");
let completeContainer = document.getElementById("complete-container");
let monthlyRepaye = document.getElementById("monthly-repaye");
let overTime = document.getElementById("over-time");

// monthlyPayment =  mortgageAmount * ((monthlyRate*(1+monthlyRate)^year) / ((1+monthlyRate)^year) - 1))

let allInputs = document.querySelectorAll(".inputContainer input");
let allInputsSpan = document.querySelectorAll(".inputContainer span");

let chechedInputs = document.querySelectorAll(".cheacked input");
console.log((chechedInputs[0].checked = true));

document.getElementById("clear").addEventListener("click", clearData);
function clearData() {
    for (let i = 0; i < allInputs.length; i++) {
        allInputs[i].value = "";
    }
}

function checkInputs() {
    for (let i = 0; i < allInputs.length; i++) {
        let input = allInputs[i];
        if (input.value == "") {
            document.querySelectorAll(".error")[i].style.display = "block";
            input.parentElement.style.borderColor = "red";

            for (let j = 0; j < allInputsSpan.length; j++) {
                let inputSpan = allInputsSpan[i];
                inputSpan.style.backgroundColor = "red";
                inputSpan.style.color = "#fff";
            }
        } else {
            document.querySelectorAll(".error")[i].style.display = "none";
            input.parentElement.style.borderColor = "";

            for (let j = 0; j < allInputsSpan.length; j++) {
                let inputSpan = allInputsSpan[i];
                inputSpan.style.backgroundColor = "";
                inputSpan.style.color = "";
            }
        }
        console.log(input.value);
    }
}

function mortgagecalcul() {
    let amount = parseFloat(mortgageAmount.value);
    let years = parseFloat(mortgageYears.value);
    let persentages = parseFloat(mortgagePersentage.value);
    let r = persentages / 12 / 100;
    let n = years * 12;
    let m = amount * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));

    if (!amount || !years || !persentages) {
        checkInputs();
    } else {
        emptyContainer.style.display = "none";
        completeContainer.style.display = "block";
        monthlyRepaye.innerHTML = "£" + m.toFixed(2);

        overTime.innerHTML = "£" + (m * n).toFixed(2);
        checkInputs();
    }
}
// mortgagecalcul();
// console.log(allInputs);

const btn = document.getElementById("btn");
const output = document.getElementById("output");

async function displayMessage() {
    const text = document.getElementById("text").value;
    const delay = parseInt(document.getElementById("delay").value, 10);
    
    if (!text || isNaN(delay) || delay < 0) {
        output.innerText = "Please enter valid text and delay.";
        return;
    }

    output.innerText = "Waiting...";


    setTimeout(() => {
        output.innerText = text;
    }, delay);
}

btn.addEventListener("click", displayMessage);

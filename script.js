const btn = document.getElementById("btn");
const output = document.getElementById("output");

function delayFunction(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayMessage() {
    const text = document.getElementById("text").value;
    const delay = parseInt(document.getElementById("delay").value, 10);
    
    if (!text || isNaN(delay) || delay < 0) {
        output.innerText = "Please enter valid text and delay.";
        return;
    }

    output.innerText = ""; // Ensure Cypress finds it empty

    await delayFunction(delay);  // Now truly waits

    output.innerText = text;
}

btn.addEventListener("click", displayMessage);

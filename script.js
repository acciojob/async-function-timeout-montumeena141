document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    displayMessage();
});

async function displayMessage() {
    const text = document.getElementById("text").value.trim();
    const delay = parseInt(document.getElementById("delay").value, 10);
    const output = document.getElementById("output");

    // Validation
    if (!text || isNaN(delay) || delay < 0) {
        output.innerText = "Please enter valid text and delay.";
        return;
    }

    output.innerText = "Waiting...";

    // Simulating delay with Promise
    await new Promise(resolve => setTimeout(resolve, delay));

    output.innerText = text;
}

document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh
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

    output.innerHTML = ""; // Ensure the output div is empty before test starts

    // Use a span to make Cypress recognize changes easily
    const span = document.createElement("span");
    span.innerText = "Waiting...";
    output.appendChild(span);

    await new Promise(resolve => setTimeout(resolve, delay));

    span.innerText = text; // Update after delay
}

//your JS code here. If required.
async function displayMessage(text, delay) {
    await new Promise(resolve => setTimeout(resolve, delay));
    document.getElementById('output').innerText = text;
}

// Add event listener to the button
document.getElementById('btn').addEventListener('click', async function() {
    let text = document.getElementById('text').value;
    let delay = document.getElementById('delay').value;
    await displayMessage(text, delay);
});
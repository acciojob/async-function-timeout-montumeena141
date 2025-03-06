//your JS code here. If required.

let output=document.getElementById("output");
let text=document.getElementById("text");
let delay=document.getElementById("delay");

document.getElementById("btn").addEventListener("click",async()=>{
	let p=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(); //output.innerText=text;
		},delay.value)
	})
	let res=await p;
	output.innerText=text.value;
})


// async function displayMessage(text, delay) {
//     await new Promise(resolve => setTimeout(resolve, delay));
//     document.getElementById('output').innerText = text;
// }

// // Add event listener to the button
// document.getElementById('btn').addEventListener('click', async function() {
//     let text = document.getElementById('text').value;
//     let delay = document.getElementById('delay').value;
//     await displayMessage(text, delay);
// });
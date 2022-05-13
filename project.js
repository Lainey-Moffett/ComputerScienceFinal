let btn = document.getElementById('btn')
btn.onclick = function (){
    alert("Hello! Let's see if you would be a good pet owner by going through a scenario!")
    alert("First, let's get your name and your pet information...")
    let playerName = prompt("What is your name?")
    let petType = prompt("What kind of pet would you like? -example, dog or cat-")
    let petName = prompt("What would you like to name your " + petType +"?")
    alert("Ok, " + playerName +", let's see if you'd be a good pet parent to " + petName +".")
    window.location.href = "page2.html";
}
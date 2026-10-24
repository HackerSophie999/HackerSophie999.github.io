function restarts() {
    location.reload();
}

function makeStory() {
    let object = document.getElementById('object').value.trim();
    let person = document.getElementById('person').value.trim();
    let place = document.getElementById('place').value.trim();
    let person2 = document.getElementById('person2').value.trim();
    let action = document.getElementById('action').value.trim();

    if (object === "" || person === "" || place === "" || person2 === "") {
        console.log("Complete field")
        return;
    }

    document.body.innerHTML = "";
    const story = document.createElement("h1");
    const restart = document.createElement("button");
    story.className = "story";
    story.textContent = person + " was walking down the road when he saw a " + object + ". " + person + " picked it up and brought it to the nearby " + place + ". But then " + person2 + " stole it from " + person + ". " + person + " was really angry so " + person + " " + action + ".";
    restart.textContent = "Restart";
    restart.className = "restart";
    restart.onclick = restarts;    

    document.body.appendChild(story);
    document.body.appendChild(restart);
}

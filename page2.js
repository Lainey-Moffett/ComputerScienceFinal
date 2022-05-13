
let btn2 = document.getElementById('btn2')
btn2.onclick = function(){

class Path {
    #firstDecision;
    #secondDecision;
    #outcome;
    #canPlay;
    constructor(firstDecision, secondDecision, canPlay) {
        this.#firstDecision = firstDecision;
        this.#secondDecision = secondDecision;
        this.#canPlay = canPlay;
    }

    getFirstDecision() {
        return this.#firstDecision;
    }

    getSecondDecision() {
        return this.#secondDecision;
    }

    getCanPlay(){
        return this.#canPlay;
    }

    getOutcome(){
        return this.#outcome;
    }

    printOutcome() {
        alert("Imagine you have a busy day ahead of you as you are about to leave the house, but your new pet needs to let some energy out.");
        alert("What would you do in this situation?")
        for (let i = 0; i < this.#outcome.length; i++) {
            let nextOutcome = this.#outcome[i];
            let nextDescription = nextOutcome.getSecondDecision();
            alert(i + ": " + nextDescription);
        }
    }

    setOutcome(outcome) {
        this.#outcome = outcome;
    }

}

class Handler {
    #currentPath;
    constructor(currentPath) {
        this.#currentPath = currentPath;
    }

    getCurrentPath(){
        return this.#currentPath;
    }

    printCurrentPath(){
        alert(this.#currentPath.getFirstDecision());
    }


    chooseOutcome() {
        this.#currentPath.printOutcome();
        let choice = prompt("Please type the number that best fits your decision in this situation!");
        let outcome = this.#currentPath.getOutcome();
        let newPosition = outcome[Number(choice)];
        this.#currentPath = newPosition;
    }
}

let start = new Path("Start Here!", "The starting spot", true);
let left = new Path("That wasn't the best decision.. You may not be the best pet parent, sorry!", "Do you 0, leave the house without taking your pet outside", false);
let right = new Path("Correct choice! You may be fit as a pet parent", "or do you 1, let your pet out?", true);
start.setOutcome([left, right]);
left.setOutcome([start]);
right.setOutcome([start]);

let player = new Handler(start);

let playing = true;

while(playing){
    player.printCurrentPath();
    player.chooseOutcome();
    let currentPosition = player.getCurrentPath();
    playing = currentPosition.getCanPlay();
}

player.printCurrentPath();


}


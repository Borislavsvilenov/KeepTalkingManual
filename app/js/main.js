const output = document.getElementById("output");

let morseMSG;

document.getElementById('prompt').addEventListener('input', function() {
    let inputValue = this.value;

    let brokenDown = inputValue.split(" ");

    let w1 = brokenDown[0];

    if(w1 == "wires") {
        let sNum, wires = wireInput(brokenDown);
    } else if(w1 == "morse") {
        morseMSG = "";
        for (let i = 1; i < brokenDown.length; i++) {
            morseMSG = morseMSG + " " + translateMorseCode(brokenDown[i]);
        }
        morseMSG = morseMSG.slice(1);
        output.textContent = getFrequency(morseMSG);
    } else {
        output.textContent = "No such task in Data Base";
    }
});




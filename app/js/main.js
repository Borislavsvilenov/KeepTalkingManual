const output = document.getElementById("output");

document.getElementById('prompt').addEventListener('input', function() {
    let inputValue = this.value;

    let brokenDown = inputValue.split(" ");

    let w1 = brokenDown[0];

    if(w1 == "wires") {
        let sNum, wires = wireInput(brokenDown);

        output.textContent = Wires(wires, sNum);
    } else if(w1 == "morse") {
        let morseMSG = "";
        for (let i = 1; i < brokenDown.length; i++) {
            morseMSG = morseMSG + " " + translateMorseCode(brokenDown[i]);
        }
        morseMSG = morseMSG.slice(1);
        output.textContent = getFrequency(morseMSG);
    } else if(w1 == "knob") {
        output.textContent = knob(brokenDown.splice(1).join(' '));

    } else if(w1 == "simon") {

        
    } else {
        output.textContent = "No such task in Data Base";
    }
});




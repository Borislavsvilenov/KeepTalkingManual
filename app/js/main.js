const output = document.getElementById("output");

document.getElementById('prompt').addEventListener('input', function() {
    let inputValue = this.value;

    let brokenDown = inputValue.split(" ");

    let w1 = brokenDown[0];

    if(w1 == "wires") {
        let back = wireInput(brokenDown);

        output.textContent = Wires(back[0], back[1]);

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
        let back = simonInput(brokenDown);

        output.textContent = SimonSays(back[0], back[1]);
    
    } else if(w1 == "button") {
        let back = buttonInput(brokenDown);

        output.textContent = TheButton(back[0], back[1], back[2], back[3]);

    } else if(w1 == "pass") {
        brokenDown.splice(0, 1);
        let letters = getLetters(brokenDown.join(' '));

        output.textContent = getPass(letters).join(' ');

    } else if(w1 == "sym") {
        let back = symInputs(brokenDown);

        output.textContent = decodeSymbols(back[0], back[1], back[2], back[3])
        
    } else if(w1 == "CWires") {
        let back = CWiresInput(brokenDown);

        output.textContent = CWires(back[0], back[1], back[2]);

    } else if(w1 == "memory") {
        let back = memoryInput(brokenDown);

        output.textContent = Memory(back[0], back[1], back[2], back[3], back[4]);

    } else {
        output.textContent = "No such task in Data Base";
    }
});




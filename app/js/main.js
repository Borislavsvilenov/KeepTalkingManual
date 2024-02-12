const output = document.getElementById("output");

document.getElementById('prompt').addEventListener('input', function() {
    let inputValue = this.value;

    let brokenDown = inputValue.split(" ");

    let w1 = brokenDown[0];

    if(w1 == "wires") {

    } else if(w1 == "morse") {
        let morseMSG = "";
        for (let i = 1; i < brokenDown.length; i++) {
            morseMSG = morseMSG + " " + translateMorseCode(brokenDown[i]);
        }
        output.textContent = morseMSG;
    } else {
        output.textContent = "No such task in Data Base";
    }
});




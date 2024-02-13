function Wires(colours){
    let BaWires = 0;
    let BuWires = 0;
    let ReWires = 0;
    let YeWires = 0;
    let WhWires = 0;

    for(let z = 0; z < colours.length; z++) {
        if(colours[z] == "black") {
            BaWires++
        } else if(colours[z] == "blue"){
            BuWires++
        } else if(colours[z] == "red"){
            ReWires++
        } else if(colours[z] == "yellow")
    }
}
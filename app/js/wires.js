function wireInput(msg) {
    msg.splice(0, 1);
    let serialNumber = msg[0];
    msg.splice(0, 1);
    let colours = msg;

    if (serialNumber == "e") {
        serialNumber = true;
    } else if (serialNumber == "o") {
        serialNumber = false;
    }

    return [serialNumber, colours];
}

function Wires(serialNumber, colours){
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
        } else if(colours[z] == "yellow"){
            YeWires++
        } else if(colours[z] ==  "white"){
            WhWires++
        }
    }

    if(colours.length == 3){
        if(ReWires == 0)
        {
            return "cut second wire"
        } 
        else if(colours[2] == "white") 
        {
            return "cut last wire"
        }
        else if(BuWires > 1)
        {
            return "cut last blue wire"
        }
        else
        {
            return "cut last wire"
        }
    }
    else if(colours.length == 4)
    {
        if(!serialNumber && ReWires > 1)
        {
            return "cut last red wire"
        }
        else if(ReWires == 0 && colours[3] == "yellow")
        {
            return "cut first wire"
        }
        else if(BuWires == 1)
        {
            return "cut first wire"
        }
        else if (YeWires > 1)
        {
            return "cut last wire"
        }
        else
        {
            return "cut second wire"
        }
    }
    else if(colours.length == 5)
    {
        if(!serialNumber && colours[4] == "black")
        {
            return "cut fourth wire"
        }
        else if(ReWires == 1 && YeWires > 1)
        {
            return "cut first wire"
        }
        else if(BaWires == 0)
        {
            return "cut second wire"
        }
        else
        {
            return "cut first wire"
        }
    }
    else if(colours.length == 6)
    {
        if(!serialNumber && YeWires == 0)
        {
            return "cut third wire"
        }
        else if(YeWires == 1 && WhWires > 1)
        {
            return "cut fourth wire"
        }
        else if(ReWires == 0)
        {
            return "cut last wire"
        }
        else
        {
            return "cut fourth wire"
        }
    }
}
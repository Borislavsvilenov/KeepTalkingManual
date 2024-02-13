function simonInput(msg) {
    msg.splice(0, 1);
    let serialNumber = msg[0];
    msg.splice(0, 1);
    let colours = msg;

    if (serialNumber == "v") {
        serialNumber = true;
    } else if (serialNumber == "n") {
        serialNumber = false;
    }

    return [serialNumber, colours];
}


function SimonSays(serial, colours)
{   
    let output = [];

    for(let o = 0; o < colours.length; o++) {
        if(serial)
        {
            if(colours[o] == "r")
            {
                output.push("blue")
            }
            else if(colours[o] == "b")
            {
                output.push("red")
            }
            else if(colours[o] == "g")
            {
                output.push("yellow")
            }
            else if(colours[o] == "y")
            {
                output.push("green")
            }
        }
        else if(!serial)
        {
            if(colours[o] == "r")
            {
                output.push("blue")
            }
            else if(colours[o] == "b")
            {
                output.push("red")
            }
            else if(colours[o] == "g")
            {
                output.push("yellow")
            }
            else if(colours[o] == "y")
            {
                output.push("green")
            }
        }
    }
return output;
}
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


function SimonSays(serial, colour)
{
let output = []

    if(serial)
    {
        if(colour == "r")
        {
            output.push("blue")
        }
        else if(colour == "b")
        {
            output.push("red")
        }
        else if(colour == "g")
        {
            output.push("yellow")
        }
        else if(colour == "y")
        {
            output.push("green")
        }
    }
    else if(!serial)
    {
        if(colour == "r")
        {
            output.push("blue")
        }
        else if(colour == "b")
        {
            output.push("yellow")
        }
        else if(colour == "g")
        {
            output.push("green")
        }
        else if(colour == "y")
        {
            output.push("yellow")
        }
    }
return output;
}
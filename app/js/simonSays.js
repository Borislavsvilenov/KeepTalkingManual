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

    return serialNumber, colours;
}


function SimonSays(serial, colour)
{
    if(serial)
    {
        if(colour == "r")
        {
            return "blue"
        }
        else if(colour == "b")
        {
            return "red"
        }
        else if(colour == "g")
        {
            return "yellow"
        }
        else if(colour == "y")
        {
            return "green"
        }
    }
    else if(!serial)
    {
        if(colour == "r")
        {
            return "blue"
        }
        else if(colour == "b")
        {
            return "yellow"
        }
        else if(colour == "g")
        {
            return "green"
        }
        else if(colour == "y")
        {
            return "red"
        }
    }
}
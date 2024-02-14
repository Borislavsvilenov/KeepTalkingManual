function buttonInput(msg) {
    msg.splice(0, 1);
    let label;
    let colour;
    let batteries;
    let indicator;

    label = msg[0];
    colour = msg[1];
    batteries = msg[2];
    indicator = msg[3];

    return [label, colour, batteries, indicator];
}


function TheButton(label, colour , batteries, indicator)
{
    if(colour == "blue" && label == "abort")
    {
        return "Hold Button, if blue 4, if yellow 5, else 1"
    }
    else if(batteries > 1 && label == "detonate") {
        return "Immediately press and release"
    }
    else if(colour == 'white' && indicator == "CAR")
    {
        return "Hold Button, if blue 4, if yellow 5, else 1"
    }
    else if(batteries > 2 && indicator == "FRK")
    {
        return "Press and immediately release"
    }
    else if(colour == "yellow")
    {
        return "Hold Button, if blue 4, if yellow 5, else 1"
    }
    else if(colour == "red" && label == "hold")
    {
        return "Press and immediately release"
    }
    else
    {
        return "Hold Button, if blue 4, if yellow 5, else 1"
    }
}
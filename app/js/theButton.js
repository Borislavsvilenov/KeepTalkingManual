function TheButton(label, colour, batteries, indicator)
{
    if(colour == "blue" && label == "abort")
    {
        return "Hold Button"
    }
    else if(batteries > 1 &&label == "detonate") {
        return "Immediately press and release"
    }
    else if(colour == white && indicator == "CAR")
    {
        return "Hold Button"
    }
    else if(batteries > 2 && indicator == "FRK")
    {
        return "Press and immediately release"
    }
    else if(colour == "yellow")
    {
        return "Hold Button"
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
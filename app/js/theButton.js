function TheButton(label, colour, batteries, indicator, litColour)
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
        return "Hold Button"
    }

    if(litColour == "blue")
    {
        return "Release when 4 in any position"
    }
    else if(litColour == "white")
    {
        return "Release when 1 in any position"
    }
    else if(litColour == "yellow")
    {
        return "Release when 5 in any position"
    }
    else
    {
        return "Release when 1 in any position"
    }
}
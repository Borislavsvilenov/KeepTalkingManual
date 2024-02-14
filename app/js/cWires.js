function CWiresInput(msg) {
    msg.splice(0, 1);
    let colour;
    let star;
    let light;

    colour = msg[0];
    star = msg[1];
    light = msg[2];

    return [colour, star, light];
}


function CWires(colour, star, led)
{
    if(colour == "b")
    {
        if(led && star)
        {
            return "Cut if parallel port"
        }
        else if(led)
        {
            return "Cut if parallel port"
        }
        else if(star)
        {
            return "Do not cut"
        }
        else
        {
            return "Cut if last digit is even"
        }
    }
    else if(colour == "r")
    {
        if(led && star)
        {
            return "Cut if 2 or more batteries"
        }
        else if(led)
        {
            return "Cut if the bomb has 2 or more batteries"
        }
        else if(star)
        {
            return "Cut the wire"
        }
        else
        {
            return "Cut if last digit is even"
        }
    }
    else if(colour == "rb")
    {
        if(led && star)
        {
            return "Do not cut"
        }
        else if(led)
        {
            return "Cut if last digit is even"
        }
        else if(star)
        {
            return "Cut if parallel port"
        }
        else
        {
            return "Cut if last digit is even"
        }
    }
    else if(colour == "w")
    {
        if(led && star)
        {
            return "Cut if 2 or more batteries"
        }
        else if(led)
        {
            return "Do not cut"
        }
        else if(star)
        {
            return "Cut the wire"
        }
        else
        {
            return "Cut the wire"
        }
    }
}
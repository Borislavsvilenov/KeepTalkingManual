function memoryInput(msg) {
    msg.splice(0, 1);

    let n1 = msg[0];
    let n2 = msg[1];
    let n3 = msg[2];
    let n4 = msg[3];
    let n5 = msg[4];

    return [n1, n2, n3, n4, n5];
}


function Memory(number1, number2, number3, number4, number5)
{
    if(number5 == 1)
    {
        return "Press " + number1
    }
    else if(number5 == 2)
    {
        return "Press " + number2
    }
    else if(number5 == 3)
    {
        return "Press " + number4
    }
    else if(number5 == 4)
    {
        return "Press " + number3
    }
    else if(number4 == 1)
    {
        return "Press the same position from stage 1"
    }
    else if(number4 == 2)
    {
        return "Press first position"
    }
    else if(number4 == 3 || number4 == 4)
    {
        return "Press the same position from stage 2"
    }
    else if(number3 == 1)
    {
        return "Press " + number2
    }
    else if(number3 == 2)
    {
        return "Press " + number1
    }
    else if(number3 == 3)
    {
        return "Press the button in the third position"
    }
    else if(number3 == 4)
    {
        return "Press the number labeled 4"
    }
    else if(number2 == 1)
    {
        return "Press the number labeled 4"
    }
    else if(number2 == 2)
    {
        return "Press the number in the same position in stage 1"
    }
    else if(number2 == 3)
    {
        return "Press the number in the third position"
    }
    else if(number2 == 4)
    {
        return "Press the number in the same position in stage 1"
    }
    else if(number1 == 1 || number1 == 2)
    {
        return "Press the button in the second position"
    }
    else if(number1 == 3)
    {
        return "Press the button in the third position"
    }
    else if(number1 == 4)
    {
        return "Press the button in the fourth position"
    }
}
const knobsPossibles = {
    'n l n l l l': "up", 'l n n l l l': "up",
    'n l l l l l': "down", "l n n l l n": "down",
    'n l n n n n': "left", "n n n n n n": "left",
    'l l n l l l': "right"
};

function knob(ligths)
{
    return knobsPossibles[ligths];
}
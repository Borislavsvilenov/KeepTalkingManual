const order = [['ol', 'at', 'lamda', 'n', 'SS', 'nl', 'Cdot'],
               ['eU', 'ol', 'Cdot', 'sq', 'estar', 'nl', '?'],
               ['Ccir', 'ear', 'sq', 'XI', '3', 'lamda', 'estar'],
               ['6', 'p', 'b', 'SS', 'XI', '?', 'smile'],
               ['psi', 'smile', 'b', 'Cdot', 'p', 'snek', 'fstar'],
               ['6', 'eU', 'stich', 'ae', 'psi', 'hU', 'omega']];


function symInputs(msg) {
    msg.splice(0, 1);

    let sym1 = msg[0];
    let sym2 = msg[1];
    let sym3 = msg[2];
    let sym4 = msg[3];

    return [sym1, sym2, sym3, sym4];
}

function decodeSymbols(sym1, sym2, sym3, sym4) {
    for(let s = 0; s < order.length; s++) {
        if(order[s].includes(sym1) && order[s].includes(sym2) && order[s].includes(sym3) && order[s].includes(sym4)) {
            let i1 = order[s].indexOf(sym1);
            let i2 = order[s].indexOf(sym2);
            let i3 = order[s].indexOf(sym3);
            let i4 = order[s].indexOf(sym4);

            let indecies = [i1, i2, i3, i4];
            let sortedSym = [];

            indecies.sort((a, b) => a - b)

            for(let i = 0; i < indecies.length; i++) {
                sortedSym[i] = order[s][indecies[i]];
            }
            return sortedSym;
        }
    }
}
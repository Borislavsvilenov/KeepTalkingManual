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
            
        }
    }
}
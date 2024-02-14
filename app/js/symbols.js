const order = [['ol', 'at', 'lamda', 'n', 'SS', 'nl', 'Cdot'],
               ['eU', 'ol', 'Cdot', 'sq', 'estar', 'nl', '?'],
               ['Ccir', 'ear', 'sq', 'XI', '3', 'lamda', 'estar'],
               []
];


function symInputs(msg) {
    msg.splice(0, 1);

    let sym1 = msg[0];
    let sym2 = msg[1];
    let sym3 = msg[2];
    let sym4 = msg[3];

    return [sym1, sym2, sym3, sym4];
}

function decodeSymbols(sym1, sym2, sym3, sym4) {
    
}
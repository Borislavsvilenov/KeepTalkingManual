const redSequence = {'1': 'cut if C', '2': 'cut if B', '3': "cut if A", "4": "cut if A or C",
'5': "cut if B", '6': 'cut if A or C', '7': 'cut if A, B or C', '8': 'cut if A or B', '9': "cut if B"}

const blueSequence = {'1': 'cut if B', '2': "cut if A or C", '3': 'cut if B', '4': 'cut if A', '5': 'cut if B',
'6': 'cut if B or C', '7': 'cut if C', '8': 'cut if A or C', '9': 'cut if A'}

const blackSequence = {'1': 'cut if A, B or C', '2': 'cut if A or C', '3': 'cut if B', '4': 'cut if A or C',
'5': 'cut if B', '6': 'cut if B  or C', "7": 'cut if A or B', '8': 'cut if C', '9': 'cut if C'}

function sequence(wires) {

  wires.splice(0, 1);

  let reds = 0;
  let blues = 0;
  let blacks = 0;

  let current = wires[wires.length - 1];

  for(let w = 0; w < wires.length; w++) {
    if(wires[w] == 'red') {
      reds++;
    } else if(wires[w] == 'blue') {
      blues++;
    } else if(wires[w] == 'black') {
      blacks++;
    } 
  }

  if(current == 'red') {
    return redSequence[reds.toString()];
  } else if(current == 'blue') {
    return blueSequence[blues.toString()];
  } else if(current == 'black') {
    return blackSequence[blacks.toString()];
  }
}





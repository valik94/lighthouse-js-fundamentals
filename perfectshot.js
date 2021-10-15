const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];  
let y = 0;
let x = 0;
let pos = [x,y];
const finalPosition = function (moves) {
  for (const move in moves){
    if (move === 'north'){
      y = y + 1;
    }
    if (move === 'west'){
      x = x + 1;
    }
    if (move === 'east'){
      x = x - 1;
    }
    if (move === 'south'){
      y = y - 1;
    }
    return pos[x,y];
  }
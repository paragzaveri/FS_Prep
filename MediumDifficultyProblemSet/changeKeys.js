function changeKeys(keysToChange, steps) {
  var keys = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']; 
  var adjustedKeys = [];
  for (var i = 0; i < keysToChange.length; i++){
  	adjustedKeys.push(keys[(keys.indexOf(keysToChange[i]) + steps) % keys.length]);
  }
  return adjustedKeys;

}


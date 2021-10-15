let stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 10, 'community centre']
]

stations = [
  ['A', 10, 'school'],
  ['B', 9, 'restaurant'],
  ['C', 21, 'community centre'],
  ['D', 15, 'school'],
  ['E', 50, 'restaurant'],
  ['F', 20, 'school'],
  ['G', 40, 'community centre'],
  ['H', 50, 'school'],
]

const chooseStations = function (stations) {
  const pollingStations = [];
  for (let station of stations) {
    //console.log(station);
    let capacity = station[1];
    if (capacity >= 20) {
      //console.log(station[0]);
      let type = station[2];
      if (type === "school" || type "community centre") {
      //console.log(station[0]);
        pollingStations.push(station[0])
      }
    }
  }
  return pollingStations;
  
}

console.log(chooseStations(stations));
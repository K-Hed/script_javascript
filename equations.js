let residentialData = [ { nApartments: 300 },
                         { nFloors: 20 },
                         { nBasements: 2 } ];
function residential(nApartments, nFloors, nBasements) {
  var avgDoorsPerFloor = 0;
  var nStories = 0;
  var nElevatorColumns = 1;
  var nElevatorShafts = 0;
  var addToElevatorShafts = 0;
  var addToElevatorShaftsAccordingToNStories = 0;

  nStories = nFloors + nBasements;
  avgDoorsPerFloor = nApartments / nFloors;

  addToElevatorShafts = avgDoorsPerFloor / 6; // ceil

  nElevatorColumns = nStories / 20;

  nElevatorShafts += addToElevatorShafts;

  if (nStories > 20) {
    addToElevatorShaftsAccordingToNStories =
      (nStories - 20) / 20;
    // ceil
    nElevatorColumns +=
      addToElevatorShaftsAccordingToNStories;
    nElevatorShafts += Math.floor(nElevatorColumns) / 2;
  }
  if (nApartments == 0 ||
      nFloors == 0 ||
      nBasements == 0) {
    return 1;
  }
  console.log("columns = " + Math.floor(nElevatorColumns));
  return Math.ceil(nElevatorShafts); // ceil only at the end?
}

let corpoHybridData = [  { nTenantOrBusinesses: "" },
                         { nFloors: "" },
                         { nBasements: "" },
                         { nParkingSpaces: "" },
                         { nMaxOccupants: "" } ];

function corpoHybrid(nFloors, nBasements, nMaxOccupants) {

  var nStories = nFloors + nBasements;
  var nTotalOccupants = nMaxOccupants * nStories;
  var nElevators = Math.ceil(nTotalOccupants / 1000);
  var nElevatorColumns = Math.ceil(nStories / 20); 
  var nElevatorsPerColumn = nElevators / nElevatorColumns;
  var nTotalElevators = nElevatorsPerColumn *
                        nElevatorColumns;
  if (nFloors == 0 ||
    isNaN(nBasements) ||
    nMaxOccupants == 0) {
    return 1;
  }
  console.log("nElevatorColumns = " + nElevatorColumns);
  return Math.ceil(nTotalElevators);
  // ceil only at the end?
}

function commercial(nCages) {
  return nCages;
}

var nElevatorsResidential = residential(300, 20, 2);
console.log("nElevatorsResidential = " +
              nElevatorsResidential);
var corpoOrHybrid = corpoHybrid(37, 3, 150);
console.log("corpoOrHybrid = " + corpoOrHybrid);
var anotherCorpo = corpoHybrid(89, 6, 240);
console.log("nElevatorsCorpo = " + anotherCorpo);
//ceil et floor a chaque etape ou seulement a la fin

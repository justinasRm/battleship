

function checkTheShip(playerBoard,isShipGood){
    
// Should check if the ships are going the way they should - check if they are the length that they are supposed to be and check if they aren't going both horizontally and vertically

if(playerBoard.length==3){ // only start checking from 3rd ship - first and second ships will always be good
    if(
        ( (playerBoard[2].Coordinates.startCords[0]==playerBoard[2].Coordinates.endCords[0]) &&
        ((Math.abs(playerBoard[2].Coordinates.startCords[1]-playerBoard[2].Coordinates.endCords[1]))+1 == 2 ) ) ||
        ( (playerBoard[2].Coordinates.startCords[1]==playerBoard[2].Coordinates.endCords[1]) &&
        ((Math.abs(playerBoard[2].Coordinates.startCords[0]-playerBoard[2].Coordinates.endCords[0]))+1 == 2 ) ) ){
            isShipGood=true;
    } else {
        isShipGood=false;
    }

    // also check if current ship overlaps with any of gameBoard array tiles(did this with computer ship selection - copy paste from there and edit to fit here)

}
if(playerBoard.length==4){
    if(
        ( (playerBoard[3].Coordinates.startCords[0]==playerBoard[3].Coordinates.endCords[0]) &&
        ((Math.abs(playerBoard[3].Coordinates.startCords[1]-playerBoard[3].Coordinates.endCords[1]))+1 == 2 ) ) ||
        ( (playerBoard[3].Coordinates.startCords[1]==playerBoard[3].Coordinates.endCords[1]) &&
        ((Math.abs(playerBoard[3].Coordinates.startCords[0]-playerBoard[3].Coordinates.endCords[0]))+1 == 2 ) ) ){
            isShipGood=true;
    } else {
        isShipGood=false;
    }
}
if(playerBoard.length==5){
    if(
        ( (playerBoard[4].Coordinates.startCords[0]==playerBoard[4].Coordinates.endCords[0]) &&
        ((Math.abs(playerBoard[4].Coordinates.startCords[1]-playerBoard[4].Coordinates.endCords[1]))+1 == 3 ) ) ||
        ( (playerBoard[4].Coordinates.startCords[1]==playerBoard[4].Coordinates.endCords[1]) &&
        ((Math.abs(playerBoard[4].Coordinates.startCords[0]-playerBoard[4].Coordinates.endCords[0]))+1 == 3 ) ) ){
            isShipGood=true;
    } else {
        isShipGood=false;
    }
}
if(playerBoard.length==6){
    if(
        ( (playerBoard[5].Coordinates.startCords[0]==playerBoard[5].Coordinates.endCords[0]) &&
        ((Math.abs(playerBoard[5].Coordinates.startCords[1]-playerBoard[5].Coordinates.endCords[1]))+1 == 4 ) ) ||
        ( (playerBoard[5].Coordinates.startCords[1]==playerBoard[5].Coordinates.endCords[1]) &&
        ((Math.abs(playerBoard[5].Coordinates.startCords[0]-playerBoard[5].Coordinates.endCords[0]))+1 == 4 ) ) ){
            isShipGood=true;
    } else {
        isShipGood=false;
    }
}
if(playerBoard.length==7){
    if(
        ( (playerBoard[6].Coordinates.startCords[0]==playerBoard[6].Coordinates.endCords[0]) &&
        ((Math.abs(playerBoard[6].Coordinates.startCords[1]-playerBoard[6].Coordinates.endCords[1]))+1 == 5 ) ) ||
        ( (playerBoard[6].Coordinates.startCords[1]==playerBoard[6].Coordinates.endCords[1]) &&
        ((Math.abs(playerBoard[6].Coordinates.startCords[0]-playerBoard[6].Coordinates.endCords[0]))+1 == 5 ) ) ){
            isShipGood=true;
    } else {
        isShipGood=false;
    }
}


return isShipGood;

}

module.exports=checkTheShip;


function checkTheShip(playerBoard,isShipGood,GameBoard){
    
// Should check if the ships are going the way they should - check if they are the length that they are supposed to be and check if they aren't going both horizontally and vertically

// Could have done this with a loop - note to self.

if(playerBoard.length==3){
    if(
        ( (playerBoard[2].Coordinates.startCords[0]==playerBoard[2].Coordinates.endCords[0]) &&
        ((Math.abs(playerBoard[2].Coordinates.startCords[1]-playerBoard[2].Coordinates.endCords[1]))+1 == 2 ) ) ||
        ( (playerBoard[2].Coordinates.startCords[1]==playerBoard[2].Coordinates.endCords[1]) &&
        ((Math.abs(playerBoard[2].Coordinates.startCords[0]-playerBoard[2].Coordinates.endCords[0]))+1 == 2 ) ) ){
            isShipGood=true;
    } else {
        isShipGood=false;
    }
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


// check if there are any 2 exact tiles in GameBoard array - it means ships are overlapping
for(let i=0;i<GameBoard.length;i++){
    for(let j=0;j<GameBoard.length;j++){
        if(GameBoard[i][0]==GameBoard[j][0] && GameBoard[i][1]==GameBoard[j][1] && i!=j){
            return isShipGood=false;
        }
    }
}



return isShipGood;

}

module.exports=checkTheShip;
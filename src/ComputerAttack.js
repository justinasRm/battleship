const FinishGame = require("./FinishGame");



let attackedTiles=[];
let hitCoordinates=0;

function ComputerAttack(gameBoard,playerBoard,body){

    // basically this is just easy mode - the bot selects tiles randomly, doesnt matter if he hits a ship
    let succesfulAttack=false;

    loop1:
    while(succesfulAttack==false){
    //first i choose a random tile out of the 36 tiles
    let randomTileX=Math.round(Math.random()*5+1);
    let randomTileY=Math.round(Math.random()*5+1);
    let randomCoord=[randomTileX,randomTileY];

    let loopChecker;

    if(attackedTiles.length==0){
        attackedTiles.push(randomCoord);
    }
    else{
        attackedTiles.forEach((element,index)=>{
            if(element[0]==randomCoord[0] && element[1]==randomCoord[1])loopChecker=true;
            else if(index==attackedTiles.length-1 && loopChecker!=true)attackedTiles.push(randomCoord);
        })
    }
    if(loopChecker==true){
        continue loop1;
    }

    const tiles=document.querySelectorAll(`[data-coordinates="${randomCoord[0]}${randomCoord[1]}"`); // 2 tiles of the given coordinates - on player and computer sides
    tiles.forEach(element=>{
        if(element.classList.contains('player-side-box'))element.style.background='dimgray'; // get the one on player side
    })
    playerBoard.forEach(ship=>{
        ship.AllCoordinates().forEach(shipCoord=>{
            if(shipCoord[0]==randomCoord[0] && shipCoord[1]==randomCoord[1]){
                hitCoordinates++;
            }
        })
    })

    if(hitCoordinates==18){
        FinishGame('computer',body);
    }
    succesfulAttack=true;
}

}
module.exports=ComputerAttack; 
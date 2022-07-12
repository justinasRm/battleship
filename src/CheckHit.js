const ComputerAttack = require('./ComputerAttack');
const shipConstructor = require('./shipCreation');
const FinishGame = require("./FinishGame");

let hitCoordinates=0;

function CheckHit(ClickedTileCoords,BotPlayerBoard,BotGameBoard,gameBoard,playerBoard,body){
    for(let x=0;x<BotPlayerBoard.length;x++){ // goes through all 18 PC side tiles
        if(BotPlayerBoard[x][0]==ClickedTileCoords[0] && BotPlayerBoard[x][1]==ClickedTileCoords[1]){
            // finds the tile from BotPlayerBoard that was clicked

            const boxes=document.querySelectorAll(`.computer-side-box`); 
            for(let index=0;index<boxes.length;index++){
                // when the array element is found, go through all the PC side tiles

                if(boxes[index].dataset.coordinates == ClickedTileCoords){
                    // find the passed in clicked tile coordinates from all of the tiles and change the color
                    hitCoordinates++;
                boxes[index].style.background='rgb(180, 236, 255)';
               

                FindHitShip(ClickedTileCoords,BotGameBoard);
                };
            }
        }
    }
    ComputerAttack(gameBoard,playerBoard,body);
   
}

function FindHitShip(ClickedTileCoords,BotGameBoard){
    // finds the ship that was clicked and checks if all of the ship tiles have been clicked(if ship is sunk)

    const array=Object.entries(BotGameBoard); // 7 array elements
    array.forEach((x,index) => { // go through all of the PC ships
        array[index][1].AllCoordinates().forEach(element=>{ // go through each ships all coordinates
            if(element[0]==ClickedTileCoords[0]&&element[1]==ClickedTileCoords[1]){
                // check if the clicked coordinates and any ship coordinates are the same
                BotGameBoard[`${array[index][0]}`].hitPosition.push([element[0],element[1]]); // push in the hit position to that ship
            }
            if(BotGameBoard[`${array[index][0]}`].hitPosition.length==BotGameBoard[`${array[index][0]}`].AllCoordinates().length){
                // if ships hitPosition and AllCoordinates arrays length is the same, ship is sunk
                BotGameBoard[`${array[index][0]}`].AllCoordinates().forEach(element=>{
                    // find the tile ine the game with corresponding data-coordinates attribute
                    document.querySelectorAll(`[data-coordinates="${element[0]}${element[1]}"]`).forEach(tile=>{
                        // 2 tiles with the same attribute - select the one on computer side
                        if(tile.classList.contains('computer-side-box')){
                            tile.style.background='blue';
                        }
                    })
                });
            }
        });
        
    });
    
    if(hitCoordinates==18){
        setTimeout(() => {
            FinishGame('player',body);
        }, 200);
        
    }
}
module.exports=CheckHit;
const shipConstructor=require('./shipCreation.js');
const GameBoardArrayUpdate=require('./GameBoardArray.js');
let i=0; // TESTING PURPOSES
let tile=0; // tile of the current length ship(if ships length is 3, tile 0 means its the first tile of the ship, tile 1 - second tile, tile 2 - third tile)
let startCords=0;
function playerChooseShips(coordinates,GameBoard,playerBoard){

    while(i<coordinates.length){
        

    if(playerBoard.length<7){ // max tiles that can be occupied by the player

        // current clicked boxes coords
        let X = parseInt(coordinates[i][0]);
        let Y = parseInt(coordinates[i][1]);
        let coords=[X,Y];

        if(playerBoard.length==0 || playerBoard.length==1){ // works if first or second ship is beeing created(both are 1 length)
            const ship = shipConstructor({coords,coords},[],false)
            playerBoard.push(ship);
            GameBoardArrayUpdate(GameBoard,coords,coords);
        }
        if(playerBoard.length==2 || playerBoard.length==3){ // works if first or second ship is beeing created(both are 1 length)
            if(tile==0){ // check if it is the first tile of the ship
                startCords=coords;
                tile=1;
            } else if(tile==1){
                tile=0;
                const ship = shipConstructor({startCords,coords},[],false)
                playerBoard.push(ship);
                GameBoardArrayUpdate(GameBoard,startCords,coords);
            }
        }
        if(playerBoard.length==4){
            if(tile==0){
                startCords=coords;
                tile++;
            } else if(tile==1){
                tile++;
            } else if(tile==2){
                tile=0;
                const ship = shipConstructor({startCords,coords},[],false)
                playerBoard.push(ship);
                GameBoardArrayUpdate(GameBoard,startCords,coords);
            }
        }
    
        
        if(playerBoard.length==7){
            console.log('All ships have been placed');
        }
 
    }

    i++;
    return GameBoard;
    }
    // return gameb;
};

module.exports=playerChooseShips;



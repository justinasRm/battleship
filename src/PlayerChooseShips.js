const shipConstructor=require('./shipCreation.js');
const GameBoardArrayUpdate=require('./GameBoardArray.js');
const UIplayerChooseShipsResponse=require('./UIplayerChooseShipsResponse.js');



let tile=0; // 0 - startCoords, 1 - endCoords
let startCords;
function playerChooseShips(coordinates,GameBoard,playerBoard){

    if(playerBoard.length<7){ // max ships that can be occupied by the player

        // current clicked boxes coords
        let X = parseInt(coordinates[0]);
        let Y = parseInt(coordinates[1]);
        let coords=[X,Y];

        if(playerBoard.length==0 || playerBoard.length==1){ // works if first or second ship is beeing created(both are 1 length)
            startCords=coords;
            endCords=coords;
            playerBoard.push(new shipConstructor({startCords,endCords},[],false));
            GameBoardArrayUpdate(GameBoard,coords,coords);
            UIplayerChooseShipsResponse(playerBoard);
            return;
        }
        if(playerBoard.length==2 || playerBoard.length==3){ // works if third or fourth ship is beeing created(both are 2 length)
            if(tile==0){ // check if it is the startCoords of the ship

                startCords=coords;
                tile++;
               
                return;

            } else if(tile==1){ // check if it is the endCoords of the ship

                tile=0;
                let endCords=coords;
                playerBoard.push(new shipConstructor({startCords,endCords},[],false));
                GameBoardArrayUpdate(GameBoard,startCords,endCords);
                UIplayerChooseShipsResponse(playerBoard);
                return;
            }
        }
        if(playerBoard.length==4){ // fifth ship(length 3)
            if(tile==0){
                startCords=coords;
                tile++;

                return;

            } else if(tile==1){

                tile=0;
                let endCords=coords;

                playerBoard.push(new shipConstructor({startCords,endCords},[],false));
                GameBoardArrayUpdate(GameBoard,startCords,endCords);
                UIplayerChooseShipsResponse(playerBoard);
                return;

            }
        }
        if(playerBoard.length==5){ // sixth ship(length 4)
            if(tile==0){
                startCords=coords;
                tile++;
                return;

            } else if(tile==1){
                tile=0;
                let endCords=coords;

                playerBoard.push(new shipConstructor({startCords,endCords},[],false));
                GameBoardArrayUpdate(GameBoard,startCords,endCords);
                UIplayerChooseShipsResponse(playerBoard);
                return;
            }
        }
        if(playerBoard.length==6){ // seventh ship(length 5)
            if(tile==0){
                startCords=coords;
                tile++;
                return;

            } else if(tile==1){
                tile=0;
                let endCords=coords;

                playerBoard.push(new shipConstructor({startCords,endCords},[],false));
                GameBoardArrayUpdate(GameBoard,startCords,endCords);
                UIplayerChooseShipsResponse(playerBoard);
                return;

            }
        }
    
        

 
    }

    if(playerBoard.length==7){
        return console.log('FULL BOARD');
        // do something with the UI when max ships have been placed
    }

    return playerBoard;
    }


module.exports=playerChooseShips;



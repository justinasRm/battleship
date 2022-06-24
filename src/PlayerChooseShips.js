const shipConstructor=require('./shipCreation.js');
const GameBoardArrayUpdate=require('./GameBoardArray.js');

let playerShips=[];
let GameBoard=[];
export default function playerChooseShips(coordinates){
    if(playerShips.length<18){ // max tiles that can be occupied by the player

        // current clicked boxes coords
        let X = parseInt(coordinates[1]);
        let Y = parseInt(coordinates[3]);
        let coords=[X,Y];

        if(playerShips.length==0 || playerShips.length==1){ // works if first or second ship is beeing created(both are 1 length)
            shipConstructor({coords,coords},[],false);
            GameBoardArrayUpdate(GameBoard,coords,coords);
        }
        if(playerShips.length==3){ // works if first or second ship is beeing created(both are 1 length)

            shipConstructor({coords,coords},[],false);

        }
    
        
        if(playerShips.length==18){
            console.log('All ships have been placed');
        }
    }
};




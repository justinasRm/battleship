const { ContextExclusionPlugin } = require('webpack');
const shipCreation=require('./shipCreation.js');
const shipConstructor=shipCreation.shipConstructor;

function ComputerChooseShips(a,startCords,GameBoard){


function RandomShipPosition(a,startCords,GameBoard){
    let shipCreated=false;
    loop1:
    while(shipCreated==false){
        // const GameBoard=[[2,1],[1,2],[2,2],[3,2],[4,2],[5,2],[6,2]];
            // Filled spots placeholder(places where a ship part exists) NEEDS ITS OWN MODULE
            //first i choose a random tile out of the 36 tiles
            // let randomTileX=Math.floor(Math.random()*5)+1;
            // let randomTileY=Math.floor(Math.random()*5)+1;
            // let startCords=[randomTileX,randomTileY];
            // let startCords=[5,5]; Testing purposes
            let endCords;
        let isRandomtileOccupied=false;




        if(isRandomtileOccupied==true){
            return  loop1; // If it is occupied, go back to the while loop and create new random startCords
            
        }

        //then i check if in any direction there are enough tiles(the (a) variable given to the function is the length). first check going down, then left, then up, then right(this isn't really random - you are more likely to find a ship at the bottom portion of the board, but it will do)
        // IF NOT: GO BACK TO THE WHILE LOOP
        function findEndCords(a,startCords,GameBoard){

            for(let tile = 0; tile < GameBoard.length; tile++){
                if((startCords[0]==GameBoard[tile][0]) && (startCords[1]==GameBoard[tile][1])){
                    return 'start coords occupied';
                }
            }
            function Down(){

                if((1<=startCords[1]+(a-1) && startCords[1]+(a-1)<=6)){// check if the board doesn't end where i want to place my endCords DOWN
                    // then check if the tiles between start and end cords are free and the end cords tile is free

                    if(GameBoard.length<1){

                        return [startCords[0],startCords[1]+(a-1)];
                        
                    }

                    for(let tile = 0; tile < GameBoard.length; tile++){
                        if(goingDown(tile,a)){

                            if(tile==GameBoard.length-1) return goingDown(tile,a);

                        } else {

                            return Left();
                        }
                    }

                } else {
                    return Left();
                }
            } 
            function Left(){
                if(1<=startCords[0]-(a-1) && startCords[0]-(a-1)<=6){ // Checking other endCords - going left

                    if(GameBoard.length<1){
                        return [startCords[0]-(a-1),startCords[1]];
                    }

                    for(let tile = 0; tile < GameBoard.length; tile++){
                        if(goingLeft(tile,a)){
                            if(tile==GameBoard.length-1) return goingLeft(tile,a);
                        } else {
                            return Up();
                        }
                    }
                } else {
                    return Up();
                }
            }
            function Up(){
                if(1<=startCords[1]-(a-1) && startCords[1]-(a-1)<=6){ // Checking other endCords - going up

                    if(GameBoard.length<1){
                        return [startCords[0],startCords[1]-(a-1)];
                    }
                    
                    for(let tile = 0; tile < GameBoard.length; tile++){
                        if(goingUp(tile,a)){
                            if(tile==GameBoard.length-1) return goingUp(tile,a);
                        } else {
                            return Right();
                        }
                    }
                } else {
                    return Right();
                }
            }
            function Right(){
                if(1<=startCords[0]+(a-1) && startCords[0]+(a-1)<=6){ // Checking other endCords - going right
                    
                    if(GameBoard.length<1){
                        return [startCords[0]+(a-1),startCords[1]];
                    }

                    for(let tile = 0; tile < GameBoard.length; tile++){
                        if(goingRight(tile,a)){
                            if(tile==GameBoard.length-1) return goingRight(tile,a);
                        } else {
                            return Occupied();
                        }
                    }
                } else {
                    return Occupied();
                }
            }
            function Occupied(){
                return 'no possibilities';
            }

            return Down();

        }


        function goingDown(tile,a){ // checking if end coords are occupied and if any tiles between start and end coords are occupied

            // if((startCords[1]+(a-1)==GameBoard[tile][1]) && (startCords[0]==GameBoard[tile][0])){
            //     return;
            // }
            // if((GameBoard[tile][1]>=startCords[1] && GameBoard[tile][1]<=startCords[1]+(a-1) && startCords[0]==GameBoard[tile][0])){
            //     return;
            // }
            // return endCords=[startCords[0],startCords[1]+(a-1)];

            if(((startCords[1]+(a-1)==GameBoard[tile][1]) && (startCords[0]==GameBoard[tile][0]))|| // TIKRAI GERAI
               (GameBoard[tile][1]>=startCords[1] && GameBoard[tile][1]<=startCords[1]+(a-1) && startCords[0]==GameBoard[tile][0]))
            {
                return;
            } else {
                return endCords=[startCords[0],startCords[1]+(a-1)];
            }
            
        }
        function goingLeft(tile,a){ // after going down and it not beeing viable, checking if going left is ok

            if(1<=startCords[0]-(a-1) && startCords[0]-(a-1)<=6){

                if(((startCords[0]-(a-1)==GameBoard[tile][0]) && (startCords[1]==GameBoard[tile][1]))||
                (startCords[0]>=GameBoard[tile][0] && GameBoard[tile][0]>=startCords[0]-(a-1) && startCords[1]==GameBoard[tile][1]))
                {
                    return;
                } else return endCords=[startCords[0]-(a-1),startCords[1]]; // if this if statement is true, it means that either the end coords are occupied or any coordinate inbetween start and end coords is occupied. Try to go up.
    
            }

        }

        function goingUp(tile,a){ // Try going up
            if(1<=startCords[1]-(a-1) && startCords[1]-(a-1)<=6){

                if(((startCords[1]-(a-1)==GameBoard[tile][1]) && (startCords[0]==GameBoard[tile][0]))||
                (startCords[1]>=GameBoard[tile][1] && GameBoard[tile][1]>=startCords[1]-(a-1)  && startCords[0]==GameBoard[tile][0]))
                {
                    return;
                } else return endCords=[startCords[0],startCords[1]-(a-1)];
                    
                
            }
          
        }
        function goingRight(tile,a){
            if(1<=startCords[0]+(a-1) && startCords[0]+(a-1)<=6){

                if(((startCords[0]+(a-1)==GameBoard[tile][0]) && (startCords[1]==GameBoard[tile][1]))||
                (startCords[0]>=GameBoard[tile][0] && GameBoard[tile][0]>=startCords[0]+(a-1) && startCords[1]==GameBoard[tile][1]))
                {
                    return;
                } else return endCords=[startCords[0]+(a-1),startCords[1]];
            }

        }
        
        return findEndCords(a,startCords,GameBoard);

        if(isRandomtileOccupied=true){
            continue loop1;
        } else {
            shipCreated=true;
            return findEndCords(a,startCords);
        }

        //then i assign the ship with its length to the tile - start tile will be the logic in the first comment of this function, end tile - third comment(also assign inbetween tiles to the gameboard).

    };
}; 

    // const length5ship=new shipConstructor();
    // const length4ship=new shipConstructor();
    // const length3ship=new shipConstructor();
    // const length2ship=new shipConstructor();
    // const anotherLength2ship=new shipConstructor();
    // const length1ship=new shipConstructor();
    // const anotherLength1ship=new shipConstructor();

    return RandomShipPosition(a,startCords,GameBoard);


};
module.exports=ComputerChooseShips;
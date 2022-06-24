const { ContextExclusionPlugin } = require('webpack');
const shipConstructor=require('./shipCreation.js');
const GameBoardArrayUpdate=require('./GameBoardArray.js');

function ComputerChooseShips(GameBoard){


function RandomShipPosition(a,GameBoard){
    let shipCreated=false;

    loop1:
    while(shipCreated==false){
        let endCords;
        //first i choose a random tile out of the 36 tiles
        let randomTileX=Math.floor(Math.random()*5)+1;
        let randomTileY=Math.floor(Math.random()*5)+1;
        startCords=[randomTileX,randomTileY];


        for(let tile = 0; tile < GameBoard.length; tile++){
            if((GameBoard[tile][0]==startCords[0] && GameBoard[tile][1]==startCords[1])){
                continue loop1;
            }
        }



        //then i check if in any direction there are enough tiles(the (a) variable given to the function is the length). first check going down, then left, then up, then right(this isn't really random - you are more likely to find a ship at the bottom portion of the board, but it will do)
        // IF NOT: GO BACK TO THE WHILE LOOP
        function findEndCords(a,startCords,GameBoard){

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
                return;
            }

            return Down();

        }

        function goingDown(tile,a){ // checking if end coords are occupied and if any tiles between start and end coords are occupied

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
                (startCords[0]<=GameBoard[tile][0] && GameBoard[tile][0]<=startCords[0]+(a-1) && startCords[1]==GameBoard[tile][1]))
                {
                    return;
                } else return endCords=[startCords[0]+(a-1),startCords[1]];
            }

        }
        
        if(!findEndCords(a,startCords,GameBoard)) continue loop1;
        else endCords = findEndCords(a,startCords,GameBoard);
        

        
        //then i assign the ship with its length to the tile - start tile will be the logic in the first comment of this function, end tile - third comment(also assign inbetween tiles to the gameboard).
        GameBoardArrayUpdate(GameBoard,startCords,endCords);
        shipCreated=true;
        return {startCords,endCords};
    };
    
};

    const length5ship=new shipConstructor(RandomShipPosition(5,GameBoard),[],false);
    const length4ship=new shipConstructor(RandomShipPosition(4,GameBoard),[],false);
    const length3ship=new shipConstructor(RandomShipPosition(3,GameBoard),[],false);
    const length2ship=new shipConstructor(RandomShipPosition(2,GameBoard),[],false);
    const anotherLength2ship=new shipConstructor(RandomShipPosition(2,GameBoard),[],false);
    const length1ship=new shipConstructor(RandomShipPosition(1,GameBoard),[],false);
    const anotherLength1ship=new shipConstructor(RandomShipPosition(1,GameBoard),[],false);

    // return {length5ship,length4ship,length3ship,length2ship,anotherLength2ship,length1ship,anotherLength1ship,GameBoard}; was for testing purposes
    // return an object with all ships start and end coords, ishit, sunk values

};
module.exports=ComputerChooseShips;
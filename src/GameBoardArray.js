function GameBoardArrayUpdate(GameBoardArray,startCords,endCords){
    let direction='';
    let howManyTiles=0;
    if(startCords[0]-endCords[0]==0 && startCords[1]-endCords[1]==0){ // start and end coordinates are the same
        GameBoardArray.push([startCords[0],startCords[1]]);
        return GameBoardArray;
    }
    else if(startCords[0]-endCords[0]==0){


        //the ship moves vertically
        howManyTiles = Math.abs(startCords[1]-endCords[1])+1;
        if(startCords[1]-endCords[1]<0){
            direction='down';
        }
        else if(startCords[1]-endCords[1]>0){

            direction='up';
        } else {
            return 'smth with direction is bad';
        }
    }
    else if(startCords[1]-endCords[1]==0){

        //the ship moves horizontally
        howManyTiles = Math.abs(startCords[0]-endCords[0])+1;
        if(startCords[0]-endCords[0]<0){
            direction='right';

        }
        else if(startCords[0]-endCords[0]>0){

            direction='left';
        } else {
            return 'smth with direction is bad';
        }
    }
    else {
        return 'smth is bad';
    }



    for(let i=0;i<howManyTiles;i++){
        if(direction=='down'){
            GameBoardArray.push([startCords[0],startCords[1]+i]);
        } else if(direction=='up'){
            GameBoardArray.push([startCords[0],startCords[1]-i]);
        } else if(direction=='right'){
            GameBoardArray.push([startCords[0]+i,startCords[1]]);
        } else if(direction=='left'){
            GameBoardArray.push([startCords[0]-i,startCords[1]]);
        } else {
            return 'smth with pushing into gameboardarray is bad';
        }

    }
    return GameBoardArray;
}
module.exports=GameBoardArrayUpdate;
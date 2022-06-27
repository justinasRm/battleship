
function UIplayerChooseShipsResponse(playerBoard){

    let smallerCoord;

playerBoard.forEach(ship => {
    if((ship.Coordinates.endCords[0] == ship.Coordinates.startCords[0])&&(ship.Coordinates.endCords[1] == ship.Coordinates.startCords[1])){ // if ship is only 1 tile
        let tile=document.querySelector(`[data-coordinates="${ship.Coordinates.startCords[0]}${ship.Coordinates.startCords[1]}"]`); // get that tile
        tile.classList.add('ship');

    } else if(ship.Coordinates.endCords[0] == ship.Coordinates.startCords[0]){ // Xs are equal - ship is going vertically

        let tileQuantity = Math.abs(ship.Coordinates.endCords[1]-ship.Coordinates.startCords[1])+1;
        if(ship.Coordinates.endCords[1]<ship.Coordinates.startCords[1]) { // get the smallest value of the 2 that are different(Ys in this case)
            smallerCoord=ship.Coordinates.endCords[1];
        } else smallerCoord=ship.Coordinates.startCords[1];

        for(let i=0; i<tileQuantity; i++){ // go through all of the tiles that a ship class needs to be added
             let tile=document.querySelector(`[data-coordinates="${ship.Coordinates.startCords[0]}${smallerCoord+i}"]`);
             tile.classList.add('ship');

        }
    } else if(ship.Coordinates.endCords[1] == ship.Coordinates.startCords[1]){ // Ys are equal - ship is going horizontally

        let tileQuantity = Math.abs(ship.Coordinates.endCords[0]-ship.Coordinates.startCords[0])+1;
        if(ship.Coordinates.endCords[0]<ship.Coordinates.startCords[0]) {
            smallerCoord=ship.Coordinates.endCords[0];
        } else smallerCoord=ship.Coordinates.startCords[0];

        for(let i=0; i<tileQuantity; i++){
             let tile=document.querySelector(`[data-coordinates="${smallerCoord+i}${ship.Coordinates.startCords[1]}"]`);
             tile.classList.add('ship');
        }
    }
});

}

module.exports=UIplayerChooseShipsResponse;
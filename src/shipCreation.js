
function shipConstructor(Coordinates,hitPosition,sunk){
    this.Coordinates=Coordinates;
    this.hitPosition=hitPosition;
    this.sunk=sunk;
};
shipConstructor.prototype.AllCoordinates=function(){ // gets all the coordinates between start and end positions
    const allCoordinates=[];

    if(Math.abs(this.Coordinates.endCords[0]-this.Coordinates.startCords[0])==0){
        // vertical ship
        const length=Math.abs(this.Coordinates.endCords[1]-this.Coordinates.startCords[1])+1;
        let longerCoordinate=0;
        if(this.Coordinates.endCords[1]>this.Coordinates.startCords[1]){longerCoordinate=this.Coordinates.endCords[1];}
        else{longerCoordinate=this.Coordinates.startCords[1]};
        for(let i=0;i<length;i++){
            allCoordinates.push([this.Coordinates.endCords[0],longerCoordinate-i]);
        }
    } else {
        // horizontal ship

        const length=Math.abs(this.Coordinates.endCords[0]-this.Coordinates.startCords[0])+1;
        let longerCoordinate=0;
        if(this.Coordinates.endCords[0]>this.Coordinates.startCords[0]){longerCoordinate=this.Coordinates.endCords[0];}
        else{longerCoordinate=this.Coordinates.startCords[0]};
        for(let i=0;i<length;i++){
            allCoordinates.push([longerCoordinate-i,this.Coordinates.endCords[1]]);
        }
    }
    return allCoordinates;
}



module.exports=shipConstructor;
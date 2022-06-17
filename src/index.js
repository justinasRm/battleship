
function shipFactory(startCords,endCords,hitPosition,sunk){

        this.startCords=startCords;
        this.endCords=endCords;
        this.hitPosition=hitPosition;
        this.sunk=sunk;
};
shipFactory.prototype.length=function(){
    if(this.startCords[0]-this.endCords[0]!=0){
        return Math.abs(this.startCords[0]-this.endCords[0])+1;
    } else {
        return Math.abs(this.startCords[1]-this.endCords[1])+1;
    }
};
shipFactory.prototype.isSunk=function(){
    if(this.sunk==true){
        this.sunk=true;
        return true;
    } else {
        this.sunk=false;
        return false;
    }
};
shipFactory.prototype.isHit=function(coords){
    if((coords[0]<=this.startCords[0]&&coords[0]>=this.endCords[0])||(coords[0]<=this.endCords[0]&&coords[0]>=this.startCords[0])){
        if((coords[1]<=this.startCords[1]&&coords[1]>=this.endCords[1])||(coords[1]<=this.endCords[1]&&coords[1]>=this.startCords[1])){
            this.hitPosition.push(coords);
            return coords;
        }
        else{
            return 'not hit';
        }
    } else {
        return 'not hit';
    }
};


module.exports={
    shipFactory: shipFactory
}
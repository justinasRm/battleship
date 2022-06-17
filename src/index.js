
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
shipFactory.prototype.penis='penis';



const ship1= new shipFactory([6,6],[6,1],[],false);


module.exports={
    shipFactory: shipFactory
}
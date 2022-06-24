
function shipConstructor(Coordinates,hitPosition,sunk){

    this.Coordinates=Coordinates;
    this.hitPosition=hitPosition;
    this.sunk=sunk;
};

shipConstructor.prototype.isSunk=function(){
if(this.sunk==true){
    this.sunk=true;
    return true;
} else {
    this.sunk=false;
    return false;
}
};
// HIT FUNCTIONALITY SHOULD BE FIXED

// shipConstructor.prototype.isHit=function(coords){
// if((coords[0]<=this.startCords[0]&&coords[0]>=this.endCords[0])||(coords[0]<=this.endCords[0]&&coords[0]>=this.startCords[0])){
//     if((coords[1]<=this.startCords[1]&&coords[1]>=this.endCords[1])||(coords[1]<=this.endCords[1]&&coords[1]>=this.startCords[1])){
//         this.hitPosition.push(coords);
//         return coords;
//     }
//     else{
//         return 'not hit';
//     }
// } else {
//     return 'not hit';
// }
// };



module.exports=shipConstructor;
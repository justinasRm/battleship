// these two variables help determine when to shop the explanation overlay.
let newShip=true;
let endTile=false;

function overlay(playerBoard,body){
    const overlay=document.createElement('div');
    overlay.classList.add('ship-overlay');

    if(playerBoard.length==0){
    // Starting overlay loads when the player ship choosing window loads
        return setTimeout(() => { 
            overlay.innerText='Place 2 ships of length 1';
            body.append(overlay);
            setTimeout(() => {
                overlay.style.opacity='1';
            }, 10);
            setTimeout(() => {
                overlay.style.opacity='0';
            }, 3000);
            setTimeout(() => {
                overlay.remove();
            }, 4000);
        }, 500);
    } else if(playerBoard.length==2){
        // Loads when first 2 ships of length 1 are placed - indicates that next 2 ships should be of length 2
        if(newShip!=false){

        newShip=false;
        // console.log(newShip);
        return setTimeout(() => {
            overlay.innerText='Place 2 ships of length 2';
            body.append(overlay);
            setTimeout(() => {
                overlay.style.opacity='1';
            }, 10);
            setTimeout(() => {
                overlay.style.opacity='0';
            }, 3000);
            setTimeout(() => {
                overlay.remove();
            }, 4000);
        }, 500);
    }
    } else if(playerBoard.length==3){
        // Prepares for the next overlay(1 ship of length 3)
        newShip=true;
    } else if(playerBoard.length==4){
    // Loads when 2 ships of length 2 are placed - indicates that next 1 ship should be of length 3

        if(newShip!=false){
            newShip=false;
            return setTimeout(() => {
                overlay.innerText='Place 1 ship of length 3';
                body.append(overlay);
                setTimeout(() => {
                    overlay.style.opacity='1';
                }, 10);
                setTimeout(() => {
                    overlay.style.opacity='0';
                }, 3000);
                setTimeout(() => {
                    overlay.remove();
                }, 4000);
            }, 500);
        }

    } else if(playerBoard.length==5){
        // Loads when ship of length 3 is placed - indicates that next ship should be of length 4
        newShip=true;
        if(endTile==true){ // additional step for figuring out if the click of a button(when this function gets called) is on the start of the coords or the end.
            endTile=false;
            return;
        }
        if(newShip!=false){
            newShip=false;
            endTile=true;
            return setTimeout(() => {
                overlay.innerText='Place 1 ship of length 4';
                body.append(overlay);
                setTimeout(() => {
                    overlay.style.opacity='1';
                }, 10);
                setTimeout(() => {
                    overlay.style.opacity='0';
                }, 3000);
                setTimeout(() => {
                    overlay.remove();
                }, 4000);
            }, 500);
        }
    } else if(playerBoard.length==6){
        // Loads when ship of length 4 is placed - indicates that next ship should be of length 5
        newShip=true;
        if(endTile==true){ // additional step for figuring out if the click of a button(when this function gets called) is on the start of the coords or the end.
            return;
        }
        if(newShip!=false){
            newShip=false;
            endTile=true;
            return setTimeout(() => {
                overlay.innerText='Place 1 ship of length 5';
                body.append(overlay);
                setTimeout(() => {
                    overlay.style.opacity='1';
                }, 10);
                setTimeout(() => {
                    overlay.style.opacity='0';
                }, 3000);
                setTimeout(() => {
                    overlay.remove();
                }, 4000);
            }, 500);
        }
    }
}
module.exports=overlay;
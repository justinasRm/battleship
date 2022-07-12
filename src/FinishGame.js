
function FinishGame(winner,body){
    body.innerHTML='';
    
    if(winner=='computer'){
        alert('COMPUTER HAS WON');
    }

    if(winner=='player'){
        alert('PLAYER HAS WON');
    }

}

module.exports=FinishGame;
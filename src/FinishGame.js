
function FinishGame(winner,body){
    const popup=document.createElement('div');
    popup.classList.add('gg-popup');

    popup.innerText='the '+winner+' has won this game!';

    const playAgain=document.createElement('button');
    playAgain.classList.add('play-again-btn');

    playAgain.innerText='Another round?';
    playAgain.addEventListener('click',function(){
        window.location.reload();
    })
    popup.append(playAgain);
    body.append(popup);
    setTimeout(() => {
        popup.style.opacity='0.7';
    }, 10);


}

module.exports=FinishGame;
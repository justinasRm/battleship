
function FinishGame(winner,body){
    if(document.querySelector('.gg-popup'))return;
    const popup=document.createElement('div');
    popup.classList.add('gg-popup');
    
    const popupText=document.createElement('div');
    popupText.classList.add('gg-popup-text');

    popupText.innerText='the '+winner+' has won this game!';

    const playAgain=document.createElement('button');
    playAgain.classList.add('play-again-btn');

    playAgain.innerText='Another round?';
    playAgain.addEventListener('click',function(){
        window.location.reload();
    })
    popupText.append(playAgain);
    popup.append(popupText);
    body.append(popup);
    setTimeout(() => {
        popup.style.opacity='1';
    }, 10);


}

module.exports=FinishGame;
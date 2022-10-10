const ComputerChooseShips = require('./ComputerChooseShips');
const CheckHit = require('./CheckHit');


export default function startGame(BotGameBoard,BotPlayerBoard,body,GameBoard,playerBoard){
    BotGameBoard = ComputerChooseShips(BotPlayerBoard);
    body.innerHTML='';
    const playerSide=document.createElement('div');
    playerSide.setAttribute('id','player-side');
    const computerSide=document.createElement('div');
    computerSide.setAttribute('id','computer-side');
    body.append(playerSide,computerSide);
    for(let i=1;i<=6;i++){
        for(let j=1;j<=6;j++){
            const playerBox=document.createElement('div');// player side boxes
            playerBox.setAttribute('data-coordinates',`${j}${i}`);
            GameBoard.forEach(element => {
                if(element[0]==j && element[1]==i){
                    playerBox.classList.add('ship'); // this means there is a part of a ship on that tile
                }
            });
            playerBox.classList.add('player-side-box');

            const computerBox=document.createElement('div'); // PC side boxes
            computerBox.setAttribute('data-coordinates',`${j}${i}`);
            const ClickedTileCoords=computerBox.dataset.coordinates;
            computerBox.classList.add('computer-side-box');
            function Check(){
                CheckHit(ClickedTileCoords,BotPlayerBoard,BotGameBoard,GameBoard,playerBoard,body); // checks players hit ...
                computerBox.removeEventListener('click',Check);
            }
            computerBox.addEventListener('click',Check)
            
            computerSide.append(computerBox);
            playerSide.append(playerBox);
        }
    };

    const overlay=document.createElement('div');
    overlay.classList.add('final-ship-overlay');

    const overlayText=document.createElement('div');
    overlayText.classList.add('final-ship-overlay-text');
    overlayText.innerText='Start the game!';
    overlay.append(overlayText);
    setTimeout(() => {
        body.append(overlay);
        setTimeout(() => {
            overlay.style.opacity='0';
        }, 1500);
        setTimeout(() => {
            overlay.remove();
        }, 2000);
    }, 0);

return BotGameBoard;
}
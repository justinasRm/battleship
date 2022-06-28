import "../src/firstScreenStyle.css";
import "../src/playerChooseShipsStyle.css";
import playerChooseShips from './PlayerChooseShips';
import overlay from './Overlay.js';

let GameBoard=[];
let playerBoard=[];
let computerBoard=[];

const body=document.querySelector('body');
const firstScreen=document.querySelector('.content-first-screen');
const startBtn=document.querySelector('#start-game');
const contentPlayerChooseShips=document.createElement('div');

const board=document.createElement('div');
board.setAttribute('id','board');

for(let i=1;i<=6;i++){

    for(let j=1;j<=6;j++){

        const box=document.createElement('div');
        box.setAttribute('data-coordinates',`${j}${i}`);
        box.classList.add('box');
        box.addEventListener('click',function(){
            playerChooseShips(this.dataset.coordinates,GameBoard,playerBoard); // updates playerBoard, GameBoard arrays and the UI inside
            overlay(playerBoard,body);
        });
        
        board.append(box);
    }
}




contentPlayerChooseShips.classList.add('content-player-choose-ships');
contentPlayerChooseShips.append(board);


startBtn.addEventListener('click',function(){
    firstScreen.remove();
    body.append(contentPlayerChooseShips);
    overlay(playerBoard,body);
});

import "../src/firstScreenStyle.css";
import "../src/playerChooseShipsStyle.css";
import playerChooseShips from './PlayerChooseShips.js';
import overlay from './Overlay.js';
import startGame from './startGame.js'
import checkTheShip from './checkTheShip.js'
import { doc } from "prettier";

let GameBoard=[];
let playerBoard=[];
let computerBoard=[];
let isShipGood=true; // boolean will be set to false when a ship isn't the length its supposed to be or goes both vertically and horizontally

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
            isShipGood=checkTheShip(playerBoard,isShipGood);
            if(isShipGood==false){
                const error=document.createElement('div');
                error.classList.add('ship-overlay');
                error.style.opacity='1';
                error.style.backgroundColor='rgb(222, 96, 96)';
                error.innerText=`Follow the rules of ship creation - your ships can't go both horizontally and vertically, they must be the length specified and they can't overlap!`;
                body.append(error);
                setTimeout(() => {
                    window.location.reload();
                }, 6000);
                // Start whole code all over again
            }
            
            console.log(isShipGood);
            if(playerBoard.length==7){
                startGame(); // NO FUNCTIONALITY YET
            }
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

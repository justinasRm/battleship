import "../src/firstScreenStyle.css";
import "../src/playerChooseShipsStyle.css";
import "../src/Gameplay.css";
import playerChooseShips from './PlayerChooseShips.js';
import overlay from './Overlay.js';
import startGame from './startGame.js'
import checkTheShip from './checkTheShip.js'

let GameBoard=[]; // this array will store players board
let playerBoard=[]; // this array will store players ships

let BotGameBoard=[]; // this array will store computers ships
let BotPlayerBoard=[]; // this array will store computers board
let isShipGood=true; // boolean will be set to false when a ship isn't the length its supposed to be or goes both vertically and horizontally

const body=document.querySelector('body'); // main body that will be manipulated when i need to load different screens

// starting screen elements
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
            isShipGood=checkTheShip(playerBoard,isShipGood,GameBoard); // checks if ship placed by the player is placed by the rules
            if(isShipGood==false){ // throws an error if it isn't, restarts the window
                const error=document.createElement('div');
                error.classList.add('ship-overlay');
                error.style.opacity='1';
                error.style.backgroundColor='rgb(222, 96, 96)';
                error.innerText=`Follow the rules of ship creation - your ships can't go both horizontally and vertically, they must be the length specified and they can't overlap!`;
                body.append(error);
                setTimeout(() => {
                    window.location.reload();
                }, 6000);

                return;
                // Starts whole code all over again
            }
            overlay(playerBoard,body);
            if(playerBoard.length==7){
                BotGameBoard = startGame(BotGameBoard,BotPlayerBoard,body,GameBoard,playerBoard);
            }
        });
        
        board.append(box);
    }
}




contentPlayerChooseShips.classList.add('content-player-choose-ships');
contentPlayerChooseShips.append(board);


startBtn.addEventListener('click',function(){
    firstScreen.remove();

    const explanationOverlay = document.createElement('div');
    explanationOverlay.classList.add('explanation-overlay');

    const EOtextDiv = document.createElement('div');
    EOtextDiv.classList.add('explanation-overlay-textDiv');
    // EO - explanation overlay
    const EOheader = document.createElement('p');
    EOheader.innerText='Welcome to Battleships!';
    const EOfirstText = document.createElement('p');
    EOfirstText.innerText = 'This is a typical game of battleships - you try to shoot your enemies ships, your enemy tries to shoot yours.';
    const EOsecondText = document.createElement('p');
    EOsecondText.innerText = 'First of all, choose your board ships positions by following the overlays that popup.';
    const EObutton = document.createElement('button');
    EObutton.innerText='Continue';
    EObutton.classList.add('explanation-overlay-button');

    EOtextDiv.append(EOheader,EOfirstText,EOsecondText,EObutton);

    EObutton.addEventListener('click',function(){
        explanationOverlay.remove();
        overlay(playerBoard,body);
    })

    explanationOverlay.append(EOtextDiv);
    body.append(explanationOverlay);
    body.append(contentPlayerChooseShips);
});

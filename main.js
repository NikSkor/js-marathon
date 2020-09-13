import Pokemon from './pokemon.js';
import {getPokemons, getElById, getElByClass} from './utils.js';
import countClick from './counter.js';
// import {pokemons} from './pokemons.js';
import {eraseLog, closeLog} from "./log.js";
import {initPlayer, attacksBtns} from './init.js';

class Game {
    start = async() => {
        const pokemons = await getPokemons('https://reactmarathon-api.netlify.app/api/pokemons');
        console.log(pokemons);
        const $control = getElByClass('.control');
        const $startBtn = getElById('start');
        const $resetBtn = getElById('reset');
        const $extBtn = getElById('ext');

        const $playGround = getElByClass('.playground');

        const $logs = getElById('logs');
        let $logFight = [];

        let player1 = {};
        let player2 = {};

        $startBtn.addEventListener('click', () => {
            $playGround.style.display = 'flex';
            $startBtn.disabled = true;
            $resetBtn.disabled = false;
            eraseLog($logs);
            player1 = initPlayer('player1', pokemons);
            player2 = initPlayer('player2', pokemons);
            attacksBtns(player1, player2, $control, $logs, $logFight);
            $extBtn.disabled = false;
        })

        $resetBtn.addEventListener('click', () => {
            player1 = initPlayer('player1', pokemons);
            player2 = initPlayer('player2', pokemons);
            eraseLog($logs);
            closeLog($logs);
            eraseLog($control);
            attacksBtns(player1, player2, $control, $logs, $logFight);
        })

        $extBtn.addEventListener('click', () => {
            $playGround.style.display = 'none';
            $startBtn.disabled = false;
            $resetBtn.disabled = true;
            $extBtn.disabled = true;
            eraseLog($logs);
            closeLog($logs);
            eraseLog($control);
            const h2 = document.createElement('H2');
            h2.innerText = 'Спасибо за игру!!!';
            $logs.appendChild(h2);

        })
    }
}





const game = new Game();
game.start();
import Pokemon from './pokemon.js';
import random from './utils.js';
import countClick from './counter.js';

function getElById(id) {
    return document.getElementById(id);
}
const $btn = getElById('btn-kick');
const $btnIronKick = getElById('btn-ironkick');
const $btnsArray = [$btn, $btnIronKick];
const $logs = document.querySelector('#logs');
let $logFight = [];

const character = new Pokemon({
        name: 'Pickachu',
        defaultHP: 350,
        damageHP: 350,
        selectors: 'character',
})

const enemy = new Pokemon({
        name: 'Charmander',
        defaultHP: 330,
        damageHP: 330,
        selectors: 'enemy',
})

const countTail = countClick($btn, 6);
const countJolt = countClick($btnIronKick, 8);

function catchClick(btn) {
    btn.addEventListener('click', () => {
        // console.log('Kick');
        if (btn.id === 'btn-kick') {
            countTail();
        }
        if (btn.id === 'btn-ironkick') {
            countJolt();
        }
        character.changeHP(random(30, 10), $logs, $logFight, $btnsArray, enemy);
        enemy.changeHP(random(40, 20), $logs, $logFight, $btnsArray, character);
    }) 
}

function init() {
    console.log('Start Game!');
    character.renderHP();
    enemy.renderHP();
    catchClick($btn, 10);
    catchClick($btnIronKick, 20);
}

init();
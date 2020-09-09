import {random,randomPokemon} from './utils.js';
import Pokemon from './pokemon.js';
import countClick from './counter.js';

async function getAttacks(player1, player2){
    const base = await fetch(`https://reactmarathon-api.netlify.app/api/fight?player1id=${player1.id}&attackId=${random(2)}&player2id=${player2.id}`);
    const body = await base.json();
    return body;
}

export function attacksBtns(play1, play2, control, logs, logFight) {

    play1.attacks.forEach(item => {

        const btn = document.createElement('button');
        btn.classList.add('button');
        btn.innerText = item.name;
        const btnCount = countClick(btn, item.maxCount);
        btn.addEventListener('click', async() => {
            btnCount();
            let attacs = await getAttacks(play1, play2);
            play1.changeHP(attacs.kick.player2, logs, logFight, play2, control);
            play2.changeHP(attacs.kick.player1, logs, logFight, play1, control);
        })
        control.appendChild(btn);
    });
}
export function initPlayer(name, arr) {
    let num = randomPokemon(arr.length);
    return new Pokemon({
        ...arr[num],
        selectors: name,
    })
}
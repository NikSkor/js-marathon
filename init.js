import {random,randomPokemon} from './utils.js';
import Pokemon from './pokemon.js';
import countClick from './counter.js';

export function attacksBtns(play1, play2, control, logs, logFight) {
    play1.attacks.forEach(item => {

        const btn = document.createElement('button');
        btn.classList.add('button');
        btn.innerText = item.name;
        const btnCount = countClick(btn, item.maxCount);
        btn.addEventListener('click', () => {
            btnCount();
            play1.changeHP(random(item.maxDamage, item.minDamage), logs, logFight, play2, control);
            play2.changeHP(random(item.maxDamage, item.minDamage), logs, logFight, play1, control);
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
import {random,randomPokemon,getPokemons} from './utils.js';
import Pokemon from './pokemon.js';
import countClick from './counter.js';

async function getAttacks(player1, player2){
    return getPokemons(`https://reactmarathon-api.netlify.app/api/fight?player1id=${player1.id}&attackId=${random(2)}&player2id=${player2.id}`);
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
            let pl1Attack = play1.changeHP(attacs.kick.player1, logs, logFight, play2, control);
            let pl2Attack = play2.changeHP(attacs.kick.player2, logs, logFight, play1, control);

            console.log(pl1Attack);
            console.log(pl2Attack);

            if (pl1Attack === false && pl2Attack === false) {
               play2.changeHP(attacs.kick.player2, logs, logFight, play1, control);
            } 
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
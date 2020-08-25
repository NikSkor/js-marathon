const $btn = document.getElementById('btn-kick');
const $btnIronKick = document.getElementById('btn-ironkick');
const $btnsArray = [$btn, $btnIronKick];


const character = {
    name: 'Pickachu',
    defaultHP: 100,
    damageHP: 100,
    elHp: document.getElementById('health-character'),
    elProgressBar: document.getElementById('progressbar-character'),
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHp: document.getElementById('health-enemy'),
    elProgressBar: document.getElementById('progressbar-enemy'),
}

const $personArray = [character, enemy];

function attackAll(damageHp,hero, person) {
    changeHP(random(damageHp), hero);
    changeHP(random(damageHp), person);
}

function catchClick(btn, num) {
    btn.addEventListener('click', () => {
        console.log('Kick');
        attackAll(num, character, enemy);
    }) 
}

function init() {
    console.log('Start Game!');
    renderHP(character);
    renderHP(enemy);
    catchClick($btn, 20);
    catchClick($btnIronKick, 50);
}

function renderHP(person) {
    renderHPLife(person);
    renderProgressBarHP(person);
}
function renderHPLife(person) {
    person.elHp.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressBarHP(person) {
    person.elProgressBar.style.width = person.damageHP + '%';
}

function changeHP(count, person) {
    if (person.damageHP < count) {
        person.damageHP = 0;
        alert('Бедный ' + person.name + ' проиграл бой!');
        for (let i = 0; i < $btnsArray.length; i++) {
            $btnsArray[i].disabled = true;
        }
    } else {
        person.damageHP -= count;
    }
    renderHP(person);
}

function random(num) {
    return Math.ceil(Math.random()*num);
}
init();
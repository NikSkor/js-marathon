const $btn = document.getElementById('btn-kick');
const $btnIronKick = document.getElementById('btn-ironkick');
const $btnsArray = [$btn, $btnIronKick];


const character = {
    name: 'Pickachu',
    defaultHP: 150,
    damageHP: 150,
    elHp: document.getElementById('health-character'),
    elProgressBar: document.getElementById('progressbar-character'),
    renderHP: renderHP,
    changeHP: changeHP,
}

const enemy = {
    name: 'Charmander',
    defaultHP: 130,
    damageHP: 130,
    elHp: document.getElementById('health-enemy'),
    elProgressBar: document.getElementById('progressbar-enemy'),
    renderHP: renderHP,
    changeHP: changeHP,
}


function attackAll(damageHp) {
    character.changeHP(random(damageHp));
    enemy.changeHP(random(damageHp));
}

function catchClick(btn, num) {
    btn.addEventListener('click', () => {
        console.log('Kick');
        attackAll(num);
    }) 
}

function init() {
    console.log('Start Game!');
    character.renderHP();
    enemy.renderHP();
    catchClick($btn, 20);
    catchClick($btnIronKick, 50);
}

function renderHP() {
    this.elHp.innerText = this.damageHP + ' / ' + this.defaultHP;
    this.elProgressBar.style.width = Math.ceil((this.damageHP / this.defaultHP)*100) + '%';
    console.log(this.elProgressBar.style.width);
}

function changeHP(count) {
    if (this.damageHP < count) {
        this.damageHP = 0;
        alert('Бедный ' + this.name + ' проиграл бой!');
        for (let i = 0; i < $btnsArray.length; i++) {
            $btnsArray[i].disabled = true;
        }
    } else {
        this.damageHP -= count;
    }
    this.renderHP();
}

function random(num) {
    return Math.ceil(Math.random()*num);
}
init();
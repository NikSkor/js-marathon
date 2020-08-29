function getElById(id) {
    return document.getElementById(id);
}
const $btn = getElById('btn-kick');
const $btnIronKick = getElById('btn-ironkick');
const $btnsArray = [$btn, $btnIronKick];
const $logs = document.querySelector('#logs');
let $logFight = [];


const character = {
    name: 'Pickachu',
    defaultHP: 150,
    damageHP: 150,
    elHp: getElById('health-character'),
    elProgressBar: getElById('progressbar-character'),
    renderHP: renderHP,
    changeHP: changeHP,
    renderHPLife: renderHPLife,
    renderProgressBarHP: renderProgressBarHP,
}

const enemy = {
    name: 'Charmander',
    defaultHP: 130,
    damageHP: 130,
    elHp: getElById('health-enemy'),
    elProgressBar: getElById('progressbar-enemy'),
    renderHP: renderHP,
    changeHP: changeHP,
    renderHPLife: renderHPLife,
    renderProgressBarHP: renderProgressBarHP,
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
    this.renderHPLife();
    this.renderProgressBarHP();

}

function renderHPLife(){
    this.elHp.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressBarHP() {
    this.elProgressBar.style.width = Math.ceil((this.damageHP / this.defaultHP) * 100) + '%';
    console.log(this.elProgressBar.style.width);
}

function changeHP(count) {
    if (this.damageHP < count) {
        this.damageHP = 0;
        let alertString = `Бедный ${this.name} проиграл бой, - ${count}, [${this.damageHP}/${this.defaultHP}]`;
        $logFight.push(alertString);
        alert('Бедный ' + this.name + ' проиграл бой!');
        for (let i = 0; i < $btnsArray.length; i++) {
            $btnsArray[i].disabled = true;
        }
    } else {
        this.damageHP -= count;
        const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);
        $logFight.push(log);
        console.log(log);
        console.log($logFight);

    }
    renderLog();
    this.renderHP();
}

function random(num) {
    return Math.ceil(Math.random()*num);
}

function generateLog(firstPerson, secondPerson, count) {
    const logs = [
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага, - ${count}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага, - ${count}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил, - ${count}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар, - ${count}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника, - ${count}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар, - ${count}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар, - ${count}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника, - ${count}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника, - ${count}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику, - ${count}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`
    ];

    return logs[random(logs.length) - 1];
}


function renderLog() {
    while ($logs.firstChild) {
        $logs.removeChild($logs.firstChild); // очищаем лог
    }
    for (let i = 0; i < $logFight.length; i++) {
        const p = document.createElement('p');

        p.innerText = $logFight[i];
        $logs.insertBefore(p, $logs.children[0]); //вставка в обратном порядке
    }
}



init();
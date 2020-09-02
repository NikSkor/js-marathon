import {generateLog, renderLog} from "./log.js";

class Selectors {
    constructor(name) {
        this.elHp = document.getElementById(`health-${name}`);
        this.elProgressBar = document.getElementById(`progressbar-${name}`);
    }
}

class Pokemon extends Selectors {
    constructor({
        name,
        defaultHP,
        damageHP,
        selectors
    }) {
        super(selectors);
        this.name = name;
        this.defaultHP = defaultHP;
        this.damageHP = damageHP;

        this.renderHP();
    }

    renderHP = () => {
        this.renderHPLife();
        this.renderProgressBarHP();
    }

    renderHPLife = () => {
        this.elHp.innerText = this.damageHP + ' / ' + this.defaultHP;
    }

    renderProgressBarHP = () => {
        this.elProgressBar.style.width = Math.ceil((this.damageHP / this.defaultHP) * 100) + '%';
    }

    changeHP = (count, logs, logFight, btnsArray, enemy) => {
        if (this.damageHP < count) {
            this.damageHP = 0;
            let alertString = `Бедный ${this.name} проиграл бой, - ${count}, [${this.damageHP}/${this.defaultHP}]`;
            logFight.push(alertString);
            alert('Бедный ' + this.name + ' проиграл бой!');
            for (let i = 0; i < btnsArray.length; i++) {
                btnsArray[i].disabled = true;
            }
        } else {
            this.damageHP -= count;
            const log = this === enemy ? generateLog(enemy, this, count) : generateLog(this, enemy, count);
            logFight.push(log);
        }
        renderLog(logs, logFight);
        this.renderHP();
    }
}

export default Pokemon;
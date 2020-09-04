import {generateLog, renderLog} from "./log.js";
import {
    getElById,
    getElByClass
} from './utils.js';


class Selectors {
    constructor(name) {
        this.elHp = getElById(`health-${name}`);
        this.elProgressBar = getElById(`progressbar-${name}`);
        this.lvl = getElByClass(`.lvl-${name}`);
        this.avatar = getElByClass(`.sprite-${name}`);
        this.namePlayer = getElById(`name-${name}`);
    }
}

class Pokemon extends Selectors {
    constructor({
        img,
        name,
        type,
        hp,
        selectors, 
        attacks,
    }) {
        super(selectors);
        this.img = img;
        this.name = name;
        this.type = type;
        this.defaultHP = hp;
        this.damageHP = hp;
        this.attacks = attacks;

        this.renderPlayer();
    }

    renderPlayer = () => {
        this.renderHPLife();
        this.renderProgressBarHP();
        this.renderName();
        this.renderAvatar();
    }
    renderName = () => {
        this.namePlayer.innerText = this.name;
    }
    renderAvatar = () => {
        this.avatar.src = this.img;
    }
    renderHPLife = () => {
        this.elHp.innerText = this.damageHP + ' / ' + this.defaultHP;
    }

    renderProgressBarHP = () => {
        this.elProgressBar.style.width = Math.ceil((this.damageHP / this.defaultHP) * 100) + '%';
    }

    changeHP = (count, logs, logFight, enemy, panel) => {
        if (this.damageHP < count) {
            this.damageHP = 0;
            let alertString = `Бедный ${this.name} проиграл бой, - ${count}, [${this.damageHP}/${this.defaultHP}]`;
            logFight.push(alertString);
            alert('Бедный ' + this.name + ' проиграл бой!');
            for (let i = 0; i < panel.children.length; i++){
                panel.children[i].disabled = true;
            }
        } else {
            this.damageHP -= count;
            const log = this === enemy ? generateLog(enemy, this, count) : generateLog(this, enemy, count);
            logFight.push(log);
        }
        renderLog(logs, logFight);
        this.renderPlayer();
    }
}

export default Pokemon;
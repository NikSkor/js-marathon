export function random(max, min = 0) {
    const num = max - min;
    return Math.ceil(Math.random() * num) + min;
}


export function randomPokemon(num) {
    return Math.ceil(Math.random() * num) - 1;
}

export function getElById(id) {
    return document.getElementById(id);
}

export function getElByClass(className) {
    return document.querySelector(className);
}

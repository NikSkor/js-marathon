function countClick(btn, count) {
    let text = btn.innerText;
    btn.innerText = `${text} [${count}]`;
    return function () {
        count -= 1;
        console.log(`Атака ${text}, ударов осталось: ${count}`);
        btn.innerText = `${text} [${count}]`;
        if (count <= 0) {
            btn.disabled = true;
            console.log(`Атака ${text}, больше не возможна`);
        }
    }
}

export default countClick;
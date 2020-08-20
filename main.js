const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

alert(`Даны две строки: \'${firstRow}\' и \'${secondRow}\'. Сейчас скажу в которой больше букв а.`);


function countSymbol(row) {
    let counter = 0;
    for (let i = 0; i < row.length; i++) {
        if(row.charAt(i) === 'а') {
            counter++
        }
    }
    return counter;
}

function getRow(firstRow, secondRow) {
    let firstCounter = countSymbol(firstRow);
    let secondCounter = countSymbol(secondRow);

    return (firstCounter > secondCounter) ? firstRow : secondRow;
}

console.log(getRow(firstRow, secondRow)); // мама мыла раму

alert('Больше всего букв а в строке : \'' + getRow(firstRow, secondRow) + '\'');
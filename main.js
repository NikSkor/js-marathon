/*first*/
const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';
const CHAR = 'а';
alert(`Даны две строки: \'${firstRow}\' и \'${secondRow}\'. Сейчас скажу в которой больше букв ${CHAR}.`);


function countSymbol(row, char) {
    let counter = 0;
    for (let i = 0; i < row.length; i++) {
        if(row.charAt(i) === char) {
            counter++
        }
    }
    return counter;
}

function getRow(firstRow, secondRow, char) {
    let firstCounter = countSymbol(firstRow, char);
    let secondCounter = countSymbol(secondRow, char);
    if (firstCounter === secondCounter) {
        return 'Здесь одинаковое количество букв ' + char;
    }
    return (firstCounter > secondCounter) ? firstRow : secondRow;
}

console.log(getRow(firstRow, secondRow, CHAR)); // мама мыла раму

alert('Больше всего букв ' + CHAR + ' в строке : \'' + getRow(firstRow, secondRow, CHAR) + '\'');

/*second*/

function formattedPhone(phone) {
    let formattedNumber = '';
    for (let i = 0; i < phone.length; i++) {
        formattedNumber += phone[i];
        if (phone.charAt(i-1) === '+' && phone.charAt(i) === '7') {
            formattedNumber += ' ('
        }
        if (phone.charAt(i) === '3') {
            formattedNumber += ') '
        }
        if (phone.charAt(i) === '6') {
            formattedNumber += '-'
        }
        if (phone.charAt(i) === '8') {
            formattedNumber += '-'
        }
    }
    return formattedNumber;
}

console.log(formattedPhone('+71234567890')); // +7 (123) 456-78-90
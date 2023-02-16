
let count = 0; // начальное значения счетчика 0
let countEl = document.getElementById("count-el"); // находим элемент по id

function increment() { // функция счетчика
    count += 1; // при нажатии на кнопку increment прибавляем 1
    countEl.textContent = count; // сохраняем в счетчик значение счетчика
}

let saveEl = document.getElementById('save-el'); // находим элемент куда сохранять по id


function save() { // функция сохранения для счатчика 
    let counterStr = count + ' - '; // создаем переменную для хранения счетчика и тире
    saveEl.textContent += counterStr; // записываем значение счетчика в строку
    count = 0; // ообнуляем счетчик
    countEl.textContent = 0; // обнуляем значения в тексте счетчика
    
}

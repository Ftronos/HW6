"use strict";

var form = document.getElementById('feedback');

// Вешаем обработчик клика на кнопку отправки данных
form.querySelector('input[type=submit]').addEventListener('click', function (e) {

    //Записываем все элементы формы
    var elements = form.elements;

    console.log(elements);

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.borderColor = '#e9e9e9';
    }

    // Удаляем все сообщения с ошибками
    var errArr = document.querySelectorAll('.error');
    if (errArr.length !== 0) {
        errArr.forEach(function (element) {
            form.removeChild(element);
        });
    }

    // Проходимся по input которые необходимо проверить
    for (var i = 0; i < 3; i++) {
        if (elements[i].id === 'name' && (!elements[i].value.length || (elements[i].value.replace(/[a-zа-я]/ig, '').length))) {

            error('Необходимо заполнить имя используя только буквы', i);

            e.preventDefault();

        } else if (elements[i].id === 'phone' && (!elements[i].value.length || (elements[i].value.search(/\+7\(\d{3}\)\d{3}\-\d{4}/)))) {

            error('Необходимо заполнить телефон в формате +7(000)000-0000', i);

            e.preventDefault();

        } else if (elements[i].id === 'email' && (!elements[i].value.length || (elements[i].value.search(/\w+[\.\-]\w+@\w+\.\w+/)))) {

            error('Необходимо заполнить email в следующих форматах: mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru', i);

            e.preventDefault();
        }
    }
});

function error(text, i) {
    form.elements[i].style.borderColor = 'red';

    var error = document.createElement('div');
    error.classList.add('error');

    error.innerHTML = text;

    form.insertBefore(error, form.elements[i + 1]);
}
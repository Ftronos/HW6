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

    // Проходимся по input которые необходимо проверить
    for (var i = 0; i < 3; i++) {
        if (elements[i].id === 'name' && (!elements[i].value.length || (elements[i].value.replace(/[a-zа-яё]/ig, '').length))) {

            $('#nameerr').dialog();

            e.preventDefault();

            break;

        } else if (elements[i].id === 'phone' && (!elements[i].value.length || (elements[i].value.search(/\+7\(\d{3}\)\d{3}\-\d{4}/)))) {

            $('#phoneerr').dialog();

            e.preventDefault();

            break;

        } else if (elements[i].id === 'email' && (!elements[i].value.length || (elements[i].value.search(/\w+[\.\-]\w+@\w+\.\w+/)))) {

            $('#emailerr').dialog();

            e.preventDefault();

            break;
        }
    }
});

$(function() {
    $("#birthday").datepicker();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:4,
    autoplay: true,
    autoplayTimeout: 1000
})
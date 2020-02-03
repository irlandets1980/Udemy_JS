// Используя только файл скрипта (html руками не трогать) выполнить такие действия:

// ·        Восстановить порядок в меню, добавить пятый пункт

// ·        Заменить картинку заднего фона на другую из папки img

// ·        Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")

// ·        Удалить рекламу со страницы

// ·        Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"


let menuItem = document.querySelectorAll('.menu-item'),
menu = document.querySelector('.menu'),
menu_3 = menuItem[1],
title = document.querySelector('.title'),
adv = document.querySelector('.adv'),

prpmpt = document.getElementById('prompt');


console.log(prpmpt);



li  = document.createElement('li');
11
li.classList.add('menu-item');
li.textContent = 'Пятый пункт';
menu.appendChild(li);

menu.replaceChild(menuItem[2], menuItem[1]);
menu.insertBefore(menu_3, menuItem[3]);

document.body.style.backgroundImage = 'url(../img/apple_true.jpg)';

title.textContent = "Мы продаем только подлинную технику Apple";

adv.remove();


prpmpt.textContent = prompt('Как вы относитель к технике Apple?','');

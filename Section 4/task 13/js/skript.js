let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');



inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();
    request.open('GET', 'js/current.json'); //,login,pass
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    //методы 
    //status  - код ошибки ответ от сервера
    //statusText  - текстовый ответ от сервера
    //responseText /response- текст ответа сервера то что разработчик хочет нам послать
    //readyState статусы состояния запроса

    request.addEventListener('readystatechange', function () {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);
            console.log(data);
            inputUsd.value = Math.round(inputRub.value / data.usd) ;
        }
        else{
            inputUsd.value = 'Что-то пошло не так!';
        }
    });

});
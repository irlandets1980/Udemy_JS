function calc() {
    //////калькулятор///////////////
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        plase = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSumm = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function () {
        personsSumm = this.value;
        total = (daysSum + personsSumm) * 4000;
        if (restDays.value == '' || restDays.value == '0' || persons.value == '0' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });
    restDays.addEventListener('change', function () {

        daysSum = this.value;
        total = (daysSum + personsSumm) * 4000;
        if (persons.value == '' || persons.value == '0' || restDays.value == '0' || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    plase.addEventListener('change', function () {
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            
        }
    });
}
module.exports = calc;
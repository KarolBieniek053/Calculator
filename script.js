let text = document.getElementById('text');
let numbers = document.querySelectorAll('.numbers');
let special = document.querySelectorAll('.special');
let result = document.getElementById('result');
let clean = document.getElementById('clean');


function writeSpecial(el){
    let specialValue = el.target.value;
    text.value += specialValue;
}
special.forEach(el => {
    el.addEventListener('click', writeSpecial);
});


function writeNumbers(el) {
    let numbersValue = el.target.value;
    text.value += numbersValue;
}

numbers.forEach(el => {
    el.addEventListener('click', writeNumbers);
});

result.addEventListener('click', function(){
    if((text.value).length > 0)
    {
    let resultValue = text.value;
    let finalResult = eval(resultValue);
    text.value = finalResult;
    }
});
clean.addEventListener('click', function(){
    text.value = '';
});
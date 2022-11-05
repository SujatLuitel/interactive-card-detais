const cardNumberShow = document.getElementById('card-number-main');
const cardholderShow = document.getElementById('cardholder-main');
const expDateShow = document.getElementById('exp-date-main');
const cvcShow = document.getElementById('cvc-main');

const cardholder= document.getElementById('cardholder');
const cardNumber = document.getElementById('card-number');
const expiry = Array.from(document.querySelectorAll('.expiry'))
const inputCvc = document.getElementById('cvc');
const confirm = document.getElementById('confirm');
const continueB = document.getElementById('continue');
const thankyou = document.getElementById('thankyou');
const errMonth = document.getElementById('err-month');
const errYear = document.getElementById('err-year');
const errCvc = document.getElementById('err-cvc');
const errNumber = document.getElementById('err-number');
const errName = document.getElementById('err-name');


const form = document.getElementById('form');

function inputName() {
    formattedCardholder = cardholder.value.replace(/[^a-z ]/gi, "");
    cardholder.value = formattedCardholder;
    cardholderShow.innerHTML = cardholder.value;
    if(cardholderShow.innerHTML == '') {
        errName.innerHTML = 'Name cannot be empty !';
        cardholderShow.innerHTML = cardholder.placeholder;
    }
    else{
        errName.innerHTML = '';
    }
}

function inputNumber() {
    let cardNumberInput = cardNumber.value;
    // Do not allow users to write invalid characters
    let formattedCardNumber = cardNumberInput.replace(/[^\d]/g, "");
    formattedCardNumber = formattedCardNumber.substring(0, 16);
    // Split the card number is groups of 4
    let cardNumberSections = formattedCardNumber.match(/\d{1,4}/g);
    if (cardNumberSections !== null) {
    formattedCardNumber = cardNumberSections.join(" ");
    }
    // If the formmattedCardNumber is different to what is shown, change t
    if (cardNumberInput !== formattedCardNumber) {
    cardNumber.value = formattedCardNumber;
    }
    cardNumberShow.innerHTML = cardNumber.value;
    if (cardNumber.value == '') {
        errNumber.innerHTML = 'Card Number cannot be empty !';
         cardNumberShow.innerHTML = cardNumber.placeholder;
    }
    else if(cardNumber.value !== ''){
        errNumber.innerHTML = '';
    }
}

function allFunct() {
    date();
    year();
    month();
}
function date() {
    expDateShow.innerHTML = expiry[0].value + '/' + expiry[1].value;
}

function year() {
    let inputYear = expiry[1].value;
    let formattedInputYear = inputYear.replace(/[^\d]/g, "");
    inputYear = formattedInputYear.substring(0, 4);
    expiry[1].value = inputYear;

    if(expiry[1].value>2025){
        errYear.innerHTML = 'YY value cannot be more than 2025';
        expiry[1].value = '';
    }
    else if(expiry[1].value == ''){
        errYear.innerHTML = 'YY value cannot be empty';
        errNumber.innerHTML = '';
        expDateShow.innerHTML = expiry[0].value  + '/0000';
    }
    else if(expiry[1].value !== ''){
        errYear.innerHTML = '';
    }
}

function month() {
    let inputMonth = expiry[0].value;
    let formattedInputMonth = inputMonth.replace(/[^\d]/g, "");
    inputMonth  = formattedInputMonth.substring(0, 2);
    expiry[0].value = inputMonth;
    if(expiry[0].value == '') {
        expDateShow.innerHTML = '00/' + expiry[1].value;
    }
    if(expiry[0].value>12){
        errMonth.innerHTML = 'MM value cannot be more than 12';
        expiry[0].value = '';
    }
    else if(expiry[0].value === ''){
        errMonth.innerHTML = 'MM value cannot be empty';
    }
    else if(expiry[0].value !== ''){
        errMonth.innerHTML = '';
    }
}

function cvcF() {
    let cvcInput = inputCvc.value;
    let formattedCvc = cvcInput.replace(/[^\d]/g, "");
    cvcInput = formattedCvc.substring(0, 3);
    inputCvc.value = cvcInput;
    cvcShow.innerHTML = inputCvc.value;
    if(inputCvc.value == '') {
        errCvc.innerHTML = 'CVC value cannot be empty';
        cvcShow.innerHTML = inputCvc.placeholder;
    }
    else if(inputCvc.value !== ''){
        errCvc.innerHTML = '';
    }
}

confirm.addEventListener(('click'), function () {
    thankyou.classList.toggle('hidden');
    form.classList.toggle('hidden');
})

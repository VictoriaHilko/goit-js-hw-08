import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

let email_value= '';
let message_value = '';

const data = {
    email_data: email_value,
    message_data: message_value
};

//1
form.addEventListener('input', throttle(onInput, 500));

function onInput() {

    data.email_data = form.elements.email.value;
    data.message_data = form.elements.message.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

//2
window.addEventListener('load', onLoad);

function onLoad() {
    const getformData = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (getformData) {
        form.elements.email.value = getformData.email_data;
        form.elements.message.value = getformData.message_data;

        console.log(data);
    }
    console.log(data);
}

//3
form.addEventListener('submit', onSubmit);

function onSubmit() {
    localStorage.removeItem('feedback-form-state');
    reset(form);
    console.log(data);
}







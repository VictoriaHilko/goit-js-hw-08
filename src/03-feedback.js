import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

//1
form.addEventListener('input', throttle(onInput, 500));

const currentData = JSON.parse(localStorage.getItem('feedback-form-state'));

function onInput() {

    form.elements.email.value = currentData.email;
    form.elements.message.value = currentData.message;

    const data = {
        email_data: form.elements.email.value,
        message_data: form.elements.message.value
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

//2
window.addEventListener('load', onLoad);

function onLoad() {
    // const getformData = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (getformData) {
        form.elements.email.value = getformData.email_data;
        form.elements.message.value = getformData.message_data;

        console.log(data);
    }
    console.log(data);
}

//3
form.addEventListener('submit', onSubmit);

function onSubmit(event) {
    console.log(data);
    localStorage.removeItem('feedback-form-state');
    reset(form);
}







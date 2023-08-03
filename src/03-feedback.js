import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

let data;

//1
form.addEventListener('input', throttle(onInput, 500));

const currentData = JSON.parse(localStorage.getItem('feedback-form-state'));

if(currentData){
    form.email.value = currentData.email;
    form.message.value = currentData.message;

    data = {
        email: form.email.value,
        message: form.message.value
    };
    // console.log(data);
}

function onInput() {

    data = {
        email: form.email.value,
        message: form.message.value
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
}


//3
form.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();
    console.log(data);
    localStorage.removeItem('feedback-form-state');
    reset(form);
}







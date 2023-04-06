import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const firstOutput = document.querySelector('input');
const secondOutput = document.querySelector('textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(formValues, 500));

function formValues(e) {
  e.preventDefault();
  const emailAddress = document.querySelector('input');
  const messageText = document.querySelector('textarea');
  const obj = {
    email: emailAddress.value,
    message: messageText.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(obj));
}

if (typeof Storage !== 'undefined') {
  localStorage.getItem(LOCALSTORAGE_KEY);
  const formData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  const { email, message } = formData;
  firstOutput.value = formData.email;
  secondOutput.value = formData.message;
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  firstOutput.value = '';
  secondOutput.value = '';
  console.log(localStorage.getItem(LOCALSTORAGE_KEY));
  localStorage.clear();
});

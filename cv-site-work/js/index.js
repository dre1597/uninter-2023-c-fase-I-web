const $ageSpan = document.querySelector('#age');

const getAge = () => {
  const date = new Date();
  const year = date.getFullYear();
  const age = year - 1997;
  const month = date.getMonth();
  const day = date.getDate();

  if (month > 0 || (month === 0 && day >= 15)) {
    return age;
  } else {
    return age - 1;
  }
};

$ageSpan.textContent = getAge();

const $submitBtn = document.querySelector('#submit');
const $name = document.querySelector('#name');
const $email = document.querySelector('#email');
const $message = document.querySelector('#message');

const showAlertMessage = () => {
  alert('Sua mensagem foi enviada com sucesso!');
}

const printValues = () => {
  console.log($name.value);
  console.log($email.value);
  console.log($message.value);
}

const clearForm = () => {
  $name.value = '';
  $email.value = '';
  $message.value = '';
}

const handleClick = (e) => {
  e.preventDefault();
  showAlertMessage();
  printValues();
  clearForm();
}

$submitBtn.addEventListener('click', handleClick)

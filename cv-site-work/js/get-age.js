const $ageSpan = document.querySelector('#age');

const getAge = () => {
  const date = new Date();
  const year = date.getFullYear();
  const age = year - 1997;
  const month = date.getMonth();
  const day = date.getDate();

  if (month > 0 || (month == 0 && day >= 15)) {
    return age;
  } else {
    return age - 1;
  }
};

$ageSpan.textContent = getAge();

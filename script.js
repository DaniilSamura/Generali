// Подключение intl-tel-input
const input = document.querySelector('#phone');
window.intlTelInput(input, {
  loadUtils: () => import('https://cdn.jsdelivr.net/npm/intl-tel-input@25.2.0/build/js/utils.js'),
});

// Калькулятор
function costCalculator() {
  let oneType = document.getElementById('oneType');
  let twoType = document.getElementById('twoType');

  let twoResult = document.getElementById('twoRezult');

  let res = parseFloat(oneType.value || 0) * parseFloat(twoType.value || 0) + parseFloat(oneType.value || 0) * 50;

  twoResult.innerHTML = res.toFixed(2);
}
document.addEventListener('DOMContentLoaded', function () {
  const inputs = [document.getElementById('oneType'), document.getElementById('twoType'), document.getElementById('rangeType'), document.getElementById('rangeType2')];

  inputs.forEach((input) => {
    input.addEventListener('input', costCalculator);
    input.addEventListener('click', costCalculator);
  });

  costCalculator();
});

// Слайдер
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 20,
  mousewheel: true,
  centeredSlides: false,

  breakpoints: {
    430: {
      slidesPerView: 2,
      spaceBetween: 60,
      mousewheel: true,
      centeredSlides: true,
    },
  },
});

// Валидация формы
document.querySelector('.main__form').addEventListener('submit', function (event) {
  event.preventDefault();
  const nameField = document.getElementById('name');
  const phoneField = document.getElementById('phone');
  const nameError = document.getElementById('nameError');
  const phoneError = document.getElementById('phoneError');
  const button = document.getElementById('btn');

  let isValid = true;

  // Валидация имени
  if (!nameField.value || nameField.value.trim().length < 2) {
    nameField.classList.add('invalid');
    nameError.classList.remove('displayNone');
    nameError.textContent = 'Il nome deve contenere almeno 2 caratteri.';
    button.classList.remove('btn-margin');
    isValid = false;
  } else {
    nameField.classList.remove('invalid');
    nameError.textContent = '';
  }

  // Валидация телефона
  if (!phoneField.value || phoneField.value.trim().length < 10) {
    phoneField.classList.add('invalid');
    phoneError.classList.remove('displayNone');
    button.classList.remove('btn-margin');
    phoneError.textContent = 'Numero di telefono non valido.';
    isValid = false;
  } else {
    phoneField.classList.remove('invalid');
    phoneError.textContent = '';
  }

  if (isValid) {
    this.submit();
  }
});

// бургер меню
document.getElementById('burger').addEventListener('click', function () {
  document.querySelector('.header__nav').classList.toggle('active');
});
document.querySelector('.close-btn').addEventListener('click', function () {
  document.querySelector('.header__nav').classList.remove('active');
});

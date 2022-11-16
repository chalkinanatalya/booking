const form = document.querySelector('.ad-form') as HTMLElement;
const price = document.querySelector('#price') as HTMLInputElement;
const type = document.querySelector('#type') as HTMLInputElement;
const timeIn = document.querySelector('#timein') as HTMLInputElement;
const timeOut = document.querySelector('#timeout') as HTMLInputElement;
const adForm = document.querySelector('.ad-form');



const buttons = Array.from(adForm.children).forEach(button => {
  button.classList.add('ad-form--disabled');
  button.setAttribute('disabled', '');
});

price?.addEventListener('click', () => {
  switch (type.value) {
    case 'bungalow':
      price.min = '0';
      price.placeholder = '0';
      break;
    case 'flat':
      price.min = '1000';
      price.placeholder = '1000';
      break;
    case 'house':
      price.min = '5000';
      price.placeholder = '5000';
      break;
    case 'palace':
      price.min = '10_000';
      price.placeholder = '10_000';
      break;
    case 'hotel':
      price.min = '3000';
      price.placeholder = '3000';
      break;
  }
})

const timeLeave = (time1: HTMLInputElement, time2: HTMLInputElement): void => {
  time1.addEventListener('change', () => {
    time2.value = time1.value;
    console.log('1');
  })
}

timeLeave(timeIn, timeOut);
timeLeave(timeOut, timeIn);




const form = document.querySelector('.ad-form') as HTMLElement;
const price = document.querySelector('#price') as HTMLInputElement;
const type = document.querySelector('#type') as HTMLInputElement;
const timeIn = document.querySelector('#timeIn') as HTMLInputElement;
const timeOut = document.querySelector('#timeOut') as HTMLInputElement;

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


timeIn.addEventListener('click', () => {
  timeIn.value = timeOut.value;
})


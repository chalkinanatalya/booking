import { LeafletEvent } from "leaflet";
import { LATITUDE, LONGITUDE, MIN_TITLE_LENGTH, MAX_TITLE_LENGTH } from '../constants/constants';

const price = document.querySelector('#price') as HTMLInputElement;
const type = document.querySelector('#type') as HTMLInputElement;
const timeIn = document.querySelector('#timein') as HTMLInputElement;
const timeOut = document.querySelector('#timeout') as HTMLInputElement;
const adForm = document.querySelector('.ad-form') as HTMLFormElement;
const address = document.querySelector('#address') as HTMLInputElement;
const roomNumber = document.querySelector('#room_number') as HTMLInputElement;
const capacity = document.querySelector('#capacity') as HTMLInputElement;
const title = document.querySelector('#title') as HTMLInputElement;

//whole form
const disableElementsHandler = (): void => {
  Array.from(adForm.children).forEach(button => {
    button.classList.add('ad-form--disabled');
    button.setAttribute('disabled', '');
  });
}

const enableElementsHandler = (): void => {
  Array.from(adForm.children).forEach(button => {
    button.classList.remove('ad-form--disabled');
    button.removeAttribute('disabled');
  });
}

disableElementsHandler();


window.addEventListener('load', () => {
  address.value = `${LATITUDE}, ${LONGITUDE}`;
  address.setAttribute('disabled', '');
  enableElementsHandler();
});

//User's add
title.addEventListener('input', () => {
  const valueLength = title.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    title.setCustomValidity('Ещё ' + (MIN_TITLE_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_TITLE_LENGTH) {
    title.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) + ' симв.');
  } else {
    title.setCustomValidity('');
  }

  title.reportValidity();
});


type.addEventListener('click', () => {
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
      price.min = '10000';
      price.placeholder = '10000';
      break;
    case 'hotel':
      price.min = '3000';
      price.placeholder = '3000';
      break;
  }
})

price.addEventListener('input', () => {
  const val = price.value

  if (isNaN(Number(val))) {
    price.setCustomValidity('Цена за ночь должна быть числом');
  }

  price.reportValidity();
});

const timeLeave = (time1: HTMLInputElement, time2: HTMLInputElement): void => {
  time1.addEventListener('change', () => {
    time2.value = time1.value;
  });
}

timeLeave(timeIn, timeOut);
timeLeave(timeOut, timeIn);

export const addFormCoordinate = (marker: L.Marker<any>): void => {
  marker.on('moveend', (evt: LeafletEvent) => {
    const latLng = evt.target.getLatLng();

    latLng['lat'] = Number(latLng['lat']).toFixed(6);
    latLng['lng'] = Number(latLng['lng']).toFixed(6);

    const inputString: string = latLng.toString();
    const inputElem: string = inputString.slice(7, inputString.length - 1);

    address.value = inputElem;
  });
}

roomNumber.addEventListener('change', () => {
  Array.from(capacity.children).forEach(guest => {
    guest.setAttribute('disabled', '')
  });

  if (roomNumber.value !== '100') {
    capacity.value = roomNumber.value;

    for (let i = 1; i <= Number(roomNumber.value); i++) {
      capacity.querySelector(`[name='${i}']`)?.removeAttribute('disabled');
    }
  } else {
    capacity.value = '0';
    capacity.querySelector('[name="0"]')?.removeAttribute('disabled');
  }
})


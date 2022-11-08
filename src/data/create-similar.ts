import { addAdvertisement } from './data';
// import { addAdvertisementCard } from './data';
import { AdvertisedType } from 'data';

const templateAdvertisement: HTMLTemplateElement | null = document.querySelector('#card');

const mapCanvas = document.querySelector('#map-canvas');
const advertisement = templateAdvertisement.content.querySelector('.popup');


export const renderOffer = ({ author, offer }: AdvertisedType): HTMLElement => {
  const addvertisementElement = advertisement.cloneNode(true) as HTMLElement;

  addvertisementElement.querySelector('.popup__avatar').textContent = author.avatar;
  addvertisementElement.querySelector('.popup__title').textContent = offer.title;
  addvertisementElement.querySelector('.popup__text--address').textContent = offer.address;
  addvertisementElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  addvertisementElement.querySelector('.popup__description').textContent = offer.description;

  const type = offer.type;
  switch (type) {
    case 'palace': addvertisementElement.querySelector('.popup__type').textContent = 'Дворец';
      break;
    case 'flat': addvertisementElement.querySelector('.popup__type').textContent = 'Квартира';
      break;
    case 'house': addvertisementElement.querySelector('.popup__type').textContent = 'Дом';
      break;
    case 'bungalow': addvertisementElement.querySelector('.popup__type').textContent = 'Бунгало';
      break;
  }


  const rooms = offer.rooms;
  addvertisementElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;



  addvertisementElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;


  const featuresList: Element = addvertisementElement.querySelector('.popup__features');
  const features: string[] = offer.features;
  features.forEach((feature: string): void => {
    let li = document.createElement("li");
    li.innerText = feature;
    featuresList.appendChild(li);
  });


  const photosMarkup = addvertisementElement.querySelector('.popup__photos');
  const photos = offer.photos.values();
  for (const photo of photos) {
    photosMarkup.innerHTML += `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`
  }

  return addvertisementElement;
}

const similarAdvertisement = addAdvertisement();

export const renderOffers = (): void => {
  const similarListFragment = document.createDocumentFragment();

  similarAdvertisement.forEach((offer: AdvertisedType) => {
    if (advertisement instanceof HTMLElement) {
      similarListFragment.appendChild(renderOffer(offer));
    }
  });
  mapCanvas.appendChild(similarListFragment);
}



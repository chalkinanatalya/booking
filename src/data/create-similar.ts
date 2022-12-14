import { AdvertisedType } from 'data';

const templateAdvertisement: HTMLTemplateElement | null = document.querySelector('#card');

const mapCanvas = document.querySelector('#map-canvas');
const advertisement = templateAdvertisement?.content.querySelector('.popup');


export const renderOffer = ({ author, offer }: AdvertisedType): HTMLElement => {
  const addvertisementElement = advertisement?.cloneNode(true) as HTMLTemplateElement;

  if (addvertisementElement !== null) {
    if (addvertisementElement !== undefined) {

      addvertisementElement.querySelector('.popup__avatar')!.textContent = '' + author.avatar;
      addvertisementElement.querySelector('.popup__title')!.textContent = '' + offer.title;
      addvertisementElement.querySelector('.popup__text--address')!.textContent = '' + offer.address;
      addvertisementElement.querySelector('.popup__text--price')!.textContent = '' + offer.price + '₽/ночь';
      addvertisementElement.querySelector('.popup__description')!.textContent = '' + offer.description;

    }

    const type = offer.type;
    const typeSelector = addvertisementElement.querySelector('.popup__type') as HTMLHeadElement;
    switch (type) {
      case 'palace':
        typeSelector.textContent = 'Дворец';
        break;
      case 'flat':
        typeSelector.textContent = 'Квартира';
        break;
      case 'house': typeSelector.textContent = 'Дом';
        break;
      case 'bungalow': typeSelector.textContent = 'Бунгало';
        break;
      case 'hotel': typeSelector.textContent = 'Отель';
        break;
    }


    const rooms = offer.rooms;
    const guests = offer.guests;
    let symbRooms = 'комнат';
    let symbGuests = 'гост';

    if (rooms !== undefined) {
      switch (rooms % 10) {
        case 1: symbRooms += 'а';
          break;
        case 2:
        case 3:
        case 4:
          symbRooms += 'ы';
          break;
      }
    }

    if (guests !== undefined) {
      switch (guests % 10) {
        case 1: symbGuests += 'я';
          break;
        default: symbGuests += 'ей'
          break;
      }
    }

    addvertisementElement.querySelector('.popup__text--capacity')!.textContent = '' + `${offer.rooms} ${symbRooms} для ${offer.guests} ${symbGuests}`;

    offer.checkin = offer.checkout;
    addvertisementElement.querySelector('.popup__text--time')!.textContent = '' + `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;


    const featuresList: Element | null = addvertisementElement.querySelector('.popup__features');
    const features: string[] | undefined = offer.features;
    features?.forEach((feature: string): void => {
      let li = document.createElement("li");
      li.innerText = feature;
      featuresList?.appendChild(li);
    });


    const photosMarkup = addvertisementElement.querySelector('.popup__photos') as HTMLDivElement;
    const photos = offer.photos?.values();
    if (photos !== undefined) {
      for (const photo of photos) {
        photosMarkup.innerHTML += `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`
      }

    }

  }

  return addvertisementElement;
}

// export const renderOffers = (similarAdvertisement: AdvertisedType[]): void => {
//   const similarListFragment = document.createDocumentFragment();

//   similarAdvertisement.forEach((offer: AdvertisedType) => {
//     if (advertisement instanceof HTMLElement) {
//       similarListFragment.appendChild(renderOffer(offer));
//     }
//   });
//   templateAdvertisement.appendChild(similarListFragment);
// }



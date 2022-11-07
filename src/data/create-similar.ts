import { addAdvertisement } from './data';
// import { addAdvertisementCard } from './data';

const templateAdvertisement: HTMLTemplateElement | null = document.querySelector('#card');


if (templateAdvertisement instanceof HTMLTemplateElement) {
  const mapCanvas = document.querySelector('#map-canvas');
  const advertisement = templateAdvertisement.content.querySelector('.popup');

  const similarAdvertisement = addAdvertisement();

  const similarListFragment = document.createDocumentFragment();

  similarAdvertisement.forEach(({ author, offer }) => {
    if (advertisement instanceof HTMLElement) {
      const addvertisementElement = advertisement.cloneNode(true) as HTMLElement;

      addvertisementElement.querySelector('.popup__avatar').textContent = author.avatar;

      addvertisementElement.querySelector('.popup__title').textContent = offer.title;
      addvertisementElement.querySelector('.popup__text--address').textContent = offer.address;
      addvertisementElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
      addvertisementElement.querySelector('.popup__type').textContent = offer.type;
      //Add switch option for different types
      addvertisementElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
      addvertisementElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
      addvertisementElement.querySelector('.popup__features').textContent = `${offer.features}`;
      addvertisementElement.querySelector('.popup__description').textContent = offer.description;
      addvertisementElement.querySelector('.popup__photos').textContent = `${offer.photos}`;

      similarListFragment.appendChild(addvertisementElement);

    }
  })

  mapCanvas.appendChild(similarListFragment);


}



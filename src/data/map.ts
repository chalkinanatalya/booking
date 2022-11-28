import L from 'leaflet';
import { LATITUDE, LONGITUDE } from '../constants/constants';
import { addFormCoordinate } from './form';
import { renderOffer } from './create-similar';
import { addAdvertisement } from './data';

const mapFilters = document.querySelector('.map__filters');


const disableFilterHandler = (): void => {
  Array.from(mapFilters.children).forEach(button => {
    button.setAttribute('disabled', '');
  });
}

const enableFilterHandler = (): void => {
  Array.from(mapFilters.children).forEach(button => {
    button.removeAttribute('disabled');
  });
}

disableFilterHandler();

window.addEventListener('load', () => {
  enableFilterHandler();
});


const map: L.Map = L.map('map-canvas')
  .setView({
    lat: LATITUDE,
    lng: LONGITUDE,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap </a>',
  },
).addTo(map);

const mainPinIcon: L.Icon<L.IconOptions> = L.icon({
  iconUrl: '../../leaflet/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const points = addAdvertisement();

points.forEach((point) => {
  const { lat, lng } = point.offer.location;

  const icon = L.icon({
    iconUrl: '../../leaflet/img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(
      renderOffer(point),
    );
});


const mainPinMarker: L.Marker<any> = L.marker(
  {
    lat: LATITUDE,
    lng: LONGITUDE,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

addFormCoordinate(mainPinMarker);

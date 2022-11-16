import L from 'leaflet';

const mapFilters = document.querySelector('.map__filters');

const mapContent = Array.from(mapFilters.children).forEach(button => {
  button.setAttribute('disabled', '');
});


const map = L.map('map-canvas')
  .setView({
    lat: 35.6762,
    lng: 139.6503,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap </a>',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../../leaflet/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.6762,
    lng: 139.6503,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

import { getRandomFloat } from './utils/common.js';
import { getRandomInt } from './utils/common.js';
import { CHECKTIME } from './constants/constants.js';
import { FEATURES } from './constants/constants.js';
import { getRandomArrayElements } from './utils/common.js';
import { PHOTOS } from './constants/constants.js';
import { ADVCOUNT } from './constants/constants.js';



export const addAdvertisement = () => {
  const advertisement = [];

  for (let i = 0; i <= ADVCOUNT; i++) {
    advertisement.push({
      author: {
        avatar: `img/avatars/user${getRandomInt(1, 10)}.png`
      },
      offer: {
        title: 'Уютная квартира у озера',
        address: `${getRandomFloat(60, 50, 6)}, ${getRandomFloat(20, 10, 6)}`,
        price: Math.floor(Math.random() * 100),
        type: 'flat',
        rooms: Math.floor(Math.random() * 10),
        guest: Math.floor(Math.random() * 10),
        checkin: CHECKTIME[getRandomInt(2, 0)],
        checkout: CHECKTIME[getRandomInt(2, 0)],
        features: getRandomArrayElements(FEATURES),
        description: 'Отличная техника, все удобства и красивый вид из окна',
        photos: getRandomArrayElements(PHOTOS),
        location: {
          x: getRandomFloat(35.70000, 35.65000, 5),
          y: getRandomFloat(139.80000, 139.70000, 5)
        }
      }
    })
  }

  return advertisement;
}

addAdvertisement();

import { getRandomFloat, getRandomInt, getRandomArrayElements, getRandomArrayElement } from '../utils/common';
import { TYPE, CHECKTIME, FEATURES, PHOTOS, ADVCOUNT, TITLES, DESCRIPTIONS } from '../constants/constants';

export const addAdvertisement = () => {
  const advertisement = [];

  for (let i = 0; i <= ADVCOUNT; i++) {
    advertisement.push({
      author: {
        avatar: `img/avatars/user${getRandomInt(10, 1)}.png`
      },
      offer: {
        title: getRandomArrayElement(TITLES),
        address: `${getRandomFloat(60, 50, 6)}, ${getRandomFloat(20, 10, 6)}`,
        price: Math.floor(Math.random() * 100),
        type: getRandomArrayElement(TYPE),
        rooms: Math.floor(Math.random() * 10),
        guest: Math.floor(Math.random() * 10),
        checkin: CHECKTIME[getRandomInt(2, 0)],
        checkout: CHECKTIME[getRandomInt(2, 0)],
        features: getRandomArrayElements(FEATURES),
        description: getRandomArrayElement(DESCRIPTIONS),
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

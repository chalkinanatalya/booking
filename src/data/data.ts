import { getRandomFloat, getRandomInt, getRandomArrayElements, getRandomArrayElement } from '../utils/common';
import { TYPE, CHECKTIME, FEATURES, PHOTOS, ADVCOUNT, TITLES, DESCRIPTIONS } from '../constants/constants';

export type AdvertisedType = {
  author: {
    avatar?: string;
  },

  offer: {
    title?: string,
    address?: string,
    price?: number,
    type?: string,
    rooms?: number,
    guests?: number,
    checkin?: string,
    checkout?: string,
    features?: string[],
    description?: string,
    photos?: string[],
    location?: {
      lat: number,
      lng: number
    }
  }
}

export const addAdvertisementCard = (): AdvertisedType => {

  return {
    author: {
      avatar: `img/avatars/user${getRandomInt(10, 1)}.png`
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${getRandomFloat(60, 50, 6)}, ${getRandomFloat(20, 10, 6)}`,
      price: Math.floor(Math.random() * 100_000),
      type: getRandomArrayElement(TYPE),
      rooms: Math.floor(Math.random() * 10),
      guests: Math.floor(Math.random() * 10),
      checkin: CHECKTIME[getRandomInt(2, 0)],
      checkout: CHECKTIME[getRandomInt(2, 0)],
      features: getRandomArrayElements(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArrayElements(PHOTOS),
      location: {
        lat: getRandomFloat(35.70000, 35.65000, 5),
        lng: getRandomFloat(139.80000, 139.70000, 5)
      }
    }
  }
}

export const addAdvertisement = () => {
  return new Array(ADVCOUNT).fill(null).map(() => addAdvertisementCard());
}

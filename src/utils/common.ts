export const getRandomInt = (max: number, min: number): number => {
  if (max >= 0 && max >= min && min >= 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  throw new Error('Incorrect input');
}

export const getRandomFloat = (max: number, min: number, decimals: number): number => {
  if (max >= 0 && max >= min && min >= 0) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
  }

  throw new Error('Incorrect input');
}

export const getRandomArrayElement = (elements: string[], ): string => {
  return elements[getRandomInt(elements.length, 0)];
}

export const getRandomArrayElements = (elements: string[]): string[] => {
  const array: string[] = [];

  for(let  i = 0; i < elements.length; i++) {
    const indexOfEl = getRandomInt(elements.length - 1, 0);
    const el = elements[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
}

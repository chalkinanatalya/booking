const getRandomInt = (max: number, min: number): number => {
  if (max >= 0 && max >= min && min >= 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  throw new Error('Incorrect input');
}

const getRandomFloat = (max: number, min: number, decimals: number): number => {
  if (max >= 0 && max >= min && min >= 0) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
  }

  throw new Error('Incorrect input');
}



function getMinMax(str) {
  let arrayFromNumbers = str
    .split(' ')
    .filter(item => isFinite(item))
    .map(item => +item);
  
  let result = {
    min: Math.min.apply(null, arrayFromNumbers),
    max: Math.max.apply(null, arrayFromNumbers)
  }
  
  return result;
}

function isEmpty(obj) {
  for (let key in obj) {
    return (!obj.hasOwnProperty(key));
  }

  return true;
}

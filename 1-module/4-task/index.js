function checkSpam(str) {
  str = str.toLowerCase();
  if (str.indexOf('xxx') != -1 || str.indexOf('1xbet') != -1) return true;
  return false
}

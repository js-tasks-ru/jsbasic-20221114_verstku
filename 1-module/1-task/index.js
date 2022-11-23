function factorial(n) {
  let result = n || 1;
  n = n - 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }  
  return result;
}

function sumSalary(salaries) {
  let sum = 0;
  for (const salary in salaries) {
    if ( isFinite(salaries[salary]) ) {
      sum += salaries[salary];
    }      
  }
  return sum;
}

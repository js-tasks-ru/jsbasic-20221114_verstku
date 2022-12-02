function showSalary(users, age) {
  return users
    .filter(user => user.age <= age)
    .map(item => item.name + ', ' + item.balance)
    .join('\n');
}

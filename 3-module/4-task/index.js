function showSalary(users, age) {
  return users
    .filter((el) => el.age <= age)
    .map((el) => {
      return `${el.name}, ${el.balance}`;
    })
    .join('\n');
}

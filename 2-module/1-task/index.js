function sumSalary(salaries) {
  salaries = Object.values(salaries).filter((el) => Number.isInteger(el));

  return salaries.reduce((acc, el) => acc + el, 0);

}

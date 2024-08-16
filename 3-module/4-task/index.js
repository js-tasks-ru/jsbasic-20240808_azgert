function showSalary(users, age) {
  if (Array.isArray(users)) {
    return users
      .flat()
      .filter((el) => el.age <= age)
      .map((el) => {
        return `${el.name}, ${el.balance}`;
      })
      .join('\n');
  } else if (typeof users === 'object') {
    for ( const key in users ) {
      if ( users.age <= age ) {
        return `${users.name}, ${users.balance} `;
      }
    }
  } else {
    return false;
  }
}

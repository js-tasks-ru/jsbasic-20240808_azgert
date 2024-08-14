function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  let one = '1xBet';
  let two = 'XXX';

  // if (lowerStr.includes(one.toLowerCase())) {
  //   return true;
  // } else if (lowerStr.includes(two.toLowerCase())) {
  //   return true;
  // }

  return lowerStr.includes(one.toLowerCase()) || lowerStr.includes(two.toLowerCase());
}

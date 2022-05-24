function number(from, to) {
  let a = 0;
  for (i = from; i <= to; i++) {
    let numericString = i.toString();
    let arr = numericString.split("");
    for (j = 0; j < arr.length; j++) {
      if (arr[j] == "0") {
        a = a + 1;
      }
    }
  }
  console.log(`Total number of Zero between ${from} to ${to} is ${a}`);
}
number(1, 50);
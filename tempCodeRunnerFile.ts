/* assign interface/type to the function definition properly */
const q1 = (m, n) => {
  if (m % 2 == 0) {
    for (let i = m; i <= n; i+2) {
      var sum = 0
      sum = sum+m
    }
  }

};

//test cases
console.log(q1(1, 5));
console.log(q1(10, 20));

export default q1;
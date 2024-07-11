/* assign interface/type to the function definition properly */
function q1(m,n){
  var sum = 0;
  if (m % 2 == 0) {
    for (m; m <= n; m+=2) {
      sum += m
  }
}
if (m % 2 != 0) {
for (let i = m; i < n; i+=2) {
      sum += m+1
  }
}
    
return sum;
}
//test cases
console.log(q1(1, 5));
console.log(q1(10, 20));

export default q1;

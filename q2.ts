/* define interface for Person objects */
interface Person {
  name: string;
  age: number;
  
}

/* assign interface/type to the function definition properly */
const q2 = (Person) => {
  if (Person.age >= 15) {
    Person.age = -10
  }
};

//test cases
const input1 = { name: "John", age: 59 };
const input2 = { name: "Jane", age: 18 };

console.log(q2(input1));
console.log(q2(input2));

export default q2;

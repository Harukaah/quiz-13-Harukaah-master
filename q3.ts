/* define interface for Monster objects */
interface Monster {
  name: string;
  power: number;
}


/* assign interface/type to the function definition properly */
function q3(monsters: Monster[]): string[] {
  return monsters
    .filter(monster => monster.power >= 2)
    .map(monster => monster.name);
    
}

//test cases
const input1 = [
  { name: "Zombie", power: 10 },
  { name: "Slime", power: 2 },
  { name: "Dragon", power: 15 },
];

console.log(q3(input1));

export default q3;

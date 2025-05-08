
console.log (`simple for loop \n`);
for (let i = 0; i < 6; i++) {
  console.log(`index : ${i}`);
}

console.log(`for loop with conditions \n`);
for(i=0;i<10; i++)
{
  if(i===7) 
  console.log(`-->>  it is ${i}`);
  
  console.log(`index ${i}`);
}

console.log(`for with break and continue`);
for(i=0;i<10; i++)
{
  if(i%2 == 0) continue;
  console.log(`these numbers are ${i} odd`);
}

// Now for..in loop 
console.log(`for..in loop \n`);
let Fruits = ['mango', 'apple' , 'bannana' , "Annar" , `Amrood`];

for(let f in Fruits)
  {
    console.log(`fruits : ${f} has : ${Fruits[f]}`);
  }
  
  
  
console.log(`for..in loop objects \n`);

let person={
  age : 23,
  Name : 'rayyan',
  Grade : 'BCS'
}

for(let p in person)
{
  if(person[p]== 23) console.log(`1111111`);
  console.log(`person : ${p} has ${person[p]} >`);
}

// Now for..of loop 
let fruits = ['mango', 'apple' , 'bannana' , "Annar" , `Amrood`];

console.log(`for..of loop \n`);
for(let f of fruits)
{
  console.log(`fruits : ${f} has >`);
}

let char = 'my name !';
console.log(`char whole is: ${char} : but from for of loop `)
for(let f of char)
{
  console.log(`char : ${f} has >`);
}

console.log(`maping...`)
const User = new Map([["Name ","kakkha"],["age" ,80]]);
for(let [key  , value] of User.entries())
{
  console.log(`Map  : ${key} has > ${value}`);
}

// try catch finnaly
try{
num =10;
num/0;
}catch(error){
console.log(error);
}finally{

}

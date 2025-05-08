let arr=[1,2,3,4,5,6];
var i =0;
// while (!(arr.length)-- <   0) 
for(i=0;i<arr.length;i++){
  console.log(`${i} > ${arr[i]}`);
}

arr.pop();
for(i=0;i<arr.length;i++){
  console.log(`${i} > ${arr[i]}`);
}

arr.push(7,8);
for(i=0;i<arr.length;i++){
  console.log(`${i} > ${arr[i]}`);
}

console.log('maps and arrays ');
let square = arr.map((num)=>num*num);
console.log('squre > '+ square);

let sq = (n)=>{
for(i=0;i<arr.length;i++){
  console.log('sum > '+ n+n);
}
}
sq();

let ages=[34,12,14,18.26];
const kids = ages.filter(num => num<18);
console.log('kids are : '+ kids);

let price = [100,400,300];
let price2 =[200,800,100];
const total = price.reduce((sum , price)=> sum+price);
console.log('sum is : '+ total);

const arrTotal=(i)=>{
  return(price[i] - price2[i]);
}

for(i=0;i<price.length;i++)
console.log(arrTotal(i));

const User2 ={
  Name : '0mer',
  age : 27,
  gender:'Male'
}

const User ={
  Name : 'rayyan',
  age : 34,
  gender:'M'
}
console.log('R > '+User.Name);
console.log('R2 > '+User2.Name);

const {Name,gender}=User;
console.log('R > '+ Name , gender);
// const {Name,gender}=User2;
// console.log('R2 > '+ Name , gender);

//// Destructuring ...
const cities =['dehli' , 'Heydrabad' , 'lakhnaoo' , 'tehran' , 'samarkand' , 'buqhara'];
const [f,f4,s,t] = cities;
console.log('these are '+ t,f, f4 , s);
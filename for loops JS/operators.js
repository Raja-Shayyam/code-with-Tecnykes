// sperade operator
const nm ='jello';
function Name(){ 
  const nm ='gikko';
  console.log(nm);
};
const nam =()=> 'laloo'


let arr1=[1,2,3,4,nm];
let arr2=[arr1 ,2,3,4 , nam()];
console.log('> '+ arr2);
Name();

const Arr1=[1,2,3,4,nm];
const Arr2=[...Arr1 ,2,3,4 , nam()];
console.log( ...Arr2);
Name();
// console.log( Arr2.length,' > '+ Arr1.splice(0,2));
// console.log('/ '+ Arr1);
// Arr1.splice(0,2);
console.log(Arr2);

const obj1={
  a:132,
  b:354,
  c:576
}
const obj2={
  d:732,
  e:854,
  f:976
}
const OBJ ={
  a:0,
  ...obj1,
  x:90,
  ...obj2,
  f:2,
  e:5
}
console.log(OBJ);

console.log('-------------------');
function addition()
{
  const num =[1,3,5,7];
  const n = num.reduce((sum,num)=>sum+num,0);
  return n;
}
console.log(addition());

const num =[1,3,5,7];

function Addition(...num)
{
  return n = num.reduce((sum,num)=>sum+num,0);
}
console.log(Addition(2,4,5));
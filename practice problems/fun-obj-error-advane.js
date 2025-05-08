/*
<!-- <script> -->
  //
{
    const _btn = document.querySelector('#btn-run');

  _btn.addEventListener('click',()=>{
  let _name = document.querySelector('#name').value ;
  let _age = document.querySelector('#age').value;
    console.log(`salam sir "${_name}" your age is ${_age}`);
    
  });
}

//
{
    let numbers =[1,2,3,4,5,6,7,8,9,9];
  let total=0;
  for(let i=0 ; i<numbers.length ; i++)
  {
    total += numbers[i];
  }
console.log('total = '+ total);
//========================================
const _btn = document.querySelector('#btn-run');
  let number=[1,2,3,4,5,6];
  _btn.addEventListener('click',()=>
  {
    function ans(number)
    {
      return number.reduce((sum,number)=> sum+number)
    }
    let NUM= eval(number);
    console.log('ans : '+ ans(number));
    console.log(`the evel is :: ${NUM}`)
  })
}
//
{
  let isAdmin=true;
  if(isAdmin)
  {
    console.log("isAdmin is true : "+ isAdmin);
  }
  isAdmin=false;
  (isAdmin) ? console.log("isAdmin is true : ") : console.log('not a admin')
  let mark=91;
  if(mark/2 === 45)
  console.log(mark/2);
  else
  console.log('else condition '+ mark/2)
}

//Arrys
{
let fruits =['apple','Banana','Chery.'];
fruits.push('Orange');
console.log(fruits);
//fruits[2].push('uu');
//console.log(fruits);

fruits.splice(0,1);
console.log(fruits);
}
<!-- </script> --> */



const btn = document.getElementById('btnn');

btn.addEventListener('click',()=>
{
  let greed = document.querySelector('#input').value;
  document.querySelector('#output').value=`Salam  ${greed}.`;

  console.log('nhi'+greed+' - ');
});

// const butn =document.querySelector('#bt');
function addition()
{
  let v1 = document.querySelector('#input-value').value;
  document.querySelector('#output-value').value= eval(v1);
  console.log('hhh '+ v1);
}

let V1=1;
let V2=8;
function add(V1,V2)
{
  let Sum = V1+V2;
  console.log(Sum);
  if(Sum %2===0)
    console.log('even ...');
  else
  console.log('odd ...');
}
add(V1,V2)

let person =
{
  Name :'ahmed',
  Age : 23,
  occupation : 'Ahmadabad'
}

console.log(`name: ${person.Name}\nage: ${person.Age}\noccupation: ${person.occupation}`);

let Car=
{
  Name:'Honda',
  model:'2001',
  current_year : 2025
}
// console.log(Name,model,current_year);
const {Name,model,current_year}=Car;
console.log(`${Name} ,  ${current_year} , ${model} `);

let Student=
{
  Name : 'shayan',
  Age : 23 ,
  Grade : 'A',
  GPA : 3.98
}

// const student=
const {property1,property2,property3,property4} = Student;
console.log(`1 ${property1} , 2 ${property2} , 3 ${property3} , 4 ${property4}`);

{
  let ans;
function div(n1,n2)
{
  try{
    if(n2===0)
      throw new Error('never gives any number : infinity');

  console.log('=> '+ n1/n2);
  ans = n1/n2;
}catch(error){
  console.log(error.message);
}finally{
  console.log('ans : '+ ans);
}
}

div(4,0);
}

{
  function validInputCheack(num)
  {
    if(num!==98){
    try{
        throw new Error(`its (${num}) not a number` );
        // console.log(num);
    }catch(error){
      console.log(error.message);
    }
  }else
  console.log('its a number '+num)
  }

  validInputCheack('billal');
  validInputCheack(98);
  validInputCheack('9');
}


// {

// const fs = require('fs');

// function readFile(fileName) {
//   fs.readFile(fileName, 'utf8', (error, contents) => {
//     if (error) {
//       if (error.code === 'ENOENT') {
//         console.log(`File ${fileName} not found.`);
//       } else {
//         console.log(`An error occurred: ${error.message}`);
//       }
//     } else {
//       console.log(contents);
//     }
//   });
// }

// // Example usage:
// readFile('example.txt');  // Replace 'example.txt' with your file name

// }


// {

//   const fs = require('fs');

// function readFile(fileName) {
//   try {
//     const contents = fs.readFileSync(fileName, 'utf8');
//     console.log(contents);
//   } catch (error) {
//     if (error.code === 'ENOENT') {
//       console.log(`File ${fileName} not found.`);
//     } else {
//       console.log(`An error occurred: ${error.message}`);
//     }
//   }
// }

// // Example usage:
// readFile('example.txt');  // Replace 'example.txt' with your file name


// }


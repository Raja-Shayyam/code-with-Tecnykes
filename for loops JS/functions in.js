const Greating = (messege , msg1 , msg2) =>
{
  console.log( 'messages are : ' + messege +" , " + msg1 +' , ' + msg2);
}

Greating("how are you" , 'hashim' , "salam");

function Great(name='kokoo'){
  console.log(name);
}

Great();
Great('lumaz');

// functions with array
try{
function ProcssArray(arr,callBack)
{ 
  // var i =0 ;
  //while(i == arr.length)
  for(let i=0;i < arr.length ; i++)
 console.log(callBack(arr[i]));
  
}
let A=[1,2,3,4];
//// this is also method 
// ProcssArray(A,function(num){
//   console.log(10*num);
// });

ProcssArray(A , (num)=>{
  console.log(10*num);
})
/*  if made upper alla comment and nichy allabun comment we have no error */
// let Cback= (num)=>{
//   return(2*num);
// }

ProcssArray(A ,Cback);

}catch(error)
{
  console.log('this is '+ error);
}finally{console.log("ho gayya !")}
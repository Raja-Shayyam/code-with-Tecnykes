var i=0;
console.log(`kokoo called ${i++}`);
console.log(`kokoo called ${i++}`);
console.log(`kokoo called ${i++}`);
console.log(`kokoo called ${i++}`);

console.log(`-----------------------`);

console.log(`kokoo called ${i++} (1)`);
console.log(`kokoo called ${i++} (2)`);
setTimeout(() => {
  console.log(`kokoo in set time called ${i++} (3)`) 
}, 2000);
console.log(`kokoo called ${i++} (4)`);

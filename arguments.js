// arguments is array like object.

function sum(a,b,c){
  console.log(arguments);
  const args = [...arguments];
  console.log(args);
  const total = a + b + c ;
  return total;
}
const sample = sum(23, 4, 5, 12, 78);
console.log(sample);

// function er parameter er length jana jay
console.log(typeof sum);
console.log(sum.length); // find out the length of parameter.
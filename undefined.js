/**
 8 ways to get undefined---
1. Variable that is not initialized will give  undefined.
2. Function with no return.
3. parameter that is not passed will be undefined.
4. if the return has nothing on the right side give undefined.
5. property that doesn't exist on object that will give undefined.
6. accessing the array elements outside of the index range will give undefined.
7. deleting an element of array will give undefined.(should not do it.use splice()).
8. directly set a value by undefined.(should not do it.use null)
*/


// no-1
let first ;
console.log(first);

// no-2
function add(a,b){
  const total = a + b;
}
const result = add(1,2);
console.log(result);

// no-3
function multiplication(a,b,c,d){
  const mult = a * b * c * d;
  console.log(a,b,c,d);
}
multiplication(1,2)

// no-4

function doNegative(a,b){
  if(a < 0 || b < 0){
    return 
  }
  else{
    return;
  }
}
console.log(doNegative(1,-2));

// no-5
const player = {
  name : 'abdullah',
  age : 29,
  address : 'Bangladesh'
}
console.log(player.age,player.weight);

// no-6

const numbers = [ 12, 3, 4, 55, 66, 20]
console.log(numbers[8]);


//no-7
const array = [12, 34, 56, 78, 98]
// you should not do it.Instead use splice()
delete array[1];
console.log(array[1]);

// no-8
const tenth = undefined;
console.log(tenth);
// should not use undefined.instead use null if needed.
console.log(typeof undefined);
console.log(typeof null); // null typeof is object in js

//  kono ekta data set kora hoy nai ta seita defined kora hoy null diye.
const data = {result2:[],updated: null}
// Javascript is a dynamic typed language.

// primitive type
const a = 12;
const b = 'Allah is almighty';
const c = true;

// non-primitive type
const numbers = [1, 2, 3, 4, 5];
const person = {
  name : 'hasnat',
  age : 29
}

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof numbers);
console.log(typeof person);


//------------------

let x = 5;
let y = x;
console.log(x,y);
y = 4;
console.log(x,y);


let p = {job: 'Web Developer'};
let q = p;
console.log(p,q);
q = {job: 'Backend Developer'};  // re assign korle reference kete diye notun refer kore
// q.job = 'font end developer';  //( particular change korle duitar moddhei change hoy karon non-primitive data type reference dhore rakhe)
console.log(p,q);

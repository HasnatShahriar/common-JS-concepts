function stopwatch(){
  let count = 0;
  return function(){
    count++;
    return count;
  }
}

const watch1 = stopwatch()
console.log(watch1());
console.log(watch1());
console.log(watch1());
const watch2 = stopwatch()
console.log(watch2());
console.log(watch2());
console.log(watch2());
const watch3 = stopwatch()
console.log(watch3());
console.log(watch1());
console.log(watch1());

//--------------------Simple Example-----------------------

function outerFunction() {
  const outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVariable); // innerFunction has access to outerVariable
  }

  return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); // Output: "I am from the outer function"


//--------------------Simple Example another system-----------------------

function outerFunction2() {
  const outerVariable = 'I am from the outer function';

  function innerFunction2() {
    console.log(outerVariable); // innerFunction has access to outerVariable
  }

  innerFunction2()
}

outerFunction2();




//-----------------another simple example------------

function outer(){
  const name = 'hasnat';
  return function inner(){
    console.log(name);
  }
}

const inner = outer();
inner();


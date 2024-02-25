print5(); // full function ke hoisting kore

for(var i = 0; i < 5; i ++){
  console.log(i);
}
console.log('outside',i);  // hoisting korar jonno 

// hoisting kore er jonnoi always let use kora lagbe..not var

  function print5(){
  console.log(5);
}
 
print5();
function add(a,b){
  if(b>5){
    const sum = 25 + a + b;
  }
  else{
    const sum = 5 + a + b;
    var result = sum;
  }
  console.log(result);
}

add(2,6);  // undefined because only the (var result) hoisting..var block scope maintain  kore na..tai eita use kora jebe na

add(2,3);  // 10 because  the (var result) hoisting..var block scope maintain  kore na..tai eita use kora jebe na
/**
truthy value :
1.true
2.any number except 0 (zero)
3.any string except "" (empty string)
4.{},all object
5.[],all array


falsy value :
1.false
2.0
3.""  (empty string)
4.undefined
5.null


 */





// optional
const x = null;
if (!x) {
  console.log('value is falsy');
}
else {
  console.log('value is truthy');
}

const y = 6;
if (!!y) {
  console.log('value is truthy');
}
else {
  console.log('value is falsy');
}

function greetingHandler(name){
  console.log('Assalamu Alaikum',name);
}

function greetMorning(name){
  console.log('Good Morning',name);
}

function greetEvening(name){
  console.log('Good Evening',name);
}

function greetNight(name){
  console.log('Good Night',name);
}

function greeting(sample,name){
  // console.log(sample);
  sample(name);
}
greeting(greetingHandler,'Abdullah');
greeting(greetMorning,'Prijom');
greeting(greetEvening,'Shakil Vai');
greeting(greetNight,'Momin')


// --------------------Simple Example---------------------

function main (callback){
  callback();
}

function a (){
  console.log('Alhamdulillah');
}

main(a)


//--------------------Another example---------------------

function show(name,age){
  console.log('My name is:',name,'My age is:',age);
}
function fun(name,age,callback){
  console.log('Welcome from Main Function');
  callback(name,age);
}

fun('hasnat',29,show);
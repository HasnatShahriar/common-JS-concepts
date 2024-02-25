function greeting(sample,name){
  // console.log(sample);
  sample(name);
}

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

greeting(greetingHandler,'Abdullah');
greeting(greetMorning,'Prijom');
greeting(greetEvening,'Shakil Vai');
greeting(greetNight,'Momin')

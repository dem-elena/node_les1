setTimeout(() => {
  console.log('Был диван,');
},0);

setTimeout(() => {
  console.log('Выйди вон!');
},18);

setImmediate(() => {
  console.log('На диване');
});

process.nextTick(() => {
  console.log('Чемодан,');
});

setTimeout(() => {
  console.log('Кто не верит –');
},15);
setImmediate(() => {
  console.log('Ехал слон.');
});

process.nextTick(() => {
  console.log('В чемодане');
});

console.log('Плыл по морю');

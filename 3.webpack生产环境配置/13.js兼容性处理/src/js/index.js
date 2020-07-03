// import '@babel/polyfill';  // 全部js的兼容处理，缺点：提及太大了·

const add = (x, y) => {
  return x + y;
};
console.log(add(2, 5));

const promise = new Promise(resolve => {
  setTimeout(() => {
    console.log('定时器执行完了~');
    resolve();
  }, 1000);
});

console.log(promise);

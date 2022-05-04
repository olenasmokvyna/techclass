//------------------------------setTimout
const start = (callback) => {
  setTimeout(() => {
    callback("One");
    setTimeout(() => {
      callback("Two");
      setTimeout(() => {
        callback("Three");
      }, 1000);
    }, 1000);
  }, 1000);
};
start((text) => console.log(text));

//------------------------------async await
const wait = (ms) => new Promise((res) => setTimeout(res, ms));
const startAsync = async (callback) => {
  await wait(1000);
  callback("Hello");
  await wait(1000);
  callback("And Welcome");
  await wait(1000);
  callback("To Async Await Using TypeScript");
};
startAsync((text) => console.log(text));

//-----------------------------Promise

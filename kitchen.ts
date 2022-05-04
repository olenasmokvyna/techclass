function bake() {
  console.log("putting the cake in the oven");
  setTimeout(function () {
    console.log("baking");
    setTimeout(function () {
      console.log("done");
    }, 5000);
  }, 2000);
}
//bake();
console.log("hello");

function sleep(amount: number): Promise<void> {
  const p: Promise<void> = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(null);
    }, amount);
  });
  return p;
}

function lunch() {
  console.log("cutting vegetables");
  sleep(2000).then(function () {
    console.log("cooking the meat");
  });
}
lunch();

function sleep(amount: number): Promise<void> {
  const p: Promise<void> = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(null);
    }, amount);
  });
  return p;
}

function lunch() {
  console.log("lunch: cutting vegetables");
  sleep(2000).then(function () {
    console.log("lunch: cooking the meat");
  });
}
// lunch();

function dinner() {
  console.log("dinner: heating lunch leftovers");
  sleep(3000).then(function () {
    console.log("dinner: getting a dessert");
  });
}
// dinner();

function cutVegetables(): Promise<string> {
  console.log("cutting the vegetables");
  const sleepPromise = sleep(2000);
  const nextPromise = sleepPromise.then(function () {
    console.log("vegetables are cut!");
    return "yummy vegetables";
  });
  return nextPromise;
}

function makeSoup(): Promise<string> {
  return cutVegetables().then(function (veggies) {
    console.log(`putting ${veggies} in the soup`);
    return sleep(7000).then(function () {
      console.log("the soup is finished!");
      return "tomato soup";
    });
  });
}

function lunch2EatSoupThenEatSandwich() {
  makeSoup().then(function (soupName) {
    console.log(`eating ${soupName}. Yummy!`);
    makingSandwich().then(function (sandwichName) {
      console.log(`eating ${sandwichName}. The crust is great!`);
    });
  });
}

function lunch3() {
  // Goal: Make soup & sandwich at the same time
  const makeSoupPromise = makeSoup();
  const makeSandwichPromise = makingSandwich();

  // Eat after they are both cooked
  makeSoupPromise.then(function (soupName) {
    makeSandwichPromise.then(function (sandwichName) {
      console.log(`Enjoy your ${sandwichName} and ${soupName}!`);
    });
  });
}
// --------------------------------Promise.all
function lunch4() {
  const makeSoupPromise = makeSoup();
  const makeSandwichPromise = makingSandwich();
  const everythingPromise = Promise.all([makeSoupPromise, makeSandwichPromise]);

  everythingPromise.then(function (values) {
    const soupName = values[0];
    const sandwichName = values[1];
    console.log(`Enjoy your ${sandwichName} and ${soupName}!`);
  });
}
// -----------------------------------async await
async function lunch5() {
  const makeSoupPromise = makeSoup();
  const makeSandwichPromise = makingSandwich();

  const soupName = await makeSoupPromise;
  const sandwichName = await makeSandwichPromise;
  console.log(`Enjoy your ${sandwichName} and ${soupName}!`);
  // This is the same as makeSoupPromise.then(function(soupName){})
}

function makingSandwich() {
  return cutVegetables().then(function (veggies) {
    console.log("Getting ingredients");
    return sleep(2000).then(function () {
      console.log("Making Sandwich");
      return sleep(2000).then(function () {
        console.log("Sandwich is ready to eat!");
        return "Vegan Sandwich";
      });
    });
  });
}
lunch5();

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
function sleep(amount) {
    var p = new Promise(function (resolve, reject) {
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
lunch();
function dinner() {
    console.log("dinner: heating lunch leftovers");
    sleep(3000).then(function () {
        console.log("dinner: getting a dessert");
    });
}
dinner();

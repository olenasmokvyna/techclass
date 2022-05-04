// interface Fruits {
//     orange: string,
//     banana?: boolean,
//     apple: string,
// }
// let snack: Fruits = {
//     orange: 'juice',
//     banana: true,
//     apple: 'sliced',
// };
var banana = {
    name: "banana",
    color: "yellow",
    price: 1.5,
    local: true,
};
var apple = {
    name: "apple",
    color: "red",
    price: 1.75,
    local: true,
};
var avocado = {
    name: "avocado",
    color: "green",
    price: 2.0,
    local: false,
};
var cart = {
    items: [],
};
function BuyApples(cart, count) {
    for (var i = 0; i < count; i++) {
        cart.items.push(apple);
    }
}
// function pretty(cart: ShoppingCart) {
//   if (cart.items === []) {
//     return "Empty cart"
//   } else {
//     return `Cart has: ${cart.items.length}`
//   }
//   // return JSON.stringify(cart, null, 2)
// }
function pretty2(cart) {
    if (cart.items.length == 0) {
        return "Empty cart";
    }
    else {
        return "Cart has: " + cart.items.length;
    }
    // return JSON.stringify(cart, null, 2)
}
console.log("my cart originally looks like this", pretty(cart));
BuyApples(cart, 1);
console.log("my cart now looks like this", pretty(cart));

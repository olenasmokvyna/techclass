var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// -----------------IIFE
(function () {
    /* ... */
})();
//   ---------------Arrow function IIFE
(() => {
    /* ... */
})();
//   ---------------Async IIFE
(() => __awaiter(this, void 0, void 0, function* () {
    /* ... */
}))();
//------------------Immediately Invoked Function Expression
(function () {
    var x = 20;
    var y = 20;
    var answer = x + y;
    console.log(answer);
})();

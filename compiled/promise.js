var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const startAsync = (callback) => __awaiter(this, void 0, void 0, function* () {
    yield wait(1000);
    callback("Hello");
    yield wait(1000);
    callback("And Welcome");
    yield wait(1000);
    callback("To Async Await Using TypeScript");
});
startAsync((text) => console.log(text));

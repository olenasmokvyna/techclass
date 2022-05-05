let outfit = {
    shirt: "grey",
    pants: "blue",
    shoes: "black",
    match: true,
};
let islandOutfit = {
    pants: "black",
    match: false,
};
const anil = { wearToday: undefined };
function chooseOutfit(person, outfitName) {
    if (outfitName === "hawaiian") {
        person.wearToday = islandOutfit;
    }
    else {
        person.wearToday = outfit;
    }
}
chooseOutfit(anil, "hawaiian");
console.log(anil);
console.log("hello");
const myApprenticeshipClass = {
    feedback: [7, 1, 8],
};
function avgFeedback(feedback) {
    let sum = 0;
    for (let i = 0; i < feedback.length; i++) {
        console.log(feedback[i]);
        sum = sum + feedback[i];
    }
    const average = sum / feedback.length;
    return average;
}
let myResult = avgFeedback(myApprenticeshipClass.feedback);
console.log("myresult is ", myResult);

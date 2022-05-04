var outfit = {
    shirt: "grey",
    pants: "blue",
    shoes: "black",
    match: true,
};
var islandOutfit = {
    pants: "black",
    match: false,
};
var anil = { wearToday: undefined };
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
var myApprenticeshipClass = {
    feedback: [7, 1, 8],
};
function avgFeedback(feedback) {
    var sum = 0;
    for (var i = 0; i < feedback.length; i++) {
        console.log(feedback[i]);
        sum = sum + feedback[i];
    }
    var average = sum / feedback.length;
    return average;
}
var myResult = avgFeedback(myApprenticeshipClass.feedback);
console.log("myresult is ", myResult);

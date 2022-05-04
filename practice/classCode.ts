// var animals = {
//   pets: ["dogs", "cats"],
//   wild: ["tiger"],
//   rescued: true,
//   adopted: {
//     pets: 5,
//     wild: 2,
//   },
// };
interface Fashion {
  shirt?: string;
  pants: string;
  shoes?: string;
  match: boolean;
}

let outfit: Fashion = {
  shirt: "grey",
  pants: "blue",
  shoes: "black",
  match: true,
};

let islandOutfit: Fashion = {
  pants: "black",
  match: false,
};

interface Person {
  wearToday: Fashion | undefined;
}

const anil: Person = { wearToday: undefined };

function chooseOutfit(person: Person, outfitName: string) {
  if (outfitName === "hawaiian") {
    person.wearToday = islandOutfit;
  } else {
    person.wearToday = outfit;
  }
}

chooseOutfit(anil, "hawaiian");

console.log(anil);
console.log("hello");

// function with for loop

interface ApprenticeshipClass {
  feedback: number[];
}

const myApprenticeshipClass: ApprenticeshipClass = {
  feedback: [7, 1, 8],
};
function avgFeedback(feedback: number[]) {
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

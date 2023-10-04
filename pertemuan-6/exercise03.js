// EXERCISE 03 - IMMANUELA GLORIA GRIFIN
// Rabu, 30 Agustus 2023

let people = ["Greg", "Mary", "Decon", "James"]
console.log(people)

// no.1
for (let i = 0; i < people.length; i++) {
    console.log(people[i])
}
//no.2
people.forEach(function (array){
    console.log(array)
});
// no.3
people.shift()
console.log(people);
//no.4
people.pop()
console.log(people);
//no.5
people.unshift("Matt");
console.log(people)
//no.6
people.push("Imel");
console.log(people)
//no.7
for (let i = 0; i < people.length; i++) {
    if (people[i] === "Mary") {
        console.log("Mary");
        break;
    }
    console.log(people[i])
}
//no.8
let peopleTwo = people.slice(2);
console.log(peopleTwo)
//no.9
people.splice (2, 1, "Elizabeth", "Artie");
console.log(people);
//no.10
let withBob = people.concat("Bob");
console.log(withBob);


// OBJECT EXERCISES
console.log("OBJECT EXERCISE");

let programming = {
    languages : ["JavaScript", "Python", "Ruby"],
    isChallenging : true,
    isRewarding : true,
    difficulty : 8,
    jokes : "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
//no.1
programming.languages.push("Go")
//no.2
programming["Difficulty"] = 7;
//no.3
delete programming.jokes;
//no.4
programming.isFun = true
//no.5
programming.languages = programming.languages.map
((languages, index) => [index] - [languages]);
console.log(programming);


// thank you







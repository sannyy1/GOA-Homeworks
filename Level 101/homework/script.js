const userReview1 = {
    name: "dato",
    status: "parent",
    review: "cool academy!"
};


const userReview2 = {
    name: "sandro",
    status: "child",
    review: "magari kursia"
};


const userReview3 = {
    name: "Maia",
    status: "parent",
    review: "madloba goas"
};


const academy = {
    name: "Goa Academy",
    courses: ["Python", "Java", "Html", "Css"],
    socialLink: "https://www.facebook.com/groups/1133392237455746",
    reviews: {
        review1: userReview1,
        review2: userReview2,
        review3: userReview3
    }
};


console.log("Properties of the Academy object:");
console.log(Object.keys(academy));

console.log("\nValues of the Academy object:");
console.log(Object.values(academy));

const hasPropertyName = academy.hasOwnProperty('name');
console.log("\nHas 'name' property:", hasPropertyName);

const academyWithMember = {
    ...academy,
    member: "Member1"
};


console.log("\nMerged Academy with member:");
console.log(academyWithMember);

Object.freeze(academy);

const isAcademyFrozen = Object.isFrozen(academy);
console.log("\nIs the Academy object frozen?:", isAcademyFrozen);
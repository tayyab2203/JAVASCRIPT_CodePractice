const car = {
    model: "Toyota", 
    year: 2020, 
    price: 4000000,
    condition: "AlmostNew",
}
console.log(car);


// practice Question:
// Create an object literal for a twitter(X) with properties like userName, Content, Likes, repost, tags.

const twitterPost = {
    userName: "@Tayyab._.2321",
    content:"This post is related to javascript roadmap",
    likes: 150,
    repost: 50,
    tags: ["#javaScript", "#roadMap", "#webDev"]
}
console.log(twitterPost);

let rep = twitterPost.repost;
console.log(`This post has been reposted ${rep} times.`);

// Manipulation in objects:
const student = {
    name: "Tayyab",
    age: 21,
    cpga: 3.32,
    subjects: ["JavaScript", "Python", "Java"],
    startingYear: 2021,
}

student.startingYear = 2022; // updating the starting year
student.subjects.unshift("C++"); // adding a new subject
delete student.startingYear; 
console.log(student);
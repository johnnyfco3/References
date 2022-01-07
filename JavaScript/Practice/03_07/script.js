/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const test = {
  name: "Johnny Tejada",
  happy: false,
  emails: ["johnnyfran20002@gmail.com", "tejadaj6@newpaltz.edu"],
  job_preferance: "Web Developer",
};

console.log(test.name);
console.log(test.happy);
console.log(test.emails[0]);
console.log(test.emails[1]);
console.log(test["job_preferance"]);

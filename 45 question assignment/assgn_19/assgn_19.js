// array of guests
const guests = ["John", "Paul", "George", "Ringo"];
// remove the guest who can't make it and store it in a variable
const guestWhoCantMakeIt = guests.splice(2, 1);
// add new guest to the end of the array
guests.push("Yoko");
// invite every guest to dinner
for (let i = 0; i < guests.length; i++) {
    console.log(`I would like to invite you to dinner ${guests[i]}`);
}
// print the guest who can't make it
console.log(`${guestWhoCantMakeIt} can't make it`);
// print the message that we found a bigger table
console.log("We found a bigger table!");
// add new guest with name "Pete" to the beginning of the array
guests.unshift("Pete");
// add new guest with name "Stu" to the middle of the array
guests.splice(2, 0, "Stu");
// add new guest with name "Mike" to the end of the array
guests.push("Mike");
// print number of people invited to party
console.log(`Number of people invited to party: ${guests.length}`);
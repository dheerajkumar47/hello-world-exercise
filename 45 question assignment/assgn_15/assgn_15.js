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
// array of five users including admin
const users = ["admin", "user1", "user2", "user3", "user4"];
// say hello to all users except admin, for admin say hello admin, would to see status report
for (let i = 0; i < users.length; i++) {
    if (users[i] === "admin") {
        console.log("Hello admin, would you like to see status report?");
    } else {
        console.log("Hello " + users[i]);
    }
}
// set array length to 0
users.length = 0;
// If the list is empty, print the message We need to find some users!
if (users.length === 0) {
    console.log("We need to find some users!");
}
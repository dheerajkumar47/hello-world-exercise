// Make a list of five or more usernames called current_users.
const current_users = ["admin", "user1", "user2", "user3", "user4"];
// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
const new_users = ["user1", "user2", "hr0", "hr1", "user5"];
// loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available. Case Sensitive
for (let i = 0; i < new_users.length; i++) {
    if (current_users[i].toLowerCase() === new_users[i].toLowerCase()) {
        console.log("Username already taken");
    } else {
        console.log("Username available");
    }
}
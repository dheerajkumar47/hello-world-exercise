const person_name = "Dheeraj kumar";
// print person_name in upper case, lower case
console.log(person_name.toUpperCase());
console.log(person_name.toLowerCase());
// convert person_name to title case
console.log(
  person_name.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  })
);

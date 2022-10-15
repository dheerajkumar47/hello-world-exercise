const magicians = ["Harry Houdini", "David Blaine", "Teller"];
const show_magicians = (magicians) => {
    magicians.forEach(magician => {
        console.log(`${magician}`);
    });
}
const make_great = (magicians) => {
    // modify the original array
    magicians.forEach((magician, index) => {
        magicians[index] = `Great ${magician}`;
    });
}
make_great(magicians);
show_magicians(magicians);
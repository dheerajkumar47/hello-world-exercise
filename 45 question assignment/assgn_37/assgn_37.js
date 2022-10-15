const make_shirt = (size = "large", text) => {
    console.log(`The size of the shirt is ${size} and the text on it is ${text}`);
}

make_shirt(size = undefined, "I love JavaScript");
make_shirt("medium", "I love JavaScript");
make_shirt("XL", "I love JavaScript");
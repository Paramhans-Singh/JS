function generateID(start) {
    // Write logic here
    let x =start;
    return function () {
        return`A-2021_${x++}`;
    }
}

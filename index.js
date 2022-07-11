// Write your solution here!
const cats = ["Milo","Otis","Garfield"]

function destructivelyAppendCat(Ralph) {
    cats.push("Ralph");
}
function destructivelyPrependCat(Bob) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(Bob) {
    cats.pop(3);
}
function destructivelyRemoveFirstCat(Milo) {
    cats.shift(0);
}
function appendCat(Broom) {
    return [...cats, "Broom"];
}
function prependCat(Arnold) {
    return ["Arnold", ...cats]
}
function removeLastCat() {
    return cats.slice(0,2);
}
function removeFirstCat() {
    return cats.slice(1,1)
}
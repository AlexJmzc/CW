function incrementString (strng) {
    const body = strng.slice(0, -1);
    const lastDigit = strng.slice(-1).match(/[0-9]/);

    return lastDigit === null 
        ? strng + "1"
        : lastDigit != 9
        ? body + (+lastDigit + 1)
        : incrementString(body) + "0";
}



console.log(isNaN(Number("a")));

console.log(incrementString("aa01"))
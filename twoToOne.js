function longest(s1, s2) {
    let long = s1 + s2;

    let res = new Set(long);
    res = [...res].sort().toString().replace(/,/g,'');

    return res;
}

a = "xyaabbbccccdefww";
b = "xxxxyyyyabklmopq";

console.log(longest(a,b));
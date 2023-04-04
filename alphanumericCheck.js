function alphanumeric(string) {
    if (!/^[a-zA-Z0-9]+$/.test(string)) return false;
    return true;
}

console.log(alphanumeric("Mazinkaiser"));
console.log(alphanumeric("hello world_"));
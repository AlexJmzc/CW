function printerError(s) {
    let total = s.length;
    let errors = 0;
    
    for(let i = 0; i < total; i++){
        if(s.charAt(i).toLowerCase() > 'm')
        {
            errors++;
        }
    }

    return errors + "/" + total;
}


console.log(printerError("aaabbbbhaijjjm"));

console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))
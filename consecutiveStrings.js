function longestConsec(strarr, k) {
    if(strarr.length < k || k <= 0 || strarr.length == 0)
    {
        return "";
    }
    else
    {
        let concat = ['1'];
        for (let i = 0; i < strarr.length; i++) {
            let word = "";
    
            for (let y = i; y < i+k; y++) {
                if(strarr[y] == undefined)
                {
    
                }
                else
                {
                    word += strarr[y];
                }
            }
            
            if(word.length > concat[0].length)
            {
                concat[0] = word;
            }
            
            
        }
    
        return concat[0];
    }
}

strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];

console.log(longestConsec(strarr, 2));

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2));
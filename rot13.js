function rot13(str) {
    let dictionary = {
        'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
        'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
        'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
        'M': 'Z' ,
        'N': 'A', 'O': 'B', 'P': 'C', 'Q': 'D',
        'R': 'E', 'S': 'F', 'T': 'G', 'U': 'H',
        'V': 'I', 'W': 'J', 'X': 'K', 'Y': 'L',
        'Z': 'M'
    };

    str = str.split('')
    for (let i = 0; i < str.length; i++) {
        
        if(dictionary[str[i].toUpperCase()] != undefined)
        {
            if(str[i] == str[i].toUpperCase())
            {
                str[i] = dictionary[str[i].toUpperCase()];
            }
            else
            {
                str[i] = dictionary[str[i].toUpperCase()].toLowerCase();
            }
            
        }
    }
    
    return str.join('');
}



console.log(rot13("EBG13 rknzcyr."));


console.log(rot13('This is my first ROT13 excercise!'));
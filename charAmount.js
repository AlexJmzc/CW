function XO(str) {
    let x = 0;
    let o = 0;

    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i).toUpperCase() === 'X') 
        {
            x++;
        }
        else if(str.charAt(i).toUpperCase() === 'O')
        {
            o++;
        }

    }

    if(x == o)
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log(XO("xO"));
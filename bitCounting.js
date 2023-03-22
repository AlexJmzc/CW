var countBits = function(n) {
    let binary = n.toString(2);
    let bits = 0;
    
    for (let i = 0; i < binary.length; i++) {
        if(binary.charAt(i) === '1')
        {
            bits++;
        }
    }

    return bits;
  };

console.log(countBits(1234));
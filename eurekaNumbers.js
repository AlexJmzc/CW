function sumDigPow(a, b) {
    let res = [];
    for (let i = a; i <= b; i++) {
        let strNumber = i.toString();
        let suma = 0;

        for (let y = 0; y < strNumber.length; y++) {
            suma += Math.pow(strNumber[y], y+1);   
        }

        if(suma === i) 
        {
            res.push(i);
        }
    }

    return res;
  }
  
  console.log(sumDigPow(1, 10));
  console.log(sumDigPow(10, 100));
function tribonacci(signature,n){
    switch (n) {
        case 0:
            return [];
        
        case 1:
            return signature.slice(0,1);

        case 2:
            return signature.slice(0,2);
        
        case 3:
            return signature;
    
        default:
            for(let i = signature.length; i < n; i++) {
                let res = signature[i-1] + signature[i-2] + signature[i-3];
                signature.push(res);
            }
            return signature;
    }
  }

  console.log(tribonacci([1,1,1],1));
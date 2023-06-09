function topThreeWords(text) {
    let regex = ".*[a-zA-Z].*";
    if (text.match(regex)) {
        let wordMap = new Map();
        text.split(' ').forEach(word => {
            if (word) {
                word = word.toLowerCase();
                if (wordMap.has(word)) {
                    let count = wordMap.get(word);
                    count ++;
                    wordMap.set(word, count);
                } else {
                    wordMap.set(word, 1);
                }
            }
        })
        const sortedWordMap = new Map([...wordMap.entries()].sort((a, b) => b[1] - a[1]));
 
        let result = Array.from(sortedWordMap.keys()).filter( (word, index) => index < 3);
        result = result.map(res => {
            res = res.replace(/[/.,]/g, '')
            if (res !== "") {
                return res
            }
        })
        return result.filter(res => res !== undefined)
     
    } else {
        return [];
    }
}

console.log(topThreeWords(""))
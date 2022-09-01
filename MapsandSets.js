new Set([1,1,2,2,3,4]) // Set(4){1,2,3,4}

[...new Set("referee")].join("") // 'ref'

0: {Array(3) => true}
1: {Array(3) => false}

const hasDuplicate = arr => new Set(arr).size !== arr.length

const isVowel = char => "aiueo".includes(char)
function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
        let loweredChar = char.toLowCase()
        if(isVowel(loweredChar)){
            if(vowelMap.has(loweredChar)){
                vowelMap.set(loweredChar, vowelMap.get(loweredChar)+1)
            }else{
                vowelMap.set(loweredChar,1)
            }
        }
    }
    return vowelMap;
}
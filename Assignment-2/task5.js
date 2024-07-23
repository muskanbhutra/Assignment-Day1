function longestString(strings) {
    // let maxLength = strings.map(str=>str.length).reduce((max,length)=>Math.max(max,length))
    return strings.reduce((max,str)=>{if (Math.max(max.length,str.length)==str.length) return str; else return max})
    // const longest = strings.filter(str => str.length==maxLength)
    return longest[0]
}
const inputArray = ["apple", "banana", "cherry", "date", "elderberry"];
const longest = longestString(inputArray);

console.log(longest); 
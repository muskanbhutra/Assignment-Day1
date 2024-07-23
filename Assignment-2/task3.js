function primeNumbers(numbers) {
    return numbers.filter(num=>{for (let i=2; i*i<=num; i++) {if (num%i==0) return false} return true})
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 25, 27, 29, 31, 33, 35, 36];
const primeArray = primeNumbers(inputArray);

console.log(primeArray);
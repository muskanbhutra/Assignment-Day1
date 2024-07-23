function sumArray(numbers) {
    return numbers.reduce(((sum,num)=>sum+num))
}

const inputArray = [1, 2, 3, 4, 5];
  const sum = sumArray(inputArray);
  
  console.log(sum); 
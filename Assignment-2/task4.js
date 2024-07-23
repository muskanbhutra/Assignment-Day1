function averageSquareOdd(numbers) {
    return numbers.filter(n => n%2 != 0).reduce((sum,num)=>sum+num*num)/numbers.filter(n => n%2 != 0).length
}

const inputArray = [1, 2, 3, 4, 5];
  const avg = averageSquareOdd(inputArray);
  
  console.log(avg); 
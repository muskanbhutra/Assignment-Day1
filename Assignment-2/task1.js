function cubeNumbers(numbers) {
    return numbers.map(number => Math.pow(number, 3));
  }
  
  // Example usage:
  const inputArray = [1, 2, 3, 4, 5];
  const cubedArray = cubeNumbers(inputArray);
  
  console.log(cubedArray); 

  
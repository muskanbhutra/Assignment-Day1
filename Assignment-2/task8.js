function createInstanceCounter() {
    let count = 0;  
  
    return function() {
      count += 1; 
      return count; 
    };
  }
  
  const counter1 = createInstanceCounter();
  const counter2 = createInstanceCounter();
  
  console.log(counter1()); 
  console.log(counter1()); 
  console.log(counter2()); 
  console.log(counter2()); 
  console.log(counter1()); 
  console.log(counter1()); 
  console.log(counter2()); 
  console.log(counter2()); 
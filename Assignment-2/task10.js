function calculateTotalScore(objectsArray) {
    let totalScore = 0; 
    objectsArray.forEach(obj => {totalScore += obj.score;});
    return totalScore; 
  }
  const data = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 90 },
    { name: "Charlie", score: 78 }
  ];
  
  const total = calculateTotalScore(data);
  console.log(total); 
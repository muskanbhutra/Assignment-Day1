function calculate(num1, num2, operation) {
    return new Promise((resolve, reject) => {
      switch (operation) {
        case 'addition':
          resolve(num1 + num2);
          break;
        case 'subtraction':
          resolve(num1 - num2);
          break;
        case 'multiplication':
          resolve(num1 * num2);
          break;
        case 'division':
          if (num2 === 0) {
            reject('Error: Division by zero is not allowed.');
          } else {
            resolve(num1 / num2);
          }
          break;
        default:
          reject('Error: Invalid operation.');
      }
    });
  }
  
  calculate(10, 5, 'addition')
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error));
  
  calculate(10, 0, 'division')
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error));
  
  calculate(10, 5, 'invalid')
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error));
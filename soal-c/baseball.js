function calPoints(ops) {
  let record = [];

  for (let op of ops) {
    if (!isNaN(op)) {
      record.push(parseInt(op));
    } else if (op === 'C') {
      record.pop();
    } else if (op === 'D') {
      record.push(2 * record[record.length - 1]);
    } else if (op === '+') {
      record.push(record[record.length - 1] + record[record.length - 2]);
    }
  }

  return record.reduce((sum, score) => sum + score, 0);
}

// Test Cases
console.log(calPoints(['5', '2', 'C', 'D', '+'])); // Expected: 30
console.log(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+'])); // Expected: 27
console.log(calPoints(['1'])); // Expected: 1

function isValidSubstitution(substitutions) {
  const [firstHalf, secondHalfBefore80, secondHalfAfter80] = substitutions;
  const totalSubstitutions = firstHalf + secondHalfBefore80 + secondHalfAfter80;

  if (totalSubstitutions > 6) {
    return false;
  }

  if (firstHalf === 0) {
    return secondHalfBefore80 <= 4 && secondHalfAfter80 <= 2;
  }

  if (firstHalf <= 2) {
    return secondHalfBefore80 <= 4 && secondHalfAfter80 <= 2;
  }

  return false;
}

// Test Cases
console.log(isValidSubstitution([0, 4, 2])); // Expected: True
console.log(isValidSubstitution([1, 5, 0])); // Expected: False
console.log(isValidSubstitution([1, 3, 0])); // Expected: True
console.log(isValidSubstitution([0, 4, 0])); // Expected: True
console.log(isValidSubstitution([2, 2, 2])); // Expected: True

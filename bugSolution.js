function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  // Use strict equality (===) for accurate comparisons
  if (a === b) { 
    return true;
  } else {
    return false; 
  }
}
// Write your function here:
const lifePhase = (age) => {
    if (age < 0 || age > 140) {
      return 'This is not a valid age';
    } else if (age <=3) {
      return 'baby'
    } else if (age <=12) {
      return 'child'
    } else if (age <= 19) {
      return 'teen'
    } else if (age <= 64) {
      return 'adult'
    } else {
      return 'senior citizen';
    }
  };
  console.log(lifePhase(6));
  console.log(lifePhase(-1));
  console.log(lifePhase(25));
  console.log(lifePhase(66));
  
  // Uncomment the line below when you're ready to try out your function
  console.log(lifePhase(5)) //should print 'child'
  
  // We encourage you to add more function calls of your own to test your code!
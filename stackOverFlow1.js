// Returns whether or not the provided string contains a substring of "cake" in it.
function containsCake(string) {
    return string.includes('cake') ;// Use the .includes() method to check if 'cake' is in the string
    
  }
  
  // Should return true
  console.log("containsCake('I think cake is my soul mate.') returns: " + containsCake('I think cake is my soul mate.'));
  
  // Should return false
  console.log("containsCake('Pie is certainly the coolest dessert.') returns: " + containsCake('Pie is certainly the coolest dessert.')) "\n";



  function isStringPerfectLength(string, minLength, maxLength) {
    const stringLength = string.length;
    
    if (stringLength < minLength) {
      return false;
    } else if (stringLength > maxLength) {
      return false;
    } else {
      return true;
    }
  }
  
  //Test case 1
  // Should return true
  console.log("isStringPerfectLength('Dog', 2, 4) returns: " + isStringPerfectLength('Dog', 2, 4));
  //Test case 2
  // Should return false
  console.log("isStringPerfectLength('Mouse', 2, 4) returns: " + isStringPerfectLength('Mouse', 2, 4));
  //Test case 3
  // Should return false
  console.log("isStringPerfectLength('Cat', 4, 9) returns: " + isStringPerfectLength('Cat', 4, 9));
// Create function here 
const numberDigits = x => {
    if( x > -1){
      return 'One digit: '
  
    } else if (x > 9){
      return 'Two digits: '
  
    } else {
      return 'The number is: '
    }
  
  }
  console.log(numberDigits(12));
// Write your code here:

const shoutGreetings = arr => {
    return arr.map(greet => greet.toUpperCase() + '!');
  }
  
  const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
  
  console.log(shoutGreetings(greetings))
  // Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
  
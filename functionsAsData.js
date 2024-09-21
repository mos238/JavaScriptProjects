const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  // Write your code below
  
  const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  
  isTwoPlusTwo(); // This function call is much shorter to remember!
  
  //console.log(isTwoPlusTwo.name);

  const fourS = isTwoPlusTwo;
  fourS();

  //console.log(fourS.name);

  const foo = fourS;
  foo();

  console.log(foo.name); 

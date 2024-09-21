const getSleepHours = day => {
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      //continue else if's
      return 8;
    } else if (day === 'wednesday') {
      return 8;
    } else if (day === 'thursday') {
      return 8;
    } else if (day === 'friday') {
      return 8;
    } else if (day === 'saturday') {
      return 8;
    } else    (day === 'sunday')
      return 5;
      
  };
  const getActualSleepHours = () => 
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');
  
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  //console.log(getActualSleepHours());testing
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours =  getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
    console.log('you got the perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours){
    console.log('you got more sleep than needed');
  } else if (actualSleepHours < idealSleepHours)
    console.log('get more sleep'); 
    else {
      console.log('Error! something went wrong, check your code.');
    }
  };
  calculateSleepDebt();
  
  
  
  
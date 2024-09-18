//1. Dissect the Error:

/* const GPA_BENCHMARK = 3.5;
let students = {
  1: {
    name: 'Egill Vignission',
    gpa: 3.4
  },
  2: {
    name: 'Bianca Pargas',
    gpa: 3.8
  },
  3: {
    name: 'Aisling O\'Sullivan',
    gpa: 3.4
  },
  4: {
    name: 'Sameer Fares',
    gpa: 3.9
  }
}
 
let honorRoll = students.filter(student => {
 return student.gpa >= GPA_BENCHMARK;
});
 
console.log(honorRoll);*/




/*The error in your code is due to the fact that you're trying to use the .filter() method on an object (students), but .filter() is an array method. Since students is an object, 
you need to first convert the object into an array so that you can use .filter().

You can achieve this by using Object.values(students), which converts the values of the students object into an array. Then, you can apply the .filter() method.

Here's the corrected version of your code: */



const GPA_BENCHMARK = 3.5;
let students = { //Students is an Object
  1: {
    name: 'Egill Vignission',
    gpa: 3.4
  },
  2: {
    name: 'Bianca Pargas',
    gpa: 3.8
  },
  3: {
    name: 'Aisling O\'Sullivan',
    gpa: 3.4
  },
  4: {
    name: 'Sameer Fares',
    gpa: 3.9
  }
}
 
// Convert the object values to an array and then apply .filter()
let honorRoll = Object.values(students).filter(student => {
  return student.gpa >= GPA_BENCHMARK;
});
 
console.log(honorRoll);

//In the process of figuring out this compiler error, you were able to learn how to use Array methods on objects, 
//and how to think about your use of data types. See, every error is an opportunity to learn!

let instrument;
function setInstrument(instr) {    
    let instrument = instr; 
  } 
  setInstrument("cello");
  console.log(instrument);

  let instrument2 = {
    instr: 'cello',
    type: 'String'
  };
  
  console.log(instrument2.instr);  // This should now work
  
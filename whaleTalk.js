const input = 'sausages and mash';
const vowels = ['a', 'e', 'i','o','u'];
const resultArray = [];

// i = inputIndex, j = vowelIndex
for (let i = 0; i < input.length; i++){ //Outer for loop
    if(input[i] === 'e'){
        resultArray.push(input[i])
    }  
    if(input[i] === 'u'){
        resultArray.push(input[i])
    }  

  for (let j = 0; j < vowels.length; j++){ // inner for loop
    if (input[i] === vowels[j]){
        //console.log(input[i])
        resultArray.push(input[i]);

    }

  }
}
//console.log(vowels); 
//console.log(input);
//console.log(resultArray);
const resultString = resultArray.join('').toUpperCase();
console.log(resultString);
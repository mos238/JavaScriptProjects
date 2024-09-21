const reportingForDuty = (rank, lastName) => `${rank} ${lastName} reporting for duty!`

/*
// Using string concatenation:
const reportingForDuty = (rank, lastName) => rank + " " + lastName + " " + "reporting for duty!"

// As a function declaration:
function reportingForDuty(rank, lastName) {
    return `${rank} ${lastName} reporting for duty!`
}
OR
const reportingForDuty = (rank, lastName)  => {
  return `${rank} ${lastName} reporting for duty!`
}

*/
console.log(reportingForDuty('Private', 'Fido'));
console.log(reportingForDuty('Private', 'Inara'));
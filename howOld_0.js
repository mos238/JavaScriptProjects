function howOld(age, year) {
    // Get the current year
    const currentYear = new Date().getFullYear();
    
    // Calculate the birth year
    const birthYear = currentYear - age;
    
    if (year > currentYear) {
        // The year is in the future
        const futureAge = age + (year - currentYear);
        return `You will be ${futureAge} in the year ${year}`;
    } else if (year < birthYear) {
        // The year is before they were born
        const yearsBeforeBirth = birthYear - year;
        return `The year ${year} was ${yearsBeforeBirth} years before you were born`;
    } else {
        // The year is in the past but not before the person was born
        const pastAge = age - (currentYear - year);
        return `You were ${pastAge} in the year ${year}`;
    }
}

// Examples of usage:
console.log(howOld(49, 2030));  // Future case
console.log(howOld(49, 1990));  // Before birth case
console.log(howOld(49, 2010));  // Past case
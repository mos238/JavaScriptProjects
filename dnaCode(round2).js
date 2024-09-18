const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.'
    }
    //To represent 35-99 : we write percentSharedDNA >= 35 && percentSharedDNA <= 99 OR > 34
    if (percentSharedDNA >= 35 && percentSharedDNA <= 99 ) {
        return 'You are likely parent and child or full siblings.'
    }
    if (percentSharedDNA >= 14 && percentSharedDNA <= 34) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    }
    if (percentSharedDNA >= 6 && percentSharedDNA <= 13) {
        return 'You are likely 1st cousins.'
    }
    if (percentSharedDNA >= 3 && percentSharedDNA <= 5) {
        return 'You are likely 2nd cousins.'
    }
    if (percentSharedDNA >= 1 && percentSharedDNA <= 2) {
        return 'You are likely 3rd cousins'
    }
    return 'You are likely not related.'
}

console.log(whatRelation(100))
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

console.log(whatRelation(30))
// Should print 'You are likely 2nd cousins.'

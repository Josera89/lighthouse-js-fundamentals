var ageCalculator = function(name, yearOfBirth, currentYear){
var age = currentYear - yearOfBirth;
console.log( name + " is " + age + " years old.");
};

ageCalculator("Suzie", 1984, 2016);
ageCalculator("Jack", 2004, 2016);
ageCalculator("Ali", 2016, 2016);

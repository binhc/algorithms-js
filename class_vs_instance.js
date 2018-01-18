// Hackerrank 30 Days of Code - Day 4: Class vs. Instance
// Challenge: Write a Person class with an instance variable, 
// age, and a constructor that takes an integer,initialAge , as a parameter.
//  The constructor must assign initialAge to age after confirming the argument passed as  
//  is not negative; if a negative argument is passed as , the constructor should set 
//  to  and print Age is not valid, setting age to 0.. In addition, you must write 
//  the following instance methods:
// 1. yearPasses() should increase the  instance variable by 1 
// 2. amIOld() should perform the following conditional actions:
//          If, print You are young..
//          If  and, print You are a teenager..
//          Otherwise, print You are old..

// ========== My Solution ==============
function Person(initialAge) {
    // Check if is age negative 
    if (initialAge < 0){
        console.log('Age is not valid, setting age to 0.')
        this.age = 0   
    }else{
        this.age = initialAge
    }

    this.amIOld = function () {
        if ((this.age >= 13) && (this.age < 18)){
            console.log('You are a teenager.')
        }else if(this.age < 13){
            console.log('You are young.')
        }else{
            console.log('You are old.')
        }
    };
    this.yearPasses = function () {
        // Increase instance variable by 1 
        this.age ++ 
    };
}

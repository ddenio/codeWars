// There are two kinds of buses: "blue" -> which costs 2$, "red" -> which costs 1$ (cheaper, right?)

// Hero MUST take one of those buses, even if he will pay 2$.

// Hero should take the first bus that goes to his school and costs less than others, i.e. if he can take a red bus, he will take the first one, if he can't, he should take the first blue one.

// Example
// For busesColors = ["red","red","blue"], goingToSchool = [true, true, true], the result should be 0.

// Because the 0th bus is red and goes to his school.

// For busesColors = ["red","red","red","blue"], goingToSchool = [false, false, false, true], the result should be 3.

// Because only the 3rd bus goes to his school.

function whichBusToTake(busesColors, goingToSchool) {
    for(let i = 0; i< busesColors.length;i++){
        if(busesColors[i]==='red' && goingToSchool[i]===true){
            return i
        }
    }
    for(let i = 0; i< busesColors.length;i++){
        if(busesColors[i]==='blue' && goingToSchool[i]===true){
            return i
        }
    }
  }


console.log(whichBusToTake(["red","red","blue"],
    [true, true, true]))
console.log(whichBusToTake(["blue","blue","blue","red","red"],
    [false, true, true, true, false]))
console.log(whichBusToTake(["blue","red","red","red","blue","red","blue"],
    [true, false, false, false, true, true, false]))
console.log(whichBusToTake(["red","red","red","blue"],
    [false, false, false, true]))
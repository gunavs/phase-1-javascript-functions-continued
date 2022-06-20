// code your solution here
function mondayWork(someString = "go to the office") {
  
        
            return "This Monday, I will " + someString + ".";
        
    
}

function saturdayFun(someString = "roller-skate") {
    return "This Saturday, I want to " + someString + "!";
}

function wrapAdjective(visualFlair = "*") {
    return function (someString = "special") {
        return "You are " + visualFlair + someString + visualFlair + "!";
    }
}
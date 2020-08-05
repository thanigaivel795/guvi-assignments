var square = function(number){
    return number*number
}
console.log(square(4),"from Anonymous")

square=(function(number){
    return number*number
})(5)
console.log(square,"from IIFE")
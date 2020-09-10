class Calculator{
    add(a,b){
        return a+b
    }
    sub(a,b){
        return a-b
    }
    divide(a,b){
        return a/b
    }
    multiply(a,b){
        return a*b
    }
}
 c = new Calculator();
 result = c.add(10,20)
 console.log(result,'add')
 result = c.sub(20,10)
 console.log(result,'sub')
 result = c.divide(20,10)
 console.log(result,'divide')
 result = c.multiply(20,10)
 console.log(result,'multiply')
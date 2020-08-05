// function takes operand one as number and operand two as call backs.
//Based on operand one call back will get executed

function second(a,cb) 
{	
var opr1 = 10;	
var opr2 = 90;
if(a==1)
// calling add callback
    console.log(cb[0](opr1,opr2))
else if(a==2)
    console.log(cb[1](opr1,opr2))
else if(a==3)
   console.log(cb[2](opr1,opr2))
}

arr = [add,sub,mul];

second(1,arr);
second(2,arr);
second(3,arr);

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}


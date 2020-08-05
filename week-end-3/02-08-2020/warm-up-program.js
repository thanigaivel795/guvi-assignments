var num = 10;
function addFive(num) { 
    return num+5;
}
console.log(addFive(num))

//opposite of number
 num = "-5";
function getOpposite(num) {
    if(num>0||num<0)
        return -num
    else if(num==0)
        return 0
    else
        return -1
}
console.log(getOpposite(num))

//min to seconds
var min = 5;
function toSeconds(min) {
    return min*60
}
console.log(toSeconds(min)+" seconds") 

//str to int
var mystr = "5";
function toInteger(mystr) {
    return +mystr
}
console.log( toInteger( mystr))

//number +1
var myint = 0;
function nextNumber(myint) {
    return myint+1
}
console.log((myint))

//first element of array

var arr = [1, 2, 3];
function getFirstElement(arr) {
    return arr[0]
}
console.log(getFirstElement(arr))

//hours to sec
 arr = [1, 2, 3];
function hourToSeconds(arr) {
   return arr.map((item)=>{
        return item*60*60
       
    })
    
}

console.log(hourToSeconds(arr),"hours to sec")


//perimeter of rectangle
function findPerimeter(num1,num2) {
    return 2*(num1+num2)
}
console.log(findPerimeter(6,7))


//return true if number is less than 100 else return false
function lessThan100(num1,num2) {
    return num1+num2<100?true:false
}
var res = lessThan100(22,15)


//return remainder of 1st num divided by 2nd num
function remainder(num1,num2) {
    return num1%num2
}
var res = remainder(1,3)


//return number of legs for turkey horses and pigs
function CountAnimals(tur,horse,pigs) {
    return tur*2+horse*4+pigs*4
}
console.log(CountAnimals(2,3,5))

//check if divisible by 5
function divisibleByFive(num1) {
    return num1%5===0?true:false
}
console.log(divisibleByFive(5))

//find even

function isEven(num){
    // your code here
   
        flag= num%2===0?true:false
        return flag

   
   }
   console.log(isEven(2))

   function areBothOdd(num1, num2){
    return num1%2!=0&&num2%2!=0?true:false
   }
   areBothOdd(1,3)

   //first name + last name
   function getFullName(firstName, lastName){
    return firstName+" "+ lastName
   }
   console.log(getFullName("guvi","geek"))

   //length of the word
   function getLengthOfWord(word1){
    // your code here
    if (typeof word1 === "string")
        return word1.length
    else
        return -1
   }
   console.log(getLengthOfWord(9))

   //is same length
   function isSameLength(word1, word2){
    return word1.length===word2.length?true:false
   }
   console.log(isSameLength("guvi","geek"))

   //get attribute value of object
   var obj = {
    mykey: 'value'
   };
   function getProperty(object, key) {
    console.log(object[key])
   } 
   getProperty(obj,"mykey")

   //add property to object
    obj = {
    
   };
   function addProperty(obj, key){
    // your code here
    obj[key]=true
    console.log(obj)
   }
   addProperty(obj,"mykey")

   //remove property of object
   
function removeProperty(obj, key){
    //console.log(obj)
    delete obj[key]
    console.log(obj)
   }
   removeProperty(obj,"mykey")

   //Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

    arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
    count =0
    sum = 0
 for(x of arr){
     if(x>=0)
        count+=1
    else
        sum+=x
 }
 return [count,sum]
}
console.log(ar2(arr));

//Create a function that receives an array of numbers and returns an array containing only the positive numbers

function getPositives(ar)
{
    temp=[]
    for(x of arr){
        if(x>=0)
           temp.push(x)
    }
    return temp
}
 arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
 ar2 = getPositives(arr);
console.log(ar2);

//power of 2
function powersOfTwo(n){
    res =[1]
    
    for(i=1;i<=n;i++){
        power=1
        console.log(power)
        for(j=1;j<=i;j++){
           
            power *= 2
        }
        //console.log(power,i)
        res.push(power)
        //power=0
    }
  
    return res;
  }
 console.log(powersOfTwo(3)) 

 //largest number from array
 function findMax(ar)
{
    max = 0
    for(x of arr){
        if(max<x)
        max=x
    }
    return max
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log('Max: ', max);

//find 1st 100 prime numbers

var n = 100
k=2

while (k<=n){
    i=2
flag = false
while(i<k){
    if(k%i===0){
        flag = true
    }     
i++
}
console.log(flag? k+' is not a prime':k+' is prime')
k++
}


//no of primes from given number

function findPrime(nPrimes,startAt){
    var n = 100
    k=startAt+nPrimes
    
    while (startAt<=k){
        i=2
    flag = false
    while(i<startAt){
        if(startAt%i===0){
            flag = true
        }
            
    i++
    }
    
    console.log(flag? startAt+' is not a prime':startAt+' is prime')
    startAt++
    }
}
findPrime(10,100)

//reverse a string

var s = reverseString("JavaScript");
console.log(s);
function reverseString(str)
{
  charArr = str.split("")
  console.log(charArr)
  reverse = ''
  for(i=charArr.length-1;i>=0;i--){
    reverse+=charArr[i]
  }
  return reverse
}

//merge to arrays
 ar1 = [1, 2, 3];
 ar2 = [4, 5, 6];
 ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2)
{
  result = [];
//this will add the first array to the result array
for(let el of ar1)
 {
 result.push(el);
 }
 for(let el of ar2)
 {
 result.push(el);
 }
 
 //Some piece of code goes here 
 
 return result;
}
//sum all the values of String
console.log(sumCSV('1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9'));
function sumCSV(s)
{
  // your code here
 arr= s.split(',')
 total =0
 for(x of arr){
    total += +x
 }
 return total
}
var cat = {
 name: 'Fluffy',
 activities: ['play', 'eat cat food'],
 catFriends: [
 {
 name: 'bar',
 activities: ['be grumpy', 'eat bread omblet'],
 weight: 8,
 furcolor: 'white'
 }, 
 {
 name: 'foo',
 activities: ['sleep', 'pre-sleep naps'],
 weight: 3
 }
 ]
}
//Add height and weight to Fluffy
cat['height']=2.1
cat['weight']=3
//Fluffy name is spelled wrongly. Update it to Fluffyy
cat['name']='Fluffyy'
//List all the activities of Fluffyy’s catFriends.
for(x of cat['catFriends']){
    console.log(x.name+" activities "+x.activities)
}
//Print the catFriends names
for(x of cat['catFriends']){
    console.log("name : " +x.name)
}
//Print the total weight of catFriends
weight=0
for(x of cat['catFriends']){
   weight+=x.weight
}
console.log("total weight :"+weight)
//Print the total activities of all cats (op:6)
console.log(cat.activities)
for(x of cat.catFriends )
    console.log(x.activities)
//Add 2 more activities to bar & foo cats
for(x of cat.catFriends ){
    x.activities.push('sleeping')
    x.activities.push('Playing')
}
    //Update the fur color of bar
    cat.catFriends[0].furcolor="choclate brown"
console.log(cat);


// car accident JSON

var myCar = {
    make: 'Bugatti',
    model: 'Bugatti La Voiture Noire',
    year: 2019,
    accidents: [
    {
    date: '3/15/2019',
    damage_points: '5000',
    atFaultForAccident: true
    },
    {
    date: '7/4/2022',
    damage_points: '2200',
    atFaultForAccident: true
    },
    {
    date: '6/22/2021',
    damage_points: '7900',
    atFaultForAccident: true
    }
    ]
   }

   //change atFaultForAccident to false
   for(x of myCar.accidents)
        x.atFaultForAccident=false
    console.log(myCar)
    //print the dated of my Accidents
    for(x of myCar.accidents)
        console.log(x.date)

// “printAllValues” which returns an newArray of all the input object’s values.
var obj = {name : 'RajiniKanth', age : 33, hasPets : false};
function printAllValues(obj) {
    newArr=[]
 for(x in obj){
    newArr.push(obj[x])
 }
 return newArr
}
console.log(printAllValues(obj))

// “printAllKeys” which returns an newArray of all the input object’s keys.
function printAllKeys(obj) {
    newArr=[]
 for(x in obj){
    newArr.push(x)
 }
 return newArr
}
console.log(printAllKeys(obj))

//Parsing an JSON object and convert it to a list:
function printAllList(obj) {
    newArr=[]
 for(x in obj){
    newArr.push([x,obj[x]])
 }
 return newArr
}
console.log(printAllList(obj))

//Parsing a list and transform the first and last elements of it:
var arr = ['GUVI', 'I', 'am', 'a geek'];
function transformFirstAndLast(arr) {
    newObject={}
    newObject[arr[0]]=arr[arr.length-1]
 
 return newObject;
}
console.log(transformFirstAndLast(arr))
//Parsing a list of lists and convert into a JSON object:
 arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function fromListToObject(arr) {
  newObject = {};
 for(x of arr){
    newObject[x[0]] = x[1]
 }
 
 return newObject;
}
console.log(fromListToObject(arr))


//Parsing a list of lists and convert into a JSON object:
arr= [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];
function transformEmployeeData(arr) {
  tranformEmployeeList = [];
 
 for(y of arr){
    newObject = {};
    for(x of y){
        newObject[x[0]] = x[1]
     }
     tranformEmployeeList.push(newObject)
 }
 
 
 //Your code
 
 return tranformEmployeeList;
}
console.log(transformEmployeeData(arr))

//Parsing two JSON objects and Compare

var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 3}
function assertObjectsEqual(actual, expected, testName){

 for(x in actual){
    if(actual[x]!==expected[x]){
        return 'Faile '+testName+ ' Expected '+JSON.stringify(expected) +',but got'+JSON.stringify(actual)
    }
 }
    return 'passed'
}
console.log(assertObjectsEqual(actual,expected,'detects that two objects are equal'))

//security question comparison
 securityQuestions = [
    {
    question: 'What was your first pet’s name?',
    expectedAnswer: 'FlufferNutter'
    },
    {
    question: 'What was the model year of your first car?',
    expectedAnswer: '1985'
    },
    {
    question: 'What city were you born in?',
    expectedAnswer: 'NYC'
    }
   ]
   function chksecurityQuestions(securityQuestions,que,ans) {
   for(x of securityQuestions){
       if(x.question===que&&x.expectedAnswer===ans){
           return true
       }
   }
    // your code here
    return false ; 
   }
   //Test case1:
var ques = 'What was your first pet’s name?'
var ans  =  'FlufferNutter'
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // true
//Test case2:
 ques = 'What was your first pet’s name?'
 ans  =  'DufferNutter'
 status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // flase


//Write a function to return the list of characters below 20 age
var students = [
    {name: 'Siddharth Abhimanyu', age: 21}, { name: 'Malar', age: 25},
    {name: 'Maari',age: 18},{name: 'Bhallala Deva',age: 17},
    {name: 'Baahubali',age: 16},{name: 'AAK chandran',age: 23},   
    {name:'Gabbar Singh',age: 33},{name: 'Mogambo',age: 53},
    {name: 'Munnabhai',age: 40},{name: 'Sher Khan',age: 20},
    {name: 'Chulbul Pandey',age: 19},{name: 'Anthony',age: 28},
    {name: 'Devdas',age: 56} 
    ];
   function returnMinors(arr)
   {
    arr=[]
       for(x of students){
           if(x.age<20){
               arr.push(x.name)
           }
       }
       return arr
   }
   console.log(returnMinors(students));

   
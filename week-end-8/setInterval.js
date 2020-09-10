count = 1
newPromise = new Promise((resolve,reject)=>{
    
        resolve(count)
   
})
newPromise.then((data)=>{
    console.log(data)
    return count++
}).then((data)=>{
    console.log(data)
    return count++
}).then((data)=>{
    console.log(data)
    return count++
}).then((data)=>{
    console.log(data)
    return count++
}).then((data)=>{
    console.log(data)
    return count++
}).then((data)=>{
    console.log(data)
    return count++
}).then((data)=>{
    console.log(data)
    return count++
}).then((data)=>{
    console.log(data)
    return count++
}).then((data)=>{
    console.log(data)
    return count++
}).then((data)=>{
    console.log(data)
    return count++
}).then((data)=>{
    console.log(data)
    return count++
}).then((data)=>{
    console.log(data)
    return count++
})
// const promise = new Promise((resolve,reject)=>{

// });

function displayer(something){
    console.log("Sum is:",something);
}

function calc(a,b,callBackFunc){
    let sum = a+b;
    callBackFunc(sum);
}
calc(5,10,displayer);

myNums = [4,7,8,-12,4,-8,-12,5,8];

const posNums = removeNeg(myNums,x=> x>0);
console.log("Positive numers ArrayL:",posNums);
function removeNeg(numbers,cbFunc){
    let newArr = [];
    for(n of numbers){
        if(cbFunc(n)){
            newArr.push(n);
        }
    }
    return newArr;
}

function showTime(time){
    console.log("Time is:",time);
}
function calculateTime(hour,min,sec,cbfuncs){
    let time = `${hour}:${min}:${sec}`;
    cbfuncs(time)
}

calculateTime(12,35,45,showTime);


// what is asynchronous?
// Functions running parallar with other functions is called asynchronous function

setTimeout(()=>{
    loveYou("Love You");
},2000);
function loveYou(text){
    console.log("STO:",text);
}

// Promise
const myPromise = new Promise(function(resolve,reject){
    let x = 0;
    if(x==0){
        resolve("Promise is resolved");
    }
    else{
        reject("Promise is rejected");
    }
});

myPromise.then((res)=>{console.log(res)},(err)=>{console.log(err)});


const lovePromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Love You Tanzim");
    },3000)
});

lovePromise.then((result)=>{
    console.log("Love result:", result);
})


function showSome(some){
    console.log("Some:", some);
}

async function myAsyncFunc(){
    return "I have created an async function";
}

myAsyncFunc().then((result)=>{showSome(result)});



async function loveAsyncFunc(){
    let newLovePromise = new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve("I LOVE YOU");
        },4000);
    })

    console.log(await newLovePromise);
}
loveAsyncFunc();











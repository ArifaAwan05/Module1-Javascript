/**
 * work as forEach for of loop, access all element using three dot operators
 */

let nums = [1,2,3,4];
console.log(...nums);

/**
 * spread Array literals
 */
let arr = [1,2,3,4,5];
let newArr = [...arr];

let chars = ["...hello"];

let odd = [1, 3,5,7,9];
let even = [2,4,6,8,10];
//order matter
let num = [...odd, ...even];

/**
 * Spread object Literals
 */

let data= {
    email: "arifa@gmail.com",
    password: "123",
};
const dataCopy = {...data, id:12356};

//store array values into objects using spred

let arr1 = [1,2,3,4,5]; //array contain values
let obj = {...arr1}//object contain key value pair, so here index of an array will be key and value will be array value

/***
 * REST operator takes more than one arguments()
 */

function sum(...args){
    for(let i =0; i<args.length; i++){
        console.log("you gave us:" , args[i]);
        
    }
}
/***
 * Destructuring
 * store array values into multiple varaibels
 * [winner,runnerup ] = assign starting values to winner, and remining to runnerup (distributing values equally)
 * winner = names[0];
 * bruce =names[1]
 * srp = names[2]
 */
let names = ["tony", "bruce", "David", "miler", "kholi"];
let[winner, rp, ...srp] = names;

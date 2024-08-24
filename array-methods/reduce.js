/**
 * return the sigle value , it has 2 arguments (accumulator, element)
 * by defualt res mein humare pass 0 store hoga
 * [1,2,3,4]
 * 0,1 ==> 1
 * (1,2)==< 3
 * (3,3)=> 6
 * (6,4)==>10
 * 
 */

// let nums = [1,2,3,4];
// let ans = nums.reduce((res,el) => {
//     console.log(res);
//    return res+el;
// });
// console.log(ans);
//Find the max number in an array
// let arr =[1,8,9,3,1]
// let max = -1;
// for (let i=0; i<arr.length; i++){
//    if(max < arr[i]){  
//     max = arr[i];
//    }
// }
// console.log(max);

//find Max value using Reduce
let arr1 =[1,8,9,3,1];
//global scope max      function scope
let max = arr1.reduce((max,el)=>{
    if(max < el){
        return el;
    }else{
        return max;
    }
});


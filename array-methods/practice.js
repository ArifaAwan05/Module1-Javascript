/**
 * find the values of an array that are divisble by 10
 */

// let arr = [10,20,30,40];
//  let ans = arr.every((el)=> el % 10 == 0 );
//  console.log(ans);

 /**
  * Find min value from an array
  */

//  let arr1 = [10,55,90,4,8];
//  let min = 100;
// for(let i=0; i<arr1.length-1; i++){
//     if(min > arr1[i]){
//         min = arr1[i];

//     }
//    }
//    console.log(min);
 

//find the min value.
let num = [10,20,30,40,5];
let min = num.reduce((min,el) => {
    if(min<el){
        return min;
    }else{
        return el;
    }
    console.log(min);
    
})
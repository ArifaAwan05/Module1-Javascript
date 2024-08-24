/**
 *  filter function,if output will be true in call back , then it will add element in new Array
 **/
let num = [1,4,5,8,9,7];
let ans = num.filter((el)=>{
    return el % 2 ==0;

});

/**
 * Every is work on true and false,.
 * Work AS logical AND Operator.
 */
// let nums = [1,25,6,7];
let nums = [2,4,8,10];
let res = nums.every((el) => {
    return el%2==0;
});

/**
 * SOME is work on true and false.
 * Work AS logical OR Operator.
 */
// let nums = [1,25,6,7];
let numb = [11,77,13];
let resl = numb.sum((el) => {
    return el%2==0;
});


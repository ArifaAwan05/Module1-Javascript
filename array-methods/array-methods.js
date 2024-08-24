/**
 * For Each
 */
//1st Method
// let arr = [1,2,3,4,5];
// let print = function(el){   //element
//     console.log(el);
//     }
// arr.forEach(print);

//2nd Method
// let arr = [1,2,3,4,5];
// arr.forEach(function(el){
//     console.log(el);
// });

//3rd Method
// let arr = [1,2,3,4,5];
// arr.forEach((el)=>{
//     console.log(el);
    
// });
//for each also used for objects

let obj = [{
    name:"Arifa",
    marks: 87
},{
    name: "Asifa",
    marks:90
},{
    name: "noshi",
    marks: 98
}];
obj.forEach((student)=>{
    console.log(student.name);
    
})
/**
 * Map, Similar to foreach, for each access individual elements from an array , 
 * 
 */
// let arr = [1,5,6,2]
// let double = arr.map((el)=>{
//     return el*2;
// })
 

// let arr = [1,5,6,2]
// let double = arr.map((el)=>{}
// );
 

let students = [{
    name:"Arifa",
    marks: 80
},{
    name: "Asifa",
    marks: 90
},{
    name: "noshi",
    marks: 70
}];
let gpa =students.map((el) => {
    return el.marks/10;
})

let btn = document.querySelector('button');
let h3 = document.querySelector("h3");

btn.addEventListener("click", function(){
    //console.log("generate Random color");
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;
    console.log("color is updated");
    //to change the color of div when click on button
    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
    });

// to generate random color, we make function
function getRandomColor(){
    //RGB==> 0 to 255
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}
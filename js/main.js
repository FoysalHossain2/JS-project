// random color generator

const body = document.querySelector("body");
const output = document.querySelector("#output");
const cBtn = document.querySelector(".cBtn");
const gBtn = document.querySelector(".gBtn");
const input = document.querySelector("input");


// addEvenListener in generate button
gBtn.addEventListener('click' , generatorButton);


// make a generator button
function generatorButton(){
    const red = Math.ceil(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    let generateColor = `rgb(${red} , ${green} , ${blue})`;
    input.style.background = generateColor ;
    show(generateColor);
} 



// show color code in input value
function show(gColor) {
    output.value = gColor ;
    copyColor(gColor);
}

// addEvenListener in copy button
cBtn.addEventListener('click' , copyColor);

// copy color code 
function copyColor () {
    navigator.clipboard.writeText(output.value);
    // output.value = "copied !";
}





// allPhotos store in array

let allPhotos = ["images/code1.png", "images/code2.png", "images/code3.png", "images/code4.png", "images/code5.png", "images/code6.png", "images/code7.png", "images/code8.png" , "images/code9.png"];

let image = document.querySelector("img");

let count = 0 ;

function next() {
    count++ ;

    if(count >= allPhotos.length){
        count = 0;
        image.src = allPhotos[count];
    }
    image.src = allPhotos[count]; 
}


function previous() {
    count-- ;

    if(count < 0){
        count = allPhotos.length - 1 ;
        image.src = allPhotos[count];
    }
    image.src = allPhotos[count]; 
}
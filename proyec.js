// Variables de los botones de colores

let btn_naranja = document.querySelector(".naranja");
let btn_verde = document.querySelector(".verde")
// let verde = document.querySelector(".verde")
let btn_piel = document.querySelector(".piel")
let btn_negro = document.querySelector(".negro")
// let sofa = document.getElementById("sofa")

// const botones = document.querySelectorAll(".boton");
let linea = document.querySelector(".gold");
let sofa = document.querySelector("#sofa");
// console.log(botones);


// eventos

btn_naranja.addEventListener('click', () =>{
    console.log("cambiaste el tema a naranja")
    linea.style.border= "60px solid #6E4F05";
    sofa.src = "/mueble-naranja.png";

    // img.src = "";
    // btn_mas.style.background = "#6E4F05";
})
btn_verde.addEventListener('click', () =>{
    console.log("cambiaste el tema a verde")
    linea.style.border= "60px solid #2b461a";
    sofa.src = "mueble-verde.png";
})

btn_piel.addEventListener('click', () =>{
    console.log("cambiaste el tema a piel")
    linea.style.border= "60px solid #98926d";
    sofa.src = "mueble-piel.png";

})

btn_negro.addEventListener('click', () =>{
    console.log("cambiaste el tema a negro")
    linea.style.border= "60px solid black";
    sofa.src = "mueble-negro.png";
})

// naranja.addEventListener('click', () =>{
//     console.log("hola");
//     linea.style.background = "black"
// })

// botones.forEach(boton => {
//     boton.addEventListener("click", ()=> {
//         if(boton.className == "naranja"){
//             console.log("hola")
//             linea.style.background = "black";
//         }
//     })
// });
// function cambiador (color){
//     linea.style.backggroundColor = `${color}`;
// }


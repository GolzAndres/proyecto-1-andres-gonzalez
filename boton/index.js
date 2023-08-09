let btn = document.getElementById("btn")

function generarNumber(){
    let valor = Math.floor(Math.random()*90)
    return valor
}


let azul = document.getElementById("azul")
let rojo = document.getElementById("rojo")
let nose = document.getElementById("nose")

azul.onclick = () =>{
    nose.style.background = "blue"
    console.log("object")
}

rojo.onclick = () => {
    nose.style.background = "rojo"
    console.log("object")
}
btn.addEventListener("mouseover",function(){
    btn.style.top=`${generarNumber()}vh`
    btn.style.right=`${generarNumber()}vh`
    console.log("object")
})

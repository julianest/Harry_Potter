const personajes = [
        {
                id: 0,
                nombre: "Draco Malfoy",
                imgLogo: "./img/s1.png",
                imgCara: "./img/ron.png",
                casa: "Slytherin",
        },
        {
                id: 1,
                nombre: "Harry Potter",
                imgLogo: "./img/g1.png",
                imgCara: "./img/harry.png",
                casa: "Griffindor",
        },
        {
                id: 2,
                nombre: "Ron Weasley",
                imgLogo: "./img/h1.png",
                imgCara: "./img/wesley.png",
                casa: "Hufflepulff",
        },
        {
                id: 3,
                nombre: "hermione Granger",
                imgLogo: "./img/r1.png",
                imgCara: "./img/hermione.png",
                casa: "Ravenclaw",
        },
]

const temp = document.getElementById("container2")
        temp.innerHTML =
        `<button id="btn1" class="btn" >Comenzar</button>
                <img id="escudo" src="../Tarea-3/img/esc.png" alt="escudo">`

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let imgInter = document.getElementById("escudo")

btn1.addEventListener("click", ()=>{
        temp.setAttribute("class", "cont3")
        btn2.style.visibility = "visible";
				jugar();
})
btn2.addEventListener("click", ()=> jugar());



function jugar(){
	let random = geneRan(); 
        if (comparar(random)) {
                template(random);
  }
}

function template(impre){
        temp.innerHTML = 
`       <img src = "${personajes[impre].imgLogo}" class="casaEscudo">
        <img src = "${personajes[impre].imgCara}" class="cara">
        <p class="text"> Nombre:${personajes[impre].nombre}</p>
        <p class="text"> Casa:${personajes[impre].casa}</p>
`       
        }

function comparar(numeroRandom){
        const elemento = personajes.find((x)=>x.id == numeroRandom);
        return elemento ? true : false;
};
function geneRan(){
        numRand = Math.round(Math.random()*3);
        return numRand;
}





import { datos } from "./datos.js";

const $padre = document.querySelector(".container")

//creamos un elemento

const nodo = document.createElement("p")
const texto = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rerum labore accusamus impedit incidunt quos fuga ipsam perferendis officiis ex quaerat rem aut minima nesciunt distinctio, exercitationem fugit quae aliquid!`

//nodo.innerText = texto;
$padre.appendChild(nodo)


const parrafo = document.createElement("p")
const texto2 = `hola como estas`

$padre.appendChild(parrafo)

nodo.innerText = texto
parrafo.innerText = texto2

const $lista = dom.querySelector("div.container > div.card > ul.list")

const list = dom.createElement("li")
console.log($lista)

datos.map(a => {
  const items = document.createElement("li")
  console.log(a)
  $lista.appendChild(a.name)
  $item.classList.add()
})


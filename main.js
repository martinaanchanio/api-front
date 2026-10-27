fetch('https://ponyapi.net/v1/character/all')
.then (response => response.json())
.then (data => {
    console.log(data)
    personajes = data.data
    mostrarPersonajes(personajes)
})
.catch (error=> {
    console.error('Error al leer el archivo lol', error)
})

let personajes = []

const contenedor = document.getElementById('mainContainer')
const searchInput = document.getElementById('searchInput')

function mostrarPersonajes(listaPersonajes) {
    mainContainer.innerHTML = ''


    listaPersonajes.forEach (personaje => {
        mainContainer.innerHTML += `
        <div class="card">
            <h1>${personaje.name}</h1>
            <h2>${personaje.alias}</h2>
            <img src="${personaje.image}" alt="${personaje.name}">
            <h3>Género: ${personaje.sex}</h3>
            <h3>Tipo: ${personaje.kind}</h3>
            <h4>Conocé más sobre ${personaje.name} en: ${personaje.url}</h4>
        </div>
        `})
}

searchInput.addEventListener('input', () => {
    const busqueda = searchInput.value.toLowerCase()
    const personajesFiltrados = personajes.filter( personaje => {
        return personaje.name.toLowerCase().includes(busqueda)
    })
    mostrarPersonajes(personajesFiltrados)
})

const filtrarTipo=document.getElementById("filtrosTipo")
const filtrarGenero= document.getElementById ("filtrosGenero")
const busqueda = document.getElementById("busqueda")

function filtrar() {
  let ponysFiltrados = personajes.filter(personaje => {
    console.log( personaje.kind.includes(filtrarTipo.value))
    //console.log( personaje.sex.includes(filtrarGenero.value))
    //console.log( personaje.kind.includes(filtrarTipo.value) && personaje.sex.includes(filtrarGenero.value))
    //console.log(" ----- ")
    return personaje.kind.includes(filtrarTipo.value)
    && personaje.sex.includes(filtrarGenero.value)
    
  })

  console.log(ponysFiltrados)
  mostrarPersonajes(ponysFiltrados)

}

filtrarTipo.addEventListener("change", filtrar)
filtrarGenero.addEventListener("change", filtrar)

const formulario = document.querySelector('form')
const respLista = document.querySelector('pre')

const listaDeCompras = []

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const nomeDoItem = formulario.nomeDoItem.value

    listaDeCompras.push(nomeDoItem)

    let lista = ''

    listaDeCompras.forEach((item, i) => lista += ` ${i + 1}. ${item}\n`)

    respLista.innerText = lista

})

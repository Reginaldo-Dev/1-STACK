const formulario = document.querySelector('form')
const respLista = document.querySelector('pre')

const listaDeCompras = []

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const nomeDoItem = formulario.nomeDoItem.value

    const unidades = formulario.unidades.value

    listaDeCompras.push({
        nomeDoItem,
        unidades
    })
   
    let lista = ''

    listaDeCompras.forEach((item, i) => lista += `${i + 1}. ${item.nomeDoItem} - ${item.unidades} unidades \n`)

    respLista.innerText = lista

    formulario.reset()
    formulario.nomeDoItem.focus()
})

formulario.btRemover.addEventListener('click', () => {
    listaDeCompras.shift()

    let lista = ''

    listaDeCompras.forEach((item, i) => lista += `${i + 1}. ${item.nomeDoItem} - ${item.unidades} unidades \n`)

    respLista.innerText = lista
})

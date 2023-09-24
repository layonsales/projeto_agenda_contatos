const form = document.getElementById('agenda-contatos')

const telefone = document.getElementById('numero')
const nome = document.getElementById('nome')

const lista_telefone = []

let linhas = ''

form.addEventListener('submit', function(evento){
    evento.preventDefault()

    cadastrar()
})


function cadastrar(){
    let linha = '<tr>'

    if (lista_telefone.includes(telefone.value)){
        alert(`O telefone já foi inserido`)
    } else{
        linha += `<td>${nome.value}</td>`
        linha += `<td>${telefone.value}</td>`
        linha += '</tr>'
    
        linhas += linha
    
        const dado = document.querySelector('tbody')
        dado.innerHTML = linhas

        lista_telefone.push(telefone.value)
    
        nome.value = ''
        telefone.value = ''
    }
}
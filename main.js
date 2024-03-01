const form = document.getElementById('formulario')
const resultadoFinal = document.getElementById('resultado-final')
const nomeAtividade = document.getElementById('atividade')
const nota = document.getElementById('nota-atividade')
let linhas = ''
const imgAprovado = '<img src="./images/aprovado.png" />'
const imgReprovado = '<img src="./images/reprovado.png" />'
const spanAprovado = '<span class="resultado aprovado" id="resultado-final">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado" id="resultado-final">Reprovado</span>'
let quantAtividades = 0
let somaNotas = 0
const atividades = [] 

form.addEventListener('submit', function(e){
    e.preventDefault()
    //Verifica Duplicidade
    if(atividades.includes(nomeAtividade.value)){
        alert(nomeAtividade.value + ' já foi inserida')
        return
    } else{
        atividades.push(nomeAtividade.value)
    }
    incluiAtividade()
    incluiMedia()
    limpaInputs()
})


function incluiAtividade(){
    
    let linha = '<tr>'
    linha += `<td> ${nomeAtividade.value} </td>`
    linha += `<td> ${nota.value}</td>`
    linha += `<td> ${nota.value >= 7? imgAprovado:imgReprovado}</td>`
    linha += `</tr>`
    
    linhas += linha
    const corpoTable = document.querySelector('tbody')
    corpoTable.innerHTML = linhas
}


function incluiMedia(){
    quantAtividades++
    somaNotas += parseFloat(nota.value)
    const media = somaNotas/quantAtividades
    document.getElementById('media-final').innerHTML = `${(media).toFixed(2)}`
    media >= 7? resultadoFinal.innerHTML=spanAprovado : resultadoFinal.innerHTML=spanReprovado
}

function limpaInputs(){
    nomeAtividade.value =''
    nota.value=''
}
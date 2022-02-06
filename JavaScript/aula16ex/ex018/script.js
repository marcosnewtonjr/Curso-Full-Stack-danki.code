let list = []
let tab = document.getElementById('tab')
let res = document.getElementById('res')
function start() {
    let num = document.getElementById('num')
    let position = list.indexOf(Number(num.value))
    if (num.value.length == 0 || num.value < 1 || num.value > 100 || position != -1) {
        window.alert('Valor inválido ou já encontrado na lista')
    } else {
        let n = Number(num.value)
        list.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        tab.appendChild(item)
    }
}
function analisar() {
    let total = list.length
    res.innerHTML = `Ao todo, temos ${total} números cadastrados. <br>`
    list.sort()
    let menor = list[0]
    res.innerHTML += `O menor valor informado foi ${menor}. <br>`
    let maior = list[total]
    res.innerHTML += `O maior valor informado foi ${maior}. <br>`
    let soma = 0
    for (c = 0; c < total; c++) {
        soma += list[c]
    }
    res.innerHTML += `Somando todos os valores, temos ${soma}. <br>`
    let media = soma / total
    res.innerHTML += `A média dos valores digitados é ${media}.`
}
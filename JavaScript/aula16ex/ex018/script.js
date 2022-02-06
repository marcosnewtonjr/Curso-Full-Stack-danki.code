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
    num.value = ''
    num.focus()
}
function analisar() {
    let total = list.length
    if (total != 0) {
        res.innerHTML = `Ao todo, temos ${total} números cadastrados. <br>`
        let maior = list[0]
        let menor = list[0]
        for (let position in list) {
            if (list[position] > maior) {
                maior = list[position]
            }
            if (list[position] < menor) {
                menor = list[position]
            }
        }        
        res.innerHTML += `O menor valor informado foi ${maior}. <br>`
        res.innerHTML += `O maior valor informado foi ${menor}. <br>`
        let soma = 0
        for (c = 0; c < total; c++) {
            soma += list[c]
        }
        res.innerHTML += `Somando todos os valores, temos ${soma}. <br>`
        let media = soma / total
        res.innerHTML += `A média dos valores digitados é ${media}.`
    } else {
        window.alert('Adicione valores antes de finalizar!')
    }
}
let valores = [8, 1, 7, 4, 2, 9]

// Visualização tradicional
// console.log(valores)

// Percurso para exibição dos vetores
//for (let p = 0; p < valores.length; p++) {
//    console.log(`A posição ${p} tem o valor ${valores[p]}`)
//}

// Versão mais atual para exibição dos vetores
for(let p in valores) {
    console.log(`A posição ${p} tem o valor ${valores[p]}`)
}

// Comando para identificar a posição de um valor no item
// No caso do valor não ser encontrado, será retornado o valor -1
let pos = valores.indexOf(2)
console.log(pos)
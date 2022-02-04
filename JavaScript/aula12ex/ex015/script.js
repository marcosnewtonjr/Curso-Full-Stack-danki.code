function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) { //length - comprimento
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/bebe-h.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-h.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-h.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-h.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/bebe-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. <br>`
        res.appendChild(img)
    }
}
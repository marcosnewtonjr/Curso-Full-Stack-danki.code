function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 23
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 0 && hora < 12){
        // Bom dia
        img.src =  'imagens/manha-p.png'
        document.body.style.background = '#6D7E5D'
    } else if (hora >=12 && hora <= 18) {
        // Boa tarde
        img.src =  'imagens/tarde-p.png'
        document.body.style.background = '#A87058'
    } else {
        // Boa noite
        img.src =  'imagens/noite-p.png'
        document.body.style.background = '#515154'
    }
}

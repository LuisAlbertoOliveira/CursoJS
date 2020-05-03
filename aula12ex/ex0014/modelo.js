function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    var msg = window.document.getElementById('msg')
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        msg.innerHTML +='; BOM DIA!'
        img.src = 'fotomanha.png'
        document.body.style.background = '#FCE8AD'
    }else if (hora >=12 && hora < 18){
        msg.innerHTML += '; BOA TARDE!'
        img.src = 'fototarde.png'
        document.body.style.background = '#FF8230'
    }else{
        msg.innerHTML += '; BOA NOITE!'
        img.src = 'fotonoite.png'
        document.body.style.background = '#1E313F'
    }
         
}  

function toggleMode(){
  const html = document.documentElement
   html.classList.toggle('light')
   // pegar a tag da img
  const img = document.querySelector(".profile img")
  if(html.classList. contains('light')){
      img.setAttribute("src", "./assets/avatar-light.png")
      img.setAttribute("alt", "Imagem do Maik brito usando oculos e fundo azul.")
  }else {
      img.setAttribute("src", "./assets/avatar.png")
      img.setAttribute("alt", "foto de perfil de mayk brito sorrindo,usando oculos e camisa preta e fundo amarelo.")
  }
   
    
  }
 

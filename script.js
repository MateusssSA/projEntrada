function toggleMode() {
    const html = document.documentElement

  // versão simplificada
    html.classList.toggle('light')

//
const img = document.querySelector("#profile img")

  if(html.classList.contains('light')){
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar11.png")
  }



}

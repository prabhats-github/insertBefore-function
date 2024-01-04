let main=document.getElementById("main")

let div1=document.createElement("div")
let h1=document.createElement("h1")
let ctn_01=document.createTextNode("This is h1")
main.appendChild(div1)
div1.appendChild(h1)
h1.appendChild(ctn_01)
div1.style.border='2px solid black'
div1.style.backgroundColor='red'


let div2=document.createElement("div")
let h2=document.createElement("h2")
let ctn_02=document.createTextNode("This is h2")
main.appendChild(div2)
div2.appendChild(h2)
h2.appendChild(ctn_02)
div2.style.border='2px solid black'
div2.style.backgroundColor='blue'

main.insertBefore(div2,div1)



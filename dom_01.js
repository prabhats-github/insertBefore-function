let o=document.getElementById("o")

function fun1(){
    let h1=document.createElement("h1")
    let tn=document.createTextNode("this is h1")
    h1.appendChild(tn)
    o.appendChild(h1)

}
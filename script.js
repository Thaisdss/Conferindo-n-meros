var valor = document.getElementById('valor')
var res = document.getElementById('res')
var primos = document.getElementById('primos')
var num = document.getElementById('num')
var PN = document.getElementById('pn')
var valores = []

function Adicionar() {
  valores.push(parseInt(valor.value))
  for(pos in valores) {
   var numero =  valores[pos] 
  }
  num.innerHTML += numero + '; '
  somar(valores)
  maior_menor(valores)
  primo(valores)
  pn(valores)
}

function somar(valores) {
  var somando = 0
   if(valores.length == 1){
     res.innerHTML = '<p>Por favor adicione mais de um valor para que possamos fazer a soma e a média deles</p>'
   }else{
     
     for(pos in valores) {
    somando += valores[pos]
       
  }
     
  var media = somando/valores.length
  
  res.innerHTML = `<p> A soma dos valores é ${somando}</p>`
  res.innerHTML += `<p> A média dos valores é ${media}</p>`
   }
}

function maior_menor(valores) {
  var maior = valores[0]
  var menor = valores [0]
  
  for(pos in valores) {
     
     if(valores[pos] > maior) {
       maior = valores[pos]
     }
     if(valores[pos] < menor) {
       menor = valores[pos]
     }  
  }
  
  res.innerHTML += `<p> O maior dos números adicionados é : ${maior} </p>`
  res.innerHTML += `<p> O menor dos números adicionados é : ${menor} </p>`
}

function primo(valores) {
  var cont = 0
  
  for(pos in valores) {    
  for(var q = 1; q<=valores[pos]; q++) {
    if( valores[pos] %q == 0) {
     cont++
    }}  
           
    if(cont == 2) {
      cont = 0
   primos.innerHTML = `<p> O atual número adicionado é um número primo </p>`
  }else{
     cont = 0
   primos.innerHTML = `<p> O atual número adicionado não é um número primo </p>`
  }
  }
}

function pn(valores) {
 
  for(pos in valores) {
    if(valores[pos] > 0) {
      PN.innerHTML =  '<p>O atual número adicionado é um número positivo</p>'
    }else{
    PN.innerHTML = `<p> O atual número adicionado é um número negativo</p>`
    }
  }
}
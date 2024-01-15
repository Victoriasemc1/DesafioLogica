let nome = "Davi"
let experiencia = 1000
let result 

if(experiencia === 1000){
  console.log("Ferro")
  result = "Ferro"
}else if(experiencia >= 1001 && experiencia <= 2000){
  console.log("Bronze")
  result = "Bronze"
}else if(experiencia >= 2001 && experiencia <= 5000){
  console.log("Prata")
  result = "Prata"
}else if(experiencia >= 5001 && experiencia <= 7000){
  console.log("Ouro")
  result = "Ouro"
}else if(experiencia >= 7001 && experiencia <= 8000){
  console.log("Platina")
  result = "Platina"
}else if(experiencia >= 8001 && experiencia <= 9000){
  console.log("Ascendente")
  result = "Ascendente"
}else if(experiencia >= 9001 && experiencia <= 10000){
  console.log("Imortal")
  result = "Imortal"
}else if(experiencia >= 10001 ){
  console.log("Radiante")
  result = "Radiante"
}
console.log("O Herói de nome "+ nome +" está no nível de "+ result)
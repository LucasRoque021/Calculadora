const botao = document.getElementById("btn");

botao.addEventListener("click", () => {
  const input = document.querySelectorAll("input");
  const select = document.querySelector("select");
  const resultado = document.getElementById("resultado");
  const opcao = select.children[select.selectedIndex].value;
  resultado.style.color = "black";
  resultado.style.fontWeight = "normal"
  console.log(opcao);
  switch (opcao){
    case "0":
      resultado.style.color = "red";
      resultado.style.fontWeight = "bold";
      resultado.value = "ERRO!! Escolha um operador para realizar o calculo.";
      break;
    case "+":
      resultado.value = Number(input[0].value) + Number(input[1].value);
      break;
    case "-":
      resultado.value = Number(input[0].value) - Number(input[1].value);
      break;
    case "*":
      resultado.value = Number(input[0].value) * Number(input[1].value);
      break;
    case "/":
      if(Number(input[1].value) == 0){
        
        resultado.value = "ERRO!! Indeterminação na divisão(divisor não pode ser 0).";
        resultado.style.color = "red";
        resultado.style.fontWeight = "bold";
      }else{
        resultado.value = Number(input[0].value) / Number(input[1].value);
      }
      break;
  }
})

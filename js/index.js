//CALCULADORA
const resultado = document.querySelector("#resultado")
const altura = document.querySelector("#altura")
const peso = document.querySelector("#peso")

const calcIMC = () => {
  if(altura.value != '' && peso.value != ''){
    const imc = (peso.value / (altura.value * altura.value)).toFixed(1);
    let classification = ''

    if(imc<=16.9){
      classification = 'Muito abaixo do peso'
    }else if(imc>=17 && imc<=18.4){
      classification = 'Abaixo do peso'
    }else if(imc>=18.5 && imc<=24.9){
      classification = 'Peso ideal'
    }else if(imc>=25 && imc<=29.9){
      classification = 'Acima do peso'
    }else if(imc>=30 && imc<=34.9){
      classification = 'Obesidade Grau I'
    }else if(imc>=35 && imc<=40){
      classification = 'Obesidade Grau II'
    }else if(imc>40){
      classification = 'Obesidade Grau III'
    }

    resultado.innerHTML = `IMC: ${imc} (${classification})`
  }else{
    resultado.innerHTML = 'Preencha os campos!'
  }
}

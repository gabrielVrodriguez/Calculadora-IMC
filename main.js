const result = document.querySelector("#text-result")

function  calculate(){
    const weight = document.querySelector("#peso").value
    const height = document.querySelector("#altura").value / 100
    const imc = parseFloat (weight / height ** 2).toFixed(2)
    console.log(imc)

   


    let classificacao;

    if (height !=="" && weight !==""){
        if(imc < 18.5){
            classificacao="você está abaixo do peso"
        }

       else if(imc < 24.9){
            classificacao="você está com o peso normal"
        }

       else if(imc < 29.9){
            classificacao="você está acima do peso"
        }

       else if(imc < 34.9){
            classificacao="você está obeso"
        }

        else if(imc < 39.9){
            classificacao="você está com obesidade mórbida"
        }
          
        else {
            classificacao="você está extremamente obeso"
        }

        result.innerHTML = `Seu IMC é ${imc} e ${classificacao}`
        
    }


    else{
        result.innerHTML = "Houve um erro na digitação, digite corretamente, por favor!"
    }

   
}

const apagar = document.querySelector("#apagar")

apagar.addEventListener("click", apaga)


function apaga (){
    document.querySelector("#peso").value=""
    document.querySelector("#altura").value=""
    result.innerHTML=""
}



const calcular = document.querySelector("#calcular")

calcular.addEventListener("click", calculate)
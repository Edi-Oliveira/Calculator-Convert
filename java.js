const convertButton = document.querySelector("#convert")
const trocarMoeda = document.querySelector(".trocar-moeda")


function convertValues() {

    const inputValues = document.querySelector(".input-values").value
    const converterMoeda = document.querySelector(".moedaValor-convert") //moeda brasil///
    const moedaConvertida = document.querySelector(".moedaValor")    //moeda americana//


    const ieneValue = 6.5 
    const dolarValue = 5.8
    const euroValue = 6.9


    if (trocarMoeda.value == "iene") {

        moedaConvertida.innerHTML = new Intl.NumberFormat("ja-Jp", {
            style: "currency",
            currency: "JPY"
        }).format(inputValues / ieneValue)

    }


    if (trocarMoeda.value == "dolar") {

        moedaConvertida.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD"
        }).format(inputValues / dolarValue)

    }

    if (trocarMoeda.value == "euro") {


        moedaConvertida.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"

        }).format(inputValues / euroValue)
    }

    converterMoeda.innerHTML = new Intl.NumberFormat("pt-bR", {
        style: "currency",
        currency: "BRL"

    }).format(inputValues)

}


function moedaFuncao(){
    const nomeDaMoeda = document.getElementById("dolar-americano")
    const imagemMoeda = document.querySelector(".dolar-imagem")


        if (trocarMoeda.value == "dolar") {
            nomeDaMoeda.innerHTML = "Dolar"
            imagemMoeda.src = "./assets/estados-unidos.png"
    }
 
    if (trocarMoeda.value == "euro") {
        nomeDaMoeda.innerHTML = "Euro"
        imagemMoeda.src = "./assets/euro.png"
    }

    if (trocarMoeda.value == "iene") {
        nomeDaMoeda.innerHTML = "Iene"
        imagemMoeda.src = "./assets/iene.png"
    }



}


trocarMoeda.addEventListener("change", moedaFuncao )
convertButton.addEventListener("click", convertValues)










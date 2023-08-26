const key = "31e466ae686070888a1ef6f44a665b04"

function dataonscreen(dados){
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".text-prev").innerHTML = dados.weather[0].description
    document.querySelector(".humidity").innerHTML = "Humidade: " + dados.main.humidity + "%"
    document.querySelector(".img-prev").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    console.log(dados)


}



 async function search(city) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    dataonscreen(dados)

}




function clickb () {
    const city = document.querySelector(".input-city").value

    search(city)
}
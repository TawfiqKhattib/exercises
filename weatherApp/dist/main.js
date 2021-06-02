const city = new City();
const render = new Renderer()
let cityDataFromApi = []

$("#prod-input").on("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("search").click();
    }
});

$("#search").on("click", async function() {
    let input = $("#prod-input").val();
    if (input !== '') {
        let cities = await city.getCityData(input);
        cities = cities.filter(function(v) { return typeof(v) !== "string" });
        cityDataFromApi = cities;
        render.cityRender(cityDataFromApi);

    }
    // cityDataFromApi = await city.getCityData(input)
    $("#prod-input").val("");
});

$("div").on("click", '#save', async function() {
    const cityName = $(this).closest(".city").find("#name").text()
    let cities = await city.saveCity(cityName);
    cities = cities.filter(function(v) { return typeof(v) !== "string" });
    cityDataFromApi = cities;
    render.cityRender(cityDataFromApi);
    // cityDataFromApi = await city.saveCity(input);

});

$("div").on("click", '#remove', async function() {
    const cityName = $(this).closest(".city").find("#name").text()
    await city.removeCity(cityName); //.then(cityData => render.cityRender(cityData));
    // cityDataFromApi.push(cities);
    for (let index in cityDataFromApi) {
        if (cityDataFromApi[index].name === cityName) {
            cityDataFromApi.splice(index, 1);
        }
    }
    render.cityRender(cityDataFromApi);
    // cityDataFromApi = await city.removeCity(input);
    $("#prod-input").val("");
});

// $("#show").on("click", async function() {
//     let input = $("#prod-input").val();
//     const cities = await city.getDataFromDB();
//     render.cityRender(cities);
//     $("#prod-input").val("");
// });

const showWeatherInDb = async function() {
    const cities = await city.getDataFromDB();
    if (cities.length >= 1) {
        render.cityRender(cities);
    }
}
showWeatherInDb();
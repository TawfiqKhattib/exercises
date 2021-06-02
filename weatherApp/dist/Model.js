let citiesData = [];

class City {
    constructor() {


    }
    getDataFromDB = async function() {
        let cityData = await $.get('/cities');
        citiesData = [];
        citiesData = cityData;
        return citiesData;
    }

    getCityData = async function(name) {
        let cityData = await $.get(`/city/${name}`)
        if (typeof(cityData) === "object") {
            let flag = true;
            for (let item of citiesData) {
                if (item.name === cityData.name) {
                    flag = false;
                    item.temperature = cityData.temperature;
                    item.condition = cityData.condition;
                    item.conditionPic = cityData.conditionPic;
                }
            }
            if (flag) {
                citiesData.push(cityData);
            }
        }
        return citiesData;

    }

    saveCity = async function(name) {
        let cityData = await $.post("/cityPost/", name);
        if (typeof(cityData) === "object") {
            let flag = true;
            for (let item of citiesData) {
                if (item.name === cityData.name) {
                    flag = false;
                    item.temperature = cityData.temperature;
                    item.condition = cityData.condition;
                    item.conditionPic = cityData.conditionPic;
                }
            }
            if (flag) {
                citiesData.push(cityData);
            }
        }
        return citiesData;

    }

    removeCity = async function(name) {
        await $.ajax({
            url: `/cityDelet/${name}`,
            type: 'DELETE',
            success: function(result) {
                console.log('city deleted');

            }
        });
        for (let index in citiesData) {
            if (citiesData[index].name === name) {
                citiesData.splice(index, 1);
            }
        }
    }
}
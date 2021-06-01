let citiesData = [];

const cities = function() {
    return cityData;
}
class City {
    constructor() {


    }
    getDataFromDB = async function() {
        let cityData = await $.get('/cities');
        citiesData = [];
        citiesData.push(citiesData);
        return cityData;
    }

    getCityData = async function(name) {
        // const promise = new Promise((resolve, reject) => {
        console.log("in the model")
        let cityData = await $.get(`/city/${name}`)
        console.log(cityData)
        return cityData

        // let flag = true;
        // for (let item of citiesData) {
        //     if (item.name === cityData.name) {
        //         flag = false;
        //         item.temperature = citiesData.temperature;
        //         item.condition = citiesData.condition;
        //         item.conditionPic = citiesData.conditionPic;
        //     }
        // }
        // if (flag) {
        //     cityData.push(citiesData);
        // }

    }

    saveCity = async function(name) {
        // const promise = new Promise((resolve, reject) => {
        let cityData = await $.post("/cityPost/", name); //, function(citiesData) {
        let flag = true;
        for (let item of cityData) {
            if (item.name === citiesData.name) {
                flag = false;
                item.temperature = citiesData.temperature;
                item.condition = citiesData.condition;
                item.conditionPic = citiesData.conditionPic;
            }
        }
        if (flag) {
            cityData.push(citiesData);
        }
        //}
        // return cityData;
        // resolv(cityData);
        // });
        // })
        // return promise;

    }

    removeCity = function(name) {
        const promise = new Promise((resolve, reject) => {
            $.delete(`/cityDelet/${name}`, function(dataCity) {
                console.log('city deleted');
                for (let index in cityData) {
                    if (cityData[index].name === name) {
                        cityData.splice(index, 1);
                    }
                }
                // return cityData;
            });

            resolve(cityData);
        })
        return promise
    }
}
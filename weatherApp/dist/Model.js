let citiesData = [];

const cities = function() {
    return citiesData;
}
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
        // const promise = new Promise((resolve, reject) => 
        let cityData = await $.get(`/city/${name}`)
            // citiesData.push(cityData)

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
        return citiesData;

    }

    saveCity = async function(name) {
        // const promise = new Promise((resolve, reject) => {
        let cityData = await $.post("/cityPost/", name); //, function(citiesData) {
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
        return citiesData;
        //}
        // return cityData;
        // resolv(cityData);
        // });
        // })
        // return promise;

    }

    removeCity = async function(name) {
            // const promise = new Promise((resolve, reject) => {
            await $.ajax({
                url: `/cityDelet/${name}`,
                type: 'DELETE',
                success: function(result) {
                    // let cityData = await $.delete(`/cityDelet/${name}`); //, function(dataCity) {
                    console.log('city deleted');

                }
            });
            for (let index in citiesData) {
                if (citiesData[index].name === name) {
                    citiesData.splice(index, 1);
                }
            }
            // let cityData = await $.delete(`/cityDelet/${name}`); //, function(dataCity) {
            // console.log('city deleted');
            // for (let index in cityData) {
            //     if (cityData[index].name === name) {
            //         cityData.splice(index, 1);
            //     }
            // }
        }
        // return cityData;
        // });

    // resolve(cityData);
    // })
    // return promise
    // }
}
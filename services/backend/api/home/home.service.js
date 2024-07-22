const { TABLE_NAME } = require('../../../common/tablenames')
const knex = require('../../../config/knex')
const { API_RESPONSE_MESSAGES, } = require('../../../common/constants')
const axios = require('axios');
const moment = require('moment');
require("dotenv").config();

module.exports = {

    _storeHistoricalWeatherData: async (city) => {
        let isSuccess = false;
        let resObj = {
          success: false,
          message: "",
          status_code: 0,
        };
    
        try {

            const cities = [
                { name: 'Delhi', country: 'IN' },
                { name: 'Moscow', country: 'RU' },
                { name: 'Paris', country: 'FR' },
                { name: 'New York', country: 'US' },
                { name: 'Sydney', country: 'AU' },
                { name: 'Riyadh', country: 'SA' }
            ];
            
            await knex.transaction(async trx => {
                for(let city of cities){

                    const response = await axios.get(process.env.WEATHER_API, {
                        params: {
                            q: `${city.name},${city.country}`,
                            appid: process.env.WEATHER_API_KEY,
                            units:'metric'
                        }
                    });
            
                    const data = response.data;
                    const unixTimestamp = data.dt; 
                    const formattedDate = moment.unix(unixTimestamp).format('YYYY-MM-DD HH:mm:ss');
                    const weatherData = {
                        Location: data.name,
                        WeatherName: data.weather[0].main,
                        Description: data.weather[0].description,
                        Temperature: data.main.temp,
                        DateTime: formattedDate
                    };
        
                    if(data){
                        
        
                            isExist = await  knex.select().from(TABLE_NAME.WeatherHistory).where({
                                Location :data.name,
                                DateTime: formattedDate
                            }).first();
        
                            if(!isExist){
                                const storeWeather = await knex(TABLE_NAME.WeatherHistory)
                                .insert({
                                Location: data.name,
                                WeatherName: data.weather[0].main,
                                Description: data.weather[0].description,
                                Temperature: data.main.temp,
                                DateTime: formattedDate
                                }, 'Id')
                                .transacting(trx);  
                            }
                            
                    
                    }
                }

            })
           

            isSuccess = true;
            
        }catch(error){
            console.log(error);
        }

        resObj.success = isSuccess;
        return resObj;
    },
    _getWeatherHistory: async (data) =>{
        let isSuccess = false;
        let resObj = {
          success: false,
          message: "",
          status_code: 0,
          data:[]
        };

        try {

            let filterCondition = ``;

            if (data.FromDate && data.ToDate) {
                filterCondition += ` AND CAST(WH.DateTime AS DATE) BETWEEN '${data.FromDate}' AND '${data.ToDate}' `;
            }

            const result = await knex.raw(`
                SELECT WH.* FROM ${TABLE_NAME.WeatherHistory} WH WHERE 1=1 
                ${filterCondition}
                ORDER BY DateTime DESC `)

            resObj.data = result[0]
            isSuccess = true;
            
        }catch(error){
            console.log(error);
        }

        resObj.success = isSuccess;
        return resObj;
    },
    _getWeatherForLocation: async (city) =>{
        let isSuccess = false;
        let resObj = {
          success: false,
          message: "",
          status_code: 0,
          data:{}
        };
    
        try {
            const response = await axios.get(process.env.WEATHER_API, {
                params: {
                    q: city,
                    appid: process.env.WEATHER_API_KEY,
                    units:'metric'
                }
            });
    
            const data = response.data;
            const unixTimestamp = data.dt; 
            const formattedDate = moment.unix(unixTimestamp).format('YYYY-MM-DD HH:mm:ss');
            const weatherData = {
                Location: data.name,
                WeatherName: data.weather[0].main,
                Description: data.weather[0].description,
                Temperature: Math.round(data.main.temp),
                DateTime: formattedDate
            };

            resObj.data = weatherData
            isSuccess = true;
            
        }catch(error){
            console.log(error);
        }

        resObj.success = isSuccess;
        return resObj;
    }
    
}
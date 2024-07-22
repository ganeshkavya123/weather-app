const { API_RESPONSE_MESSAGES, API_RESPONSE_STATUS_CODE } = require('../../../common/constants')
const { _storeHistoricalWeatherData, _getWeatherHistory,_getWeatherForLocation } = require('./home.service')
const moment = require('moment');

module.exports={
    storeHistoryWeatherData: async (req, res) => {

        const currentDateUtc = new Date(new Date().toUTCString());

        // if(!req.query.City){
        //     return res.status(400).json({
        //         status: API_RESPONSE_STATUS_CODE.FAILED,
        //         message: API_RESPONSE_MESSAGES.BAD_REQUEST,
        //     });
        // }


        try{

            let result = await _storeHistoricalWeatherData();

            if(result.success){

                return res.json({
                    status: API_RESPONSE_STATUS_CODE.SUCCESS,
                    message: API_RESPONSE_MESSAGES.SUCCESS,
                });

            }else{
                return res.json({
                    status: API_RESPONSE_STATUS_CODE.FAILED,
                    message: API_RESPONSE_MESSAGES.SERVER_ERROR,
                  });
            }

        }catch(err){
            console.log(err);
            return res.status(500).json({
                status: API_RESPONSE_STATUS_CODE.FAILED,
                message: API_RESPONSE_MESSAGES.SERVER_ERROR,
            });
        }


    },
    getWetherHistory: async (req, res) => {

        const currentDateUtc = new Date(new Date().toUTCString());

        let data ={};
        if (req.query.fromDate != undefined && req.query.toDate != undefined && req.query.fromDate != '' && req.query.toDate != '') {
            data.FromDate = req.query.fromDate;
            data.ToDate = req.query.toDate;
          }

        try{

            let result = await _getWeatherHistory(data);

            if(result.success){

                
                const list = result.data.map(itm => ({
                    Location: itm.Location,
                    WeatherName: itm.WeatherName,
                    Description: itm.Description,
                    Temperature: Math.round(itm.Temperature),
                    DateTime: moment(itm.DateTime).format('YYYY-MM-DD hh:mm A')
                }));
    
                return res.json({
                    status: API_RESPONSE_STATUS_CODE.SUCCESS,
                    message: API_RESPONSE_MESSAGES.SUCCESS,
                    data: list,
                });
            }else{
                return res.json({
                    status: API_RESPONSE_STATUS_CODE.FAILED,
                    message: API_RESPONSE_MESSAGES.SERVER_ERROR,
                    data: [],
                  });
            }

        }catch(err){
            console.log(err);
            return res.status(500).json({
                status: API_RESPONSE_STATUS_CODE.FAILED,
                message: API_RESPONSE_MESSAGES.SERVER_ERROR,
            });
        }


    },
    getWeatherForLocation: async (req, res) => {

        const currentDateUtc = new Date(new Date().toUTCString());

        if(!req.query.City){
            return res.status(400).json({
                status: API_RESPONSE_STATUS_CODE.FAILED,
                message: API_RESPONSE_MESSAGES.BAD_REQUEST,
            });
        }


        try{

            let result = await _getWeatherForLocation(req.query.City);

            if(result.success){

                return res.json({
                    status: API_RESPONSE_STATUS_CODE.SUCCESS,
                    message: API_RESPONSE_MESSAGES.SUCCESS,
                    data: result.data
                });

            }else{
                return res.json({
                    status: API_RESPONSE_STATUS_CODE.FAILED,
                    message: API_RESPONSE_MESSAGES.SERVER_ERROR,
                    data:{}
                  });
            }

        }catch(err){
            console.log(err);
            return res.status(500).json({
                status: API_RESPONSE_STATUS_CODE.FAILED,
                message: API_RESPONSE_MESSAGES.SERVER_ERROR,
            });
        }


    },
}
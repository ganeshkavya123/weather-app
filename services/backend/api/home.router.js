const router = require("express").Router();
const {  storeHistoryWeatherData, getWetherHistory, getWeatherForLocation } = require("./home/home.controller");


router.post("/add-weather", storeHistoryWeatherData )
router.get("/weather-history", getWetherHistory )
router.get("/location-weather", getWeatherForLocation )


module.exports = router;

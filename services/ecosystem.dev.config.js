const DATABASE_DEV = {
    DB_TYPE: "mysql",
    DB_HOST: "127.0.0.1",
    DB_USER: "root",
    DB_PASS: "root123",
    DB_NAME: "demo",
    DB_PORT: "3306",  
    KNEX_DEBUG: false,
}

const COMMON_DEV = {
    PORT: 3001,
    WEATHER_API_KEY: '38117b1dac214cd13d60d9eb05748043',
    WEATHER_API:`https://api.openweathermap.org/data/2.5/weather`,
    

}


module.exports = {
    apps: [
        //------------- WEB SERVICE --------//
        {
        name: "BACKEND-SERVICES",
        script: "./backend/api/app.js",
        watch: true,
        // ignore_watch: ["Uploads", "public/category/images"],
        cwd: "./",
        exec_mode: "cluster",
        instances: 1,
        env: {
          ...DATABASE_DEV,
          ...COMMON_DEV,
        },
        env_production: {
          //Tobe Added
        },
        log_date_format: "YYYY-MM-DD HH:mm Z",
      },
    ]
}
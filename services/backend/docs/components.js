module.exports = {
    security: [
      {
        bearerAuth: [],
      },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
            },
        },
        schemas: {
          AddLocationWeatherResponse:{
            type: "object",
            properties: {
                "status": {
                  "type": "integer",
                  "format": "int32",
                  "example": "1"
                },
                "message": {
                  "type": "string",
                  "example": "success"
                }
              }
          },
          LocationWeatherHistoryResponse:{
            type: "object",
            properties: {
              "status": {
                "type": "integer",
                "format": "int32",
                "example": "1"
              },
              "message": {
                "type": "string",
                "example": "success"
              },
              "data": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "Location": {
                      "type": "string",
                      "example": "London"
                    },
                    "WeatherName": {
                      "type": "string",
                      "example": "Clouds"
                    },
                    "Description": {
                      "type": "string",
                      "example": "broken clouds"
                    },
                    "Temperature": {
                      "type": "number",
                      "example": "16.81"
                    },
                    "DateTime": {
                      "type": "string",
                      "example": "2024-06-22 05:46 PM"
                    }
                  }
                },
                "example": [
                  {
                    "Location": "London",
                    "WeatherName": "Clouds",
                    "Description": "broken clouds",
                    "Temperature": 16.81,
                    "DateTime": "2024-06-22 05:46 PM"
                  }
                ]
              }
            }
          },
          LocationWeatherResponse:{
            type: "object",
            properties: {
              "status": {
                "type": "integer",
                "format": "int32",
                "example": "1"
              },
              "message": {
                "type": "string",
                "example": "success"
              },
              "data": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "Location": {
                      "type": "string",
                      "example": "London"
                    },
                    "WeatherName": {
                      "type": "string",
                      "example": "Clouds"
                    },
                    "Description": {
                      "type": "string",
                      "example": "broken clouds"
                    },
                    "Temperature": {
                      "type": "number",
                      "example": "16.81"
                    },
                    "DateTime": {
                      "type": "string",
                      "example": "2024-06-22 05:46 PM"
                    }
                  }
                },
                "example": [
                  {
                    "Location": "London",
                    "WeatherName": "Clouds",
                    "Description": "broken clouds",
                    "Temperature": 16.81,
                    "DateTime": "2024-06-22 05:46 PM"
                  }
                ]
              }
            }
          },
        }

    }
}
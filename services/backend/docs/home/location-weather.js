module.exports = {
    get: {
        tags: ['GET : Location Weather'],
        description: "Location Weather",
        operationId: "LocationWeather",
        parameters: [
            {
                in: 'query',
                name: "City",
                schema: {
                    type: 'string'
                }
            },
          
        ],
        requestBody: {
        },
        responses: {
            '200': {
                description: 'Successful operation',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/LocationWeatherResponse'
                        }
                    }
                },
            },
            '500': {
                description: 'Server error'
            }
        }
    }
}
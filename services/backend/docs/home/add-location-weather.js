module.exports = {
    post: {
        tags: ['POST: Add Location Weather'],
        description: "Add Location Weather",
        operationId: "AddLocationWeather",
        parameters: [
        
          
        ],
        requestBody: {
        },
        responses: {
            '200': {
                description: 'Successful operation',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/AddLocationWeatherResponse'
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
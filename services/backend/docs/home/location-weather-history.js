module.exports = {
    get: {
        tags: ['GET: Location Weather History'],
        description: "Location Weather History",
        operationId: "LocationWeatherHistory",
        parameters: [
            {
                in: 'query',
                name: "fromDate",
                schema: {
                    type: 'string'
                }
            },
            {
                in: 'query',
                name: "toDate",
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
                            $ref: '#/components/schemas/LocationWeatherHistoryResponse'
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
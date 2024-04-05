// Import AWS SDK
const AWS = require('aws-sdk');

// Create DynamoDB Document Client
const docClient = new AWS.DynamoDB.DocumentClient();

// Lambda handler function
exports.handler = async (event) => {
    try {
        // Update visitor count in DynamoDB
        await updateVisitorCount();
        
        // Return success response
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Visitor count updated successfully' })
        };
    } catch (error) {
        // Return error response
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};

// Function to update visitor count in DynamoDB
async function updateVisitorCount() {
    const params = {
        TableName: 'VisitorCount',
        Key: { id: 'total_visitors' },
        UpdateExpression: 'ADD #count :incr',
        ExpressionAttributeNames: {
            '#count': 'count'
        },
        ExpressionAttributeValues: {
            ':incr': 1
        }
    };

    await docClient.update(params).promise();
}

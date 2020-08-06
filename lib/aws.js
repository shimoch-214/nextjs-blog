import AWS from 'aws-sdk';

const tableName = 'sampleNextTable';

export const getSortedPostsData = async () => {
    const docClient = new AWS.DynamoDB.DocumentClient({
        region: 'us-west-2',
        accessKeyId: 'cUniqueSessionID',
        secretAccessKey: 'hoge',
        endpoint: 'http://localhost:8000'
    });

    try {
        const res = await docClient.scan({
            TableName: tableName
        }).promise();
        return res.Items;
    } catch (err) {
        console.log(err);
    }
}
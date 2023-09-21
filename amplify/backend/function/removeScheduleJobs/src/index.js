/* Amplify Params - DO NOT EDIT
    API_FREELAFINDER_GRAPHQLAPIENDPOINTOUTPUT
    API_FREELAFINDER_GRAPHQLAPIIDOUTPUT
    API_FREELAFINDER_GRAPHQLAPIKEYOUTPUT
    ENV
    REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */


const AWS = require('aws-sdk');
const moment = require('moment')
const docClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;
const AppSyncId = process.env.API_FREELAFINDER_GRAPHQLAPIIDOUTPUT
const TableName = `Job-${AppSyncId}-${env}`


const updateJob = async (job) => {
    try {
        const Item = {
            ...job,
        }

        const params = {
            TableName,
            Item
        }

        const response = await docClient.put(params).promise();
        return response
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }
}

exports.handler = async (event) => {

    const response = await docClient.scan({ TableName }).promise();
    const jobs = response.Items;
    const jobsToBeUpdated = jobs.filter(date => moment(date.createdAt).add(7, 'days') <= moment() && date.status === "OPEN")
    await Promise.all(jobsToBeUpdated.map(job => updateJob({ id: job.id, ...job, status: "FINISHED" })))

    return {
        statusCode: 200,
        body: JSON.stringify('Jobs updated successfully'),
    };
};

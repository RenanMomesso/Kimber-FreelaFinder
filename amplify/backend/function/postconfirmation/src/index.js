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
const docClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;
const AppSyncId = process.env.API_FREELAFINDER_GRAPHQLAPIIDOUTPUT
const TableName = `User-${AppSyncId}-${env}`


const userAlreadyExists = async (id) => {
    try {
        const params = {
            TableName,
            Key: id
        };

        const doc = await docClient.get(params).promise()
        console.log("USER EXISTS", doc)
        return !!doc?.Item
    } catch (error) {
        console.log("USER ALREADY EXISTS: ", error)
        return false;
    }
};

const saveUser = async (user) => {

    const date = new Date();
    const dateStr = date.toISOString();
    const timestamp = date.getTime();

    const Item = {
        ...user,
        __typename: 'User',
        createdAt: dateStr,
        updatedAt: dateStr,
        _version: 1 
    }

    const params = {
        TableName,
        Item
    }
    try {
        await docClient.put(params).promise();
        console.log("USER SAVED SUCCESSFULLY 🚀🚀🚀🚀🚀🚀")

    } catch (error) {
        console.log("ERROR 🔞🔞🔞🔞🔞: ", error)
        return;
    }
};

exports.handler = async (event, context) => {
    if (!event.request?.userAttributes) return;

    const { sub, email } = event.request.userAttributes;

    const newUser = {
        id: sub,
        email,
        fullname: email.split('@')[0],
        categories: [],
        location: {},
        reviewsLength: 0,
        toalJobsDone: 0,
        skills: [],
        subcategories: [],
        phoneNumber: "",
        avatar: "",
        notificationsActived: false,
        website: "",
        portfolio: [{ title: "", url: "" }],
        reviews: [],
        jobId: null,
        firstTimeLoggin:true
    }

    if (!(await userAlreadyExists(newUser.id))) {
        await saveUser(newUser)
    } else {
        console.log("USER ALREADY EXISTS")
    }


    return event;



};

// /**
//  * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
//  */

  // return {
        // statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
        // body: JSON.stringify('Hello from Lambda!'),
    // };

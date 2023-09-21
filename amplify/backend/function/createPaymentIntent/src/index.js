

const stripe = require('stripe')("sk_test_51MW4U1FwHjvHJVKv5X143sXseRQmameOQs4di8vnfrerjmJJDP6ioIceOuqQo6AKQvjep2HFxudhlmc7kvzidcy900tN2dhxcy");
exports.handler = async (event) => {
    
    const { typeName, arguments } = event;
    console.log("🚀 ~ file: index.js:9 ~ exports.handler= ~ arguments", arguments)

    if(typeName !== 'Mutation'){
        throw new Error('Invalid type');
    }
    if(!arguments?.amount){
        throw new Error('Invalid amount');
    }

    const paymentIntent = await stripe.paymentIntents.create({
        amount: arguments.amount,
        currency: 'usd'
    })
    console.log("🚀 ~ file: index.js:20 ~ exports.handler= ~ paymentIntent", paymentIntent)

    return {
        clientSecret: paymentIntent.client_secret
    }
};

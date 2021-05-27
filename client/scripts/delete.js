const AWS = require("aws-sdk");

AWS.config.update({
    region: "us-east-1",
});

var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName: "Movies",
    Key: {
        year: 2015,
        title: "Big Bang",
    },
};

docClient.delete(params, function (err, data) {
    if (err) {
        console.error("Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Success JSON:", JSON.stringify(data, null, 2));
    }
});

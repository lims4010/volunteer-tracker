const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1"
})

var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
  TableName: "WT_DateTable",
  Item: {
    date: "6/1",
  },
};

docClient.put(params, function (err, data) {
  if (err) {
    console.error("Error JSON:", JSON.stringify(err, null, 2));
  } else {
    console.log("Success JSON:", JSON.stringify(data, null, 2));
  }
});

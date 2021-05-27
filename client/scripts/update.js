const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
});

var docClient = new AWS.DynamoDB.DocumentClient();
var val = "6/1";
var params = {
  TableName: "WT_DateTable",
  Key: {
    date: "5/30",
  },
  UpdateExpression: "add #oldnames :newnames",
  ExpressionAttributeNames: {
    "#oldnames": "names"
  },
  ExpressionAttributeValues:{
    ":newnames": docClient.createSet(["test2"])
  },
  ReturnValues: "ALL_NEW",
};

docClient.update(params, function (err, data) {
  if (err) {
    console.error("Error JSON:", JSON.stringify(err, null, 2));
  } else {
    console.log("Success JSON:", JSON.stringify(data, null, 2));
  }
});

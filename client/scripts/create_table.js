const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
});

var dynamoDB = new AWS.DynamoDB();

var params = {
  TableName: "WT_DateTable",
  KeySchema: [
    {
      AttributeName: "date",
      KeyType: "HASH",
    },
  ],
  AttributeDefinitions: [
    {
      AttributeName: "date",
      AttributeType: "S",
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10,
  },
};

dynamoDB.createTable(params, function (err, data) {
  if (err) {
    console.error(
      "Unable to create table. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log(
      "Created table. Table description JSON:",
      JSON.stringify(data, null, 2)
    );
  }
});

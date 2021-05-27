const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
});
var docClient = new AWS.DynamoDB.DocumentClient();

const DB_TABLE_NAME = "WT_DateTable";

const addNameDB = async (selectedRows, name) => {
  await Promise.all([
    selectedRows.forEach(async ({ date: key }) => {
      var params = {
        TableName: DB_TABLE_NAME,
        Key: {
          date: key,
        },
        UpdateExpression: "add #oldnames :newnames",
        ExpressionAttributeNames: {
          "#oldnames": "names",
        },
        ExpressionAttributeValues: {
          ":newnames": docClient.createSet([name]),
        },
        ReturnValues: "ALL_NEW",
      };

      docClient.update(params, function (err, data) {
        if (err) {
          // console.error("Error JSON:", JSON.stringify(err, null, 2));
        } else {
          // console.log("Success JSON:", JSON.stringify(data, null, 2));
        }
      });
    }),
    () => {
      console.log("Promise error");
    },
  ]);
};

const deleteNameDB = async (selectedRows, name) => {
  await Promise.all([
    selectedRows.forEach(async ({ date: key }) => {
      var params = {
        TableName: DB_TABLE_NAME,
        Key: {
          date: key,
        },
        UpdateExpression: "delete #oldnames :name",
        ExpressionAttributeNames: {
          "#oldnames": "names",
        },
        ExpressionAttributeValues: {
          ":name": docClient.createSet([name]),
        },
        ReturnValues: "ALL_NEW",
      };

      docClient.update(params, function (err, data) {
        if (err) {
          // console.error("Error JSON:", JSON.stringify(err, null, 2));
        } else {
          // console.log("Success JSON:", JSON.stringify(data, null, 2));
        }
      });
    }),
    () => {
      console.log("Promise error");
    },
  ]);
};

const getNameDB = async (date) => {
  var params = {
    TableName: DB_TABLE_NAME,
    Key: {
      date: date,
    },
  };

  data = await docClient.get(params).promise();
  data = Object.keys(data).length === 0 ? [] : data["Item"]["names"];
  return data;
};

module.exports = { getNameDB, addNameDB, deleteNameDB };

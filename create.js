import uuid from "uuid";
import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context, callback) {
   const data = JSON.parse(event.body);
   const params = {
    TableName: process.env.tableName,
    Item: {
        userId: data.cognitoIdentityId,
        tripId: data.tripName,
        text: data.text,
        coordinates: data.coordinateArray,
        imageUrl: data.imageUrl,
        // attachment: data.attachment,
        createdAt: Date.now()
    }
  };

  try {
    await dynamoDbLib.call("put", params);
    callback(null, success(params.Item));
  } catch (e) {
    callback(null, failure({ status: false }));
  }
}
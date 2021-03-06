# Fly Box API (v2) Serverless



#### Usage

To use this repo locally you need to have the [Serverless framework](https://serverless.com) installed.

``` bash
$ npm install serverless -g
```

Clone this repo and install the NPM packages.

``` bash
$ git clone https://github.com/reeda6/fly-box-api-dev-2.git
$ npm install
$ serverless deploy
```

Integrate with credentialed AWS-Amplify modules (API, Storage, etc.). Check 
https://github.com/reeda6/Fly-Box.git for examples. 


#### Functions

endpoints:

  POST - https://v9du73d1f5.execute-api.us-east-1.amazonaws.com/dev/create

  POST - https://v9du73d1f5.execute-api.us-east-1.amazonaws.com/dev/getTrip

  GET - https://v9du73d1f5.execute-api.us-east-1.amazonaws.com/dev/listTrips

  PUT - https://v9du73d1f5.execute-api.us-east-1.amazonaws.com/dev/update/{id}

  DELETE - https://v9du73d1f5.execute-api.us-east-1.amazonaws.com/dev/delete/{id}

  POST - https://v9du73d1f5.execute-api.us-east-1.amazonaws.com/dev/billing

functions:

  create: fb-dev-api-2-dev-create

    -param: event.body = {

        userId: data.cognitoIdentityId,

        tripId: data.tripName,

        text: data.text,

        coordinates: data.coordinateArray,

        imageUrl:data.imageUrl

      }

  get: fb-dev-api-2-dev-get

  list: fb-dev-api-2-dev-list

  update: fb-dev-api-2-dev-update

  delete: fb-dev-api-2-dev-delete

  billing: fb-dev-api-2-dev-billing
  
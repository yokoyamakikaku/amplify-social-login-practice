/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

/* Amplify Params - DO NOT EDIT
	AUTH_AMPSOCLOGPRAAUTH_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const bodyParser = require('body-parser')
const express = require('express')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
})

app.get('/', function(req, res) {
  res.text('OK')
})

app.post('/exec', function(req, res) {

  const body = req.body
  const code = body.code
  const token = body.token

  // Add your code here
  res.json({ result: 'success', code: code, token: token})
})

module.exports = app

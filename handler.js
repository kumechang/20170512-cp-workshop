'use strict';

var AWS = require('aws-sdk');

AWS.config.update({
	accessKeyId: 'XXXXX',
	secretAccessKey: 'XXXXX',
	region: 'us-east-1'
});

var s3 = new AWS.S3();
var moment = require("moment");

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports.bye = (event, context, cb) => {

  const response = {
    message: 'good bye'
  }

  cb(null, response);
}

module.exports.connectS3 = (event, context, cb) => {

  var params = {Bucket: 'test20170512', Key: 'hello', Body: 'world'};

  Promise.resolve(0)
  .then((dummy)=>{
    s3.putObject(params, (err, data)=>{
      cb(null, data);
    });  
  });


}

module.exports.moment = (event, context, cb) => {

  cb(null, moment().format("YYYY-MM-DD HH:mm:ssZ"));

}
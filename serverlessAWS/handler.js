'use strict';

module.exports.hello = (event, context, callback) => {
  const html = `
  <!doctype html>
  <html lang='es'>
  <head>
    <meta charset='UTF-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style>h1 { color: #2d4dcc; }</style>
    <style>h6 { color: #aa2723; }</style>
  </head>
  <body>
    <h1>ElectroMechanics</h1>
    <h6>SERVICIOS DE REPARACIÓN</h6>
  </body>
  </html>


  `;
  const response = {
    statusCode: 200,
    headers: {'Content-Type': 'text/html',},
    body: html,
  };

  callback(null, response);

};

// module.exports.portfolio = (event, context, callback) => {
//   const response = {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: 'portfolio'
//     }),
//   };
//
//   callback(null, response);
//
//   // Use this code if you don't use the http event with the LAMBDA-PROXY integration
//   // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
// };

'use strict';

import 'babel-polyfill';
import lambda from 'apex.js';
import axios from 'axios';

//const sleep = time => {
//  return new Promise((resolve,reject) => {
//    console.log(time);
//    setTimeout(() => {resolve(time + ' wait done.');}, time);
//  });
//};

module.exports.hello = (event, context, cb) => {
  cb(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
  //(async function(){
  //  console.log(await sleep(1000));
  //  console.log(await sleep(500));
  //  cb(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
  //})();
};

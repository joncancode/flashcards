"use strict"


require('dotenv').config(); // converts .env file into an object: process.env

export.DATABASE_URL= 'mongodb://dev:1@ds135912.mlab.com:35912/notehero'

// exports.DATABASE_URL = process.env.DATABASE_URL ||
//                        global.DATABASE_URL ||
//                       'mongodb://localhost/notehero';
//                       // console.log('process.env.DATABASE_URL);
// exports.TEST_DATABASE_URL = (
//   process.env.TEST_DATABASE_URL ||
//  'mongodb://localhost/test-notehero');
exports.PORT = process.env.PORT || 3001;

// console.log('mLab', exports.DATABASE_URL);

//equire('dotenv').config({path: __dirname + '/.env'})
// mongodump -h ds135912.mlab.com:35912 -d notehero -u 'dev' -p '1' -o ~/

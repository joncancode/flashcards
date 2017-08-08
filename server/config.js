"use strict"

require('dotenv').config(); // converts .env file into an object: process.env

exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://localhost/notehero';
exports.TEST_DATABASE_URL = (
  process.env.TEST_DATABASE_URL ||
 'mongodb://localhost/test-notehero');
exports.PORT = process.env.PORT || 8080;

// mongodump -h ds135912.mlab.com:35912 -d notehero -u 'dev' -p '1' -o ~/

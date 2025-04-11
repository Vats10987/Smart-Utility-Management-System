const config = {};

const isDevelopment = process.env.NODE_ENV === 'development' ? true : false;

config.PORT = isDevelopment ? 5000 : process.env.PORT || 5000;
config.API_VERSION = isDevelopment ? '/v1' : process.env.API_VERSION || '/v1';
config.NODE_ENV = process.env.NODE_ENV;
config.DB_STRING = isDevelopment ? 'mongodb+srv://Nachiket:Nachi1502@cluster0.lp91u.mongodb.net/' : process.env.DB_STRING;
config.SECRETE = isDevelopment ? 'development' : process.env.SECRETE;

module.exports = { config };   

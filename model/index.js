'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(__filename);
var env = process.env.NODE_ENV || 'development';
var config = require('../config.js')[env].db;
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize.sync({ force: true })
  .then(() => {
    db.ad_full.create({
      "uuid": 'littlepug1',
      "appid": "pingtai",
      "isDelete": false,
      "picture": "https://b-ssl.duitang.com/uploads/item/201411/18/20141118235250_PSc5A.jpeg",
      "needShow": true,
      "immediately": false,
      "startTime": new Date('2018-03-03'),
      "endTime": new Date('2019-01-01'),
      "duration": 4,
      "ext": 'jpeg',
    })
    db.ad_full.create({
      "uuid": 'yuanxinadtest2',
      "appid": "pingtai",
      "isDelete": false,
      "picture": "https://mobiletest.yuanxin2015.com/FileDownService/down/file?parment=AD/2018/3/AD-20180327.jpg",
      "needShow": true,
      "immediately": true,
      "startTime": new Date('2017-03-03'),
      "endTime": new Date('2018-01-01'),
      "duration": 10,
      "ext": 'jpg',
    })
  })


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
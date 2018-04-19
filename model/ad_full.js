'use strict'

module.exports = (sequelize, DataTypes) => {

  let ad_full = sequelize.define('ad_full', {
    uuid: DataTypes.STRING,
    appid: DataTypes.STRING,
    needShow: DataTypes.BOOLEAN,
    immediately: DataTypes.BOOLEAN,
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    duration: DataTypes.INTEGER,
    picture: DataTypes.STRING,
    ext: DataTypes.TEXT,
    isDelete: DataTypes.BOOLEAN,
  })

  return ad_full;
}




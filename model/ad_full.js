'use strict'

module.exports = (sequelize, DataTypes) => {

  let ad_full = sequelize.define('ad_full', {
    isDelete: DataTypes.BOOLEAN,
    uuid: DataTypes.STRING,
    needShow: DataTypes.BOOLEAN,
    immediately: DataTypes.BOOLEAN,
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    duration: DataTypes.INTEGER,
    picture: DataTypes.STRING,
    ext: DataTypes.TEXT,
  })

  return ad_full;
}




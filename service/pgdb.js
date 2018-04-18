const pg = require('pg')

const config = require('../config').pgdb

const pool = new pg.Pool(config);

// 查询
pool.connect(function (err, client, done) {
  if (err) {
    return console.error('数据库连接出错', err);
  }
  // 简单输出个 Hello World
  client.query('SELECT $1::varchar AS OUT', ["Hello World"], function (err, result) {
    done();// 释放连接（将其返回给连接池）
    if (err) {
      return console.error('查询出错', err);
    }
    console.log(result.rows[0].out); //output: Hello World
  });
});
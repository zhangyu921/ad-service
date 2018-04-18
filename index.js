const logger = require('koa-logger')
const router = require('./router')

const Koa = require('koa')
const app = new Koa()

app.use(logger())

app.use(router.routes())

app.listen(3000)


const Koa = require('koa')
const app = new Koa()

app.on('error', (err, ctx) => {
  console.log(err, ctx)
})

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`)
})

app.use(async (ctx, next) => {
  const start = Date.now()
  await next();
  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(async ctx => {
  ctx.body = 'Hello World'
})


app.listen(3000)
app.listen(3001)
const router = require('koa-router')()

router
  .get('/', renderCtx)
  .get('/ad/:appid/info', async ctx => {
    const appid = ctx.params.appid
    console.log(appid)
    ctx.body = {
      needShow: false
    }
  })

async function renderCtx(ctx) {
  ctx.body = ctx
}

module.exports = router
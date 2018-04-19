const router = require('koa-router')()

const model = require('../model')

router
  .get('/', renderCtx)
  .get('/ad/:appid/info', async ctx => {
    const appid = ctx.params.appid
    let adinfos = await model.ad_full.findAll({
      where: { appid, isDelete: false }
    })

    ctx.body = {
      uuid: 'test113',
      needShow: true,
      data: adinfos
    }
  })

async function renderCtx(ctx) {
  ctx.body = ctx
}

module.exports = router
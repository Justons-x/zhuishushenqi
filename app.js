const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const crypto = require('crypto')

const app = new Koa()
const router = new Router()

//日志中间件
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (e) {
    ctx.body = e.status
  }
})
//message handle
router.get('/wechat', async ctx => {
  ctx.throw(400, 'Invalid name')
})

app.use(router.routes()).use(router.allowedMethods())


app.listen(8080, () => console.log('server is running on port 8080'))

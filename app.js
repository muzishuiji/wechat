const koa = require('koa')             //koa模块
const app = new koa()
const router = require('./router/index');
const config = require('./config/config')

app
.use(router.routes())
.use(router.allowedMethods());


app.listen(config.port, function () {
    console.log('this server is listening at port 8080');
});
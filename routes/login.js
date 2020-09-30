const router = require('koa-router')()
let Mock = require('mockjs'); //引入mockjs
let Random = Mock.Random; //引入mock随机属性的函数

//给当前路由添加前缀(相当于/index/list)
router.prefix('/doc')

// router.get('/', async (ctx, next) => {
// 	await ctx.render('index', {
// 		title: '登陆'
// 	})
// })

router.post('/login', async (ctx, next) => {
    const params = ctx.request.body
    const { username,password } = params;
    const pws = '123456';
    const user = 'admin';
    if(password == pws && username == user){
        console.log('验证成功')
        ctx.body = {
            statusCode = '200'
        }
    }
})
router.post('/register',async (ctx,next)=>{
    const params = ctx.request.body;

})


module.exports = router

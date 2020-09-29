const router = require('koa-router')()
let Mock = require('mockjs'); //引入mockjs
let Random = Mock.Random; //引入mock随机属性的函数

//给当前路由添加前缀(相当于/index/list)
router.prefix('/index')

router.get('/', async (ctx, next) => {
	await ctx.render('index', {
		title: 'Hello Koa 2!'
	})
})

router.post('/string', async (ctx, next) => {
	ctx.body = await Mock.mock({
		'result|3-15': [{
			// 属性 id 是一个自增数，起始值为 1，每次增 1
			'id|+1': 1,
			'name|+1': Random.cname(),
			'xuetang|+1': Random.integer(60, 100),
			'xueya|+1':Random.integer(60, 100),
			'xinlv|+1':Random.integer(60, 100),
		}]
	})
})

router.get('/json', async (ctx, next) => {
	ctx.body = {
		title: 'koa2 json'
	}
})

module.exports = router

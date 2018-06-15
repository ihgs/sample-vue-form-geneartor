var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('server/db.json')
var middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)



router.render = function (req, res) {
  var data = res.locals.data.data
  if (Array.isArray(data)) {
    let _page = req.query._page
    let _limit = req.query._limit
    _page = parseInt(_page, 10)
    _page = _page >= 1 ? _page : 1
    _limit = parseInt(_limit, 10) || 10
    const start = (_page - 1) * _limit
    const end = _page * _limit
    const items = data.slice(start, end)
    res.jsonp({
      data: items,
      meta: res.locals.data.meta
    })
  } else {
    res.jsonp(data)
  }
}

server.listen(3000, function () {
  console.log('JSON Server is running')
})
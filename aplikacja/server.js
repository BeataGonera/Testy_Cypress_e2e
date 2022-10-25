const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.method = 'GET'
  }
  // Continue to JSON Server router
  next()
})

const isAuthorized = (req) => {
  if (req.path === '/login' && req.body.username === 'wiki' && req.body.password === 'FjR2qUBU0MXlkYY') {
    return true;
  }

  if (req.path === '/user' && req.header('x-auth') === 'iBKb2Or3DbtVgcw') {
    return true;
  }

  return false;
}

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
 if (isAuthorized(req)) { // add your authorization logic here
   next() // continue to JSON Server router
 } else {
   res.sendStatus(401)
 }
})
server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})
const fastify = require('fastify')
const { Database } = require('./database')
const { REPLClient } = require('./repl')

const app = fastify()
const db = new Database()
const client = new REPLClient('http://localhost:9000')

app.get('/chat', (request, reply) => {
  reply.send(db.getMessages())
})

app.post('/chat', {
  handler: (request, reply) => {
    const message = db.createMessage(request.body.message)
    client.publish('demo', JSON.stringify(message))
    reply.send(message)
  },
  schema: {
    body: {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
})

app.listen(
  {
    port: 3000,
  },
  (_, addr) => {
    console.log(`Server listening at ${addr}`)
  },
)

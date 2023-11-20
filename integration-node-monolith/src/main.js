const fastify = require('fastify')
const { Database } = require('./database')
const { Observable } = require('./observable')

const app = fastify()
const db = new Database()
const chat = new Observable()

app.get('/chat', (request, reply) => {
  reply.send(db.getMessages())
})

app.post('/chat', {
  handler: (request, reply) => {
    const message = db.createMessage(request.body.message)
    queueMicrotask(() => chat.notify(message))
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

app.get('/chat/sse', (request, reply) => {
  const response = reply.raw

  response.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
  })

  response.write('event: connected\n\n')

  const cleanup = chat.subscribe((message) => {
    response.write(`data: ${JSON.stringify(message)}\n\n`)
  })

  response.on('close', cleanup)
})

app.listen(
  {
    port: 3000,
  },
  (err, addr) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }

    console.log(`Server listening at ${addr}`)
  },
)

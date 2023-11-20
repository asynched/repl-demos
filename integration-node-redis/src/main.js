const fastify = require('fastify')
const { createClient } = require('redis')
const { Database } = require('./database')
const { Observable } = require('./observable')

const app = fastify()
const db = new Database()
const chat = new Observable()

const pub = createClient('redis://localhost:6379')
const sub = createClient('redis://localhost:6379')

Promise.all([pub.connect(), sub.connect()]).then(() => {
  console.log('Connected to Redis')
})

sub
  .subscribe('chat', (message) => chat.notify(message))
  .catch((err) => {
    console.error('Could not subscribe to chat:', err)
    process.exit(1)
  })

app.get('/chat', (request, reply) => {
  reply.send(db.getMessages())
})

app.post('/chat', {
  handler: (request, reply) => {
    const message = db.createMessage(request.body.message)
    pub.publish('chat', JSON.stringify(message))
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

  request.raw.on('close', cleanup)
})

app.listen(
  {
    port: 3000,
  },
  (_, addr) => {
    console.log(`Server listening at ${addr}`)
  },
)

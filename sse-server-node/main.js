const fastify = require('fastify')

const broker = {
  subscribers: new Set(),
  messages: [],
  subscribe(subscriber) {
    this.subscribers.add(subscriber)

    return () => {
      this.subscribers.delete(subscriber)
    }
  },
  publish(message) {
    this.messages.push(message)
  },
  run() {
    setInterval(() => {
      const message = this.messages.shift()

      if (message) {
        this.subscribers.forEach((subscriber) => subscriber(message))
      }
    }, 10)
  },
}

const app = fastify()

broker.run()

app.get('/chat', (req, res) => {
  res.raw.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
  })

  const cleanup = broker.subscribe((message) => {
    res.raw.write(`data: ${JSON.stringify(message)}\n\n`)
  })

  res.raw.write('event: connected\n\n')

  req.raw.on('close', cleanup)
})

app.post('/chat', (req, res) => {
  const message = req.body.message

  broker.publish(message)

  res.send({ status: 'ok' })
})

app.listen(
  {
    port: 8000,
  },
  (_, address) => {
    console.log(`Server listening at ${address}`)
  },
)

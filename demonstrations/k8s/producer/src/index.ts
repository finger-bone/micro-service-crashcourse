import { Hono } from 'hono'
import { connect } from 'amqplib'

const mq = "amqp://user:password@message-queue:5672"

async function connectMq() {
  const connection = await connect(mq)
  const channel = await connection.createChannel()
  await channel.assertQueue('food')
  return channel
}

const channel = connectMq()

const app = new Hono()

app.get('/ping', async (c) => {
  return c.json({ message: 'pong' })
})

app.get('/apple', async (c) => {
  const ch = await channel
  ch.sendToQueue('food', Buffer.from('apple'))
  return c.json({ message: 'apple sent' })
})

app.get('/strawberry/:count?', async (c) => {
  const ch = await channel
  const count = Number.parseInt(c.req.param('count') || '1')
  Array.from({
    length: count
  }).forEach(() => {
    ch.sendToQueue('food', Buffer.from('strawberry'))
  })
  return c.json({ message: 'strawberry sent', count })
})

export default app

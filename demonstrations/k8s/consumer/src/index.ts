import { Hono } from 'hono'
import { connect } from 'amqplib'

const mq = "amqp://user:password@message-queue:5672"

async function connectMq() {
  const connection = await connect(mq)
  const channel = await connection.createChannel()
  await channel.assertQueue('food')
  return channel
}

const channelPromise = connectMq()
const messageQueue: string[] = []

const app = new Hono()

app.get('/ping', async (c) => {
  return c.json({ message: 'pong' })
})

channelPromise.then((ch) => {
  // adds to the messageQueue array endlessly
  ch.consume('food', (msg) => {
    if (msg) {
      messageQueue.push(msg.content.toString())
    }
  }, { noAck: true })
})

app.get('/food', async (c) => {
  return c.json({ messageQueue })
})

export default app
const { Kafka } = require('kafkajs');

// 基础配置
const kafka = new Kafka({
  clientId: 'simple-client',
  brokers: ['localhost:19092', 'localhost:19093', 'localhost:19094'],
  connectionTimeout: 10000,
  retry: { retries: 10 }
});

async function main() {
  // 生产者
  const producer = kafka.producer();
  await producer.connect();
  await producer.send({
    topic: 'simple-topic',
    messages: [{ value: 'Test Message' }],
    acks: -1
  });
  console.log('消息发送成功');

  // 消费者（解决协调器问题关键配置）
  const consumer = kafka.consumer({
    groupId: 'simple-group',
    sessionTimeout: 30000,
    retry: { retries: 15 }
  });
  
  await consumer.connect();
  await consumer.subscribe({ topic: 'simple-topic', fromBeginning: true });

  consumer.run({
    eachMessage: async ({ message }) => {
      console.log(`收到消息: ${message.value}`);
    }
  });

  // 保持运行30秒
  await new Promise(resolve => setTimeout(resolve, 30000));
  await Promise.all([producer.disconnect(), consumer.disconnect()]);
}

main().catch(console.error);
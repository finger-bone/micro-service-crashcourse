const Redis = require('ioredis');
const redis = new Redis({
  host: 'localhost',  // Redis服务器地址
  port: 6379,         // Redis端口
});

// 锁的 key 和过期时间
const LOCK_KEY = 'myLock';
const LOCK_TIMEOUT = 10;  // 10秒过期时间

// 获取分布式锁
async function acquireLock() {
  const lockValue = Math.random().toString(36).substr(2);  // 生成唯一的锁标识
  const result = await redis.set(LOCK_KEY, lockValue, 'NX', 'EX', LOCK_TIMEOUT);

  if (result === 'OK') {
    console.log('Lock acquired successfully');
    return lockValue;
  } else {
    console.log('Failed to acquire lock');
    await new Promise(resolve => setTimeout(resolve, 500)); 
    return acquireLock();
  }
}

// 释放分布式锁
async function releaseLock(lockValue) {
  const currentValue = await redis.get(LOCK_KEY);

  // 只有当当前锁的值与传入的 lockValue 一致时才能释放
  if (currentValue === lockValue) {
    await redis.del(LOCK_KEY);
    console.log('Lock released successfully');
  } else {
    console.log('Failed to release lock: Lock value mismatch');
  }
}

// 模拟任务执行
async function performTask() {
  const lockValue = await acquireLock();

  if (lockValue) {
    try {
      // 执行任务
      console.log('Task is being executed...');
      await new Promise(resolve => setTimeout(resolve, 1000));  // 模拟任务执行时间
    } finally {
      await releaseLock(lockValue);
    }
  } else {
    console.log('Cannot perform task, lock acquisition failed');
  }
}

// 执行任务
for(let i = 0; i < 10; i++) {
  performTask();
}

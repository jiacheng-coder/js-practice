// 4.模拟实现一个 eventEmitter
// 要求实现事件的广播与订阅，并且能够在广播之后发起的订阅依然能够拿到历史的广播数据。
class EventEmitter {
  constructor() {
    this.events = new Map()
  }

  on(type, payload) {
    if (!this.events.has(type)) {
      this.events.set(type, [])
    }
    this.events.get(type).push(payload)
  }

  emit(type, ...args) {
    if (!this.events.has(type)) {
      return
    }
    const payloads = this.events.get(type)
    payloads.forEach(payload => payload(...args))
  }

  // 可以自行拓展更多方法
}

// 使用方法示例
const events = new EventEmitter();
// events.on('ready', (who) => {
//   console.log(`${who} is ready`)
// });
events.on('ready', (who, doingSomething = 'ready') => {
  console.log(`${who} is ${doingSomething}`)
});
events.emit('ready', '1024')
events.emit('ready', 'Lucy', 'eating')

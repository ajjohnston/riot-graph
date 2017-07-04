// @flow

export default function (fn: Function, concurrent: number, timespan: number) {
  const queue = []
  let count = 0
  let dequeue

  function timeout() {
    count -= 1
    if (queue.length) {
      dequeue()
    }
  }

  dequeue = () => {
    count += 1
    const { resolve, args } = queue.shift()
    resolve(fn(...args))
    setTimeout(timeout, timespan * 1000)
  }

  return function limiter(...args: Array<Object>) {
    return new Promise((resolve: any) => {
      queue.push({ args, resolve })
      if (count < concurrent) {
        dequeue()
      }
    })
  }
}

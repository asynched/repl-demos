class Observable {
  constructor() {
    this.listeners = new Set()
  }

  subscribe(listener) {
    this.listeners.add(listener)

    return () => {
      this.listeners.delete(listener)
    }
  }

  notify(value) {
    for (const listener of this.listeners) {
      listener(value)
    }
  }
}

module.exports = {
  Observable,
}

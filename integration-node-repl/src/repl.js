const { default: axios } = require('axios')

class REPLClient {
  constructor(url) {
    this.client = axios.create({
      baseURL: url,
    })
  }

  async publish(topic, message, headers = {}) {
    const response = await this.client.post(`/topics/${topic}`, {
      message,
      headers,
    })

    return response
  }
}

module.exports = {
  REPLClient,
}

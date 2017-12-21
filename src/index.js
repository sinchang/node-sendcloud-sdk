const axios = require('axios')
const BASE_URI = 'http://api.sendcloud.net/apiv2/'

class SendCloud {
  constructor (apiUser, apiKey) {
    if (!apiUser || !apiKey) {
      throw new Error('apiUser and apiKey are required')
    }
    this.apiUser = apiUser
    this.apiKey = apiKey
  }

  get (url, params) {
    return this.request('get', url, params)
  }

  post (url, params) {
    return this.request('post', url, params)
  }

  request (method, url, params = {}) {
    let query = `apiUser=${this.apiUser}&apiKey=${this.apiKey}`
    let apiUrl = ''
    let formData = ''

    if (params.attachments) {
      formData = params.attachments
      delete params.attachments
    }

    Object.keys(params).forEach(i => {
      query += `&${i}=${encodeURIComponent(params[i])}`
    })

    apiUrl = `${BASE_URI}${url}?${query}`

    return axios({
      method,
      url: `${apiUrl}`,
      data: formData
    }).then(res => {
      const data = res.data
      if (data.statusCode !== 200) {
        return Promise.reject(data)
      }
      return Promise.resolve(data)
    }).catch(err => {
      return Promise.reject(err)
    })
  }
}

module.exports = SendCloud

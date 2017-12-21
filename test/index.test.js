import SendCloud from '../src'

const apiUser = CIRCLE_API_USER
const apiKey = CIRCLE_API_KEY

test('main', () => {
  expect(typeof SendCloud).toBe('function')
})

test('get', () => {
  const client = new SendCloud(apiUser, apiKey)
  return client.get('template/list').then(data => {
    expect(data.statusCode).toEqual(200)
  })
})

test('post', () => {
  const client = new SendCloud(apiUser, apiKey)
  return client.post('mail/send', {
    from: 'sinchang@foxmail.com',
    to: 'sinchangwen@gmail.com',
    subject: '来自SendCloud的第一封邮件！',
    html: '你太棒了！你已成功的从SendCloud发送了一封测试邮件，接下来快登录前台去完善账户信息吧！'
  }).then(data => {
    expect(data.statusCode).toEqual(200)
  })
})

test('statusCode not toEqual 200', () => {
  const client = new SendCloud(apiUser, '123')
  return client.get('template/list').catch(data => {
    expect(data.statusCode).not.toEqual(200)
  })
})

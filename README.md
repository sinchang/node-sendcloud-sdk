
# node-sendcloud-sdk

[![NPM version](https://img.shields.io/npm/v/node-sendcloud-sdk.svg?style=flat)](https://npmjs.com/package/node-sendcloud-sdk) [![NPM downloads](https://img.shields.io/npm/dm/node-sendcloud-sdk.svg?style=flat)](https://npmjs.com/package/node-sendcloud-sdk) [![CircleCI](https://circleci.com/gh/sinchang/node-sendcloud-sdk/tree/master.svg?style=shield)](https://circleci.com/gh/sinchang/node-sendcloud-sdk/tree/master)  [![codecov](https://codecov.io/gh/sinchang/node-sendcloud-sdk/branch/master/graph/badge.svg)](https://codecov.io/gh/sinchang/node-sendcloud-sdk)

## Install

```bash
npm i node-sendcloud-sdk
```

## Usage

```js
const Sendcloud = require('node-sendcloud-sdk')

const client = new SendCloud(apiUser, apiKey)

client.get('template/list', params)

// return Promise
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**node-sendcloud-sdk** © [sinchang](https://github.com/sinchang), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by sinchang with help from contributors ([list](https://github.com/sinchang/node-sendcloud-sdk/contributors)).

> [github.com/sinchang](https://github.com/sinchang) · GitHub [@sinchang](https://github.com/sinchang) · Twitter [@sinchangwen](https://twitter.com/sinchangwen)

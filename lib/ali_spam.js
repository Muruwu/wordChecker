'use strict'

const green = require('./ali_green.js');
const { keyWordReasonMap } = require('../constant');


class AliSpam {
  constructor (configs) {
    const _default = {
      greenVersion: '2017-01-12',
      path: '/green/text/scan',
      hostname: 'green.cn-beijing.aliyuncs.com'
    }
    if (!configs.accessKeyId || !configs.accessKeySecret) {
      throw new Error('config filed accessKeyId && accessKeySecret missed')
    }
    this.config = Object.assign(_default, configs);

  }

  checkSpam(text, options) {
    options = typeof options === 'string' ? { userID: options} : options;
    const tasks = [{
      content: text,
      dataId: options.userID,
      time: Date.now(),
    }];

    const requestBody = JSON.stringify({
      bizType: options.bizType,
      scenes: ['antispam'],
      tasks
    });

    const params = Object.assign(this.config, {
      requestBody,
      clientInfo: options.clientInfo || { ip: "127.0.0.1" }
    });

    return new Promise((resosve, reject) => {
      green(params, (err, res) => {
        if(err) return reject(err);
        if (typeof res === 'string') res = JSON.parse(res);
        
        if (res && res.code === 200 && res.data) {          
          const { results } = res.data[0];
          if (!results || !results[0]) return reject('Alispam service get null response, pls contact BE');

          const _res = this._handler(results[0]);
          return resosve(_res)
        }
      })
    })
  }

  _handler(data) {
    let res = {Hit: false, Msg: '通过'},
      _res = {};

    if (data.suggestion != 'pass' && data.label) {
      _res = { Hit: true, Msg: '不通过',reason: keyWordReasonMap[data.label] }
    }

    return Object.assign(res, _res);
  }

}


module.exports = AliSpam;
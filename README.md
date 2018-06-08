# wordChecker
> a easy module for calling ali greenWeb sensitive_text checker /green/text/scan


## description
	检测文本中是否包含以下类型的敏感词

	ad: '广告',
	politics: '渉政',
	abuse: '辱骂',
	porn: '色情',
	terrorism: '暴恐',
	contraband: '违禁',
	high_risk: '高危风险'

## usage
	```
	const Spam = require('ali-senstive-word');

	const spam = Spam({
			  accessKeyId: '**',
			  accessKeySecret: '**',
		});

	// return a promise
	const res = await spam.checkSpam(text, options); 

	可选填option
	options: {
		userId: string,  //辨识id
		bizType: string, //业务类型，调用方从云盾内容安全申请所得。每个bizType对应不同的算法/模型。根据配置，后端可根据该字段对请求做不同处理。
		clientInfo: {
			ip: '127.0.0.1'
			...

		} 				// 客户端信息
	}


	//return { isHit: true, Msg: '不通过', content: 'fuck', reason: '辱骂' }
	or
	//{ isHit: false, Msg: '通过', content: 'hello' }


	```

## License
ISC
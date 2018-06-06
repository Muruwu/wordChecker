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

## useage
	```
	const Spam = require('ali-senstive-word');

	const spam = Spam({
			  accessKeyId: '**',
			  accessKeySecret: '**',
		});

	// return a promise
	const res = await spam.checkSpam(text, options); 
	//{ Hit: true, Msg: '不通过', reason: '辱骂' }
	or
	//{ Hit: false, Msg: '通过', reason: '辱骂' }


	```
# wordChecker
> a easy module for calling ali greenWeb sensitive_text checker /green/text/scan

## use age
	```
	const Spam = require('ali-senstive-word');

	const spam = Spam({
			  accessKeyId: '**',
			  accessKeySecret: '**',
		});

	const res = await spam.checkSpam(text, options); //{ Hit: true, Msg: '不通过', reason: '辱骂' }

	```
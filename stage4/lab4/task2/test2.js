let DB = require('./model.js');
let collectionUsers = new DB('users.json');

collectionUsers.read(function(err){
	
	if(err) console.log(err);

	let obj = collectionUsers.findDataByPropery('login', 'admin');
	console.log('Пароль админа : ' + obj.password);
});

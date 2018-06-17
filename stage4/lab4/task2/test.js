let DB = require('./model.js');

let collectionUsers = new DB('users.json');

user = {
	login:'sasha',
	password:'1234'
};

user1 = {
	login:'admin',
	password:'root'
};


collectionUsers.addData(user);

collectionUsers.addData(user1);


collectionUsers.write(function(err){
	if(err) console.log(err);
	console.log('Данные записаны!');
});

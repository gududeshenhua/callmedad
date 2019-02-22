

exports.connectMysql = function(){
	var mysql = require('mysql');
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'gaowei110',
	  database : 'test'
	});
	connection.connect();
	connection.query('select * from employee_tbl',function(error,results,fields){
		if(error) throw error; 
		console.log(results);   
	}) 
}
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
});

if(process.env.JAWSDB_URL) {
    
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connecrion = mysql.createConnection ({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'mysql://wh98p3tqfbyv3p6s:en67za0b0wx5afut@enqhzd10cxh7hv2e.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/r3din62ky50i3o4z'
    });
};


connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
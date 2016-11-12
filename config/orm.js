var connection = require('../config/connection.js');

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        if (ob.hasOwnProperty(key)) {
            arr.push(key + '=' + ob[key]);
        }
    }

    return arr.toString();
}

var orm = {
    selectAll: function (table, cb) {
        var queryString = 'SELECT * FROM ' + table + ';';
        connection.query(queryString, function (err, result) {
            cb(result);
        });


    },

    insertOne: function (table, columns, values, cb) {
        var queryString = 'INSERT INTO ' + table + ' (' + columns.toString() + ') VALUES (' + printQuestionMarks(values.length) + ') ';

        connection.query(queryString, values, function (err, result) {
            if (err) throw err;
            cb(result);
        });

    },

    updateOne: function (table, objColVals, condition, cb) {
        var queryString = 'UPDATE ' + table + ' SET ' + objToSql (objColVals) + ' WHERE ' + condition;

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;
var paramsConstructor = require('../constructor/paramsConstructor');
var mysqlServerConstructor = require('../constructor/mysqlServerConstructor');

exports.One = function (req, res) {

    //Checking
    if (obj === undefined)
        var obj = new paramsConstructor(req);

    for (var param in obj) {
        var params = obj[param];
        data.push(params);
    }
    data = data.toString()

    //Send data with a constructor
    new mysqlServerConstructor(data);

}
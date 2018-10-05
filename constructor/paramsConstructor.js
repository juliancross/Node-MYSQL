var parser = require('ua-parser-js');

//PERSONNAL FUNCTION/////////////////////////////////////////////////////////////////////////

var getDate = function () {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var todayDate = "'" + year + '-' + month + '-' + day + " " + hour + ':' + minute + ':' + second + "'";
    return todayDate;
}

/////////////////////////////////////////////////////////////////////////////////////////////
function MAIN_PARAMS_CONSTRUCTOR(req) {

    var userDetector = parser(req.headers['user-agent']);

    //SEND TO DB/////////////////////////////////////////////////////////////////////////////
    this.visiteID = req.query.visite_id;
    this.dateVisit = getDate();
    this.platformID = req.query.plat;
    this.campagne = req.query.campagne;
    this.banniere = req.query.banniere;
    this.client = "'" + req.query.client + "'";
    this.urlReferrer = "'" + req.query.url_referrer + "'";
    this.ao = "'" + req.query.ao + "'";
    this.userAgent = "'" + req.query.ua + "'";
    this.dateCourt = "'" + req.query.date_regen.substring(0, 9) + "'";
    this.browser = "'" + userDetector.browser.name + "'";
    this.browserVersion = "'" + userDetector.browser.version + "'";
    this.os = "'" + userDetector.os.name + "'";
    this.osVersion = "'" + userDetector.os.version + "'";
    this.material = "'" + userDetector.device.model + "'";
    this.dateRegen = "'" + req.query.date_regen + "'";

}

module.exports = MAIN_PARAMS_CONSTRUCTOR;
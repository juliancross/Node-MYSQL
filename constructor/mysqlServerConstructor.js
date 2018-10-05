var mysql = require("mysql");


//check if an database is existing if not it is creating one
function SEND_DATA_CONSTRUCTOR(data) {
  var fakeClient = "bonjour";

  var checkIfTable = "CREATE TABLE if not exists daily_" + fakeClient + "_2018_08_28 (id_visiteur VARCHAR(20) primary key, date_visite DATETIME,\
        adl_plateform_id INT(11), adl_plan_id INT(11), adl_support_id INT(11), adl_advertiser_id INT(11),campagne VARCHAR(200), banniere VARCHAR(200),\
        client VARCHAR(200), clientv2 VARCHAR(200), url_referrer VARCHAR(200), url_referrer2 VARCHAR(200), ao VARCHAR(300), ip_visiteur VARCHAR(200),\
        pays VARCHAR(200),  titre VARCHAR(200), nav VARCHAR(20), user_agent VARCHAR(255), version VARCHAR(200), debug VARCHAR(200), date_court DATE,\
        site_web VARCHAR(300), js VARCHAR(300), iframe VARCHAR(200), bot INT(11), old_browser INT(11), mobile INT(11), client_transaction_id VARCHAR(100),\
        hash VARCHAR(100), hash_appnexus VARCHAR(100), size VARCHAR(100), os VARCHAR(100), fake VARCHAR(30), remote_addr VARCHAR(50), tz_offset INT(11),\
        nbprocs INT(11), resolution VARCHAR(20), language VARCHAR(200), id1 VARCHAR(200), id2 VARCHAR(200), id3 VARCHAR(200), id4 VARCHAR(200),\
        id5 VARCHAR(200), id6 VARCHAR(200), id7 VARCHAR(200), id8 VARCHAR(200), id9 VARCHAR(200), id10 VARCHAR(200), id11 VARCHAR(200), id12 VARCHAR(200),\
        id13 VARCHAR(200), id14 VARCHAR(200), id15 VARCHAR(200), id16 VARCHAR(200), id17 VARCHAR(200), id18 VARCHAR(200), id19 VARCHAR(200),\
        id20 VARCHAR(200),user_is_unknow TINYINT(1), user_is_mobile TINYINT(1), user_is_app TINYINT(1), user_is_webview TINYINT(1),\
        user_browser VARCHAR(100), user_browser_version VARCHAR (100), user_app VARCHAR(100), user_app_version VARCHAR(100), user_os  VARCHAR(100),\
        user_os_version VARCHAR(100), user_material VARCHAR(100), bid_price VARCHAR(30), is_popup INT(11), is_safeframe INT(11), date_regen DATETIME,\
        INDEX( adl_plateform_id, adl_plan_id, adl_support_id, adl_advertiser_id, ip_visiteur, pays, date_court, site_web , id1, id2, id3, id4, id5,\
        id6, id7, id8))ENGINE=InnoDB;";

  var insertData = "INSERT INTO daily_" + fakeClient + "_2018_08_28 (id_visiteur, date_visite, adl_plateform_id , campagne, banniere, client,\
        url_referrer, ao , user_agent, date_court, user_browser, user_browser_version, user_os, user_os_version, user_material, date_regen)\
        VALUES ( " + data + ")";

  var mysqlServers = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "yourPassword",
    database: "yourDB"
  });
  mysqlServers.connect(function (err) {
    if (err) console.error("ERREUR DE CONNECTION", err.code);
  });
  mysqlServers.query(checkIfTable, function (err, result) {
    if (!err)
      mysqlServers.query(insertData, function (err, results, fields) {
        if (err) console.log(err.message);
      });
    if (err) {
      console.error(err);
    } else {
      console.log("1 record inserted");
    }
  });
}

module.exports = SEND_DATA_CONSTRUCTOR;

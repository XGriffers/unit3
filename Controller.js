function validation(server, database, user, password) {
  if (server == " " || database == " " || user == " " || password == " ") {
      alert("Fields Should Not Be Empty!");
  }

}
function Connect(server, database, user, password) {
  var connectionString =
    "Data Source=" + server + "\\SQLEXPRESSIT350;Initial Catalog=" + database + ";User ID=" + user + ";Password=" + password + ";Provider=SQLOLEDB";

  //alert(connectionString);

  var Connection = new ActiveXObject("ADODB.Connection");
  Connection.Open(connectionString);

  alert("Connected");
}
function CusomerCount(server, database, user, password) {
  var connectionString =
    "Data Source=" +
    server +
    "\\SQLEXPRESSIT350;Initial Catalog=" +
    database +
    ";User ID=" +
    user +
    ";Password=" +
    password +
    ";Provider=SQLOLEDB";
  var Connection = new ActiveXObject("ADODB.Connection");
  Connection.Open(connectionString);

  var rs = new ActiveXObject("ADODB.Recordset");
  rs.Open("Select count(*) From Customers", Connection);
  rs.MoveFirst

  while (!rs.eof) {
    alert(rs.fields(0));
    rs.movenext;
  }
  rs.close;
  Connection.close;
};
function ShowNames(server, database, user, password) {
  var connectionString =
    "Data Source=" +
    server +
    "\\SQLEXPRESSIT350;Initial Catalog=" +
    database +
    ";User ID=" +
    user +
    ";Password=" +
    password +
    ";Provider=SQLOLEDB";

  var Connection = new ActiveXObject("ADODB.Connection");
  Connection.Open(connectionString);
  var rs = new ActiveXObject("ADODB.Recordset");
  rs.Open("Select CompanyName From Customers ", Connection);
  rs.MoveFirst
  var input = " ";
  while (!rs.eof) {
    input += rs.fields(0) + "\n";
    rs.movenext;
  }
  alert(input);
  rs.close;
  Connection.close;
};
function OrderCount(server, database, user, password) {
  var connectionString =
    "Data Source=" +
    server +
    "\\SQLEXPRESSIT350;Initial Catalog=" +
    database +
    ";User ID=" +
    user +
    ";Password=" +
    password +
    ";Provider=SQLOLEDB";
  var Connection = new ActiveXObject("ADODB.Connection");
  Connection.Open(connectionString);

  var rs = new ActiveXObject("ADODB.Recordset");
  rs.Open("Select count(*) From Orders", Connection);
  rs.MoveFirst

  while (!rs.eof) {
    alert(rs.fields(0));
    rs.movenext;
  }
  rs.close;
  Connection.close;
};
function OrderShipNames(server, database, user, password) {
  var connectionString =
    "Data Source=" +
    server +
    "\\SQLEXPRESSIT350;Initial Catalog=" +
    database +
    ";User ID=" +
    user +
    ";Password=" +
    password +
    ";Provider=SQLOLEDB";
  var Connection = new ActiveXObject("ADODB.Connection");
  Connection.Open(connectionString);

  var rs = new ActiveXObject("ADODB.Recordset");
  rs.Open("Select ShipName From Orders", Connection);
  rs.MoveFirst
  var input = ' ';
  while (!rs.eof) {
    input += rs.fields(0) + "\n";
    rs.movenext;
  }
  alert(input);
  rs.close;
  Connection.close;
};
function EmpNamesCount(server, database, user, password) {
  var connectionString =
    "Data Source=" +
    server +
    "\\SQLEXPRESSIT350;Initial Catalog=" +
    database +
    ";User ID=" +
    user +
    ";Password=" +
    password +
    ";Provider=SQLOLEDB";
  var Connection = new ActiveXObject("ADODB.Connection");
  Connection.Open(connectionString);

  var rs = new ActiveXObject("ADODB.Recordset");
  rs.Open("Select count(*) from Employees", Connection);
  rs.MoveFirst

  while (!rs.eof) {
    alert(rs.fields(0));
    rs.movenext;
  }
  rs.close;
  Connection.close;
};
function EmpNames(server, database, user, password) {
  var connectionString =
    "Data Source=" +
    server +
    "\\SQLEXPRESSIT350;Initial Catalog=" +
    database +
    ";User ID=" +
    user +
    ";Password=" +
    password +
    ";Provider=SQLOLEDB";
  var Connection = new ActiveXObject("ADODB.Connection");
  Connection.Open(connectionString);

  var rs = new ActiveXObject("ADODB.Recordset");
  rs.Open("Select FirstName + ' ' + LastName from Employees Order by LastName asc", Connection);
  rs.MoveFirst
  var input = ' ';
  while (!rs.eof) {
    input += rs.fields(0) + "\n";
    rs.movenext;
  }
  alert(input);
  rs.close;
  Connection.close;
};
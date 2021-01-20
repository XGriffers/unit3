//<!--#include file="adojavas.inc"-->
function Connect(user, password) {
  var connectionString =
    "Data Source=DESKTOP-88339Q2\\SQLEXPRESSIT350;Initial Catalog=Northwind;User ID=" +
    user +
    ";Password=" +
    password +
    ";Provider=SQLOLEDB";

  alert(connectionString);

  var Connection = new ActiveXObject("ADODB.Connection");
  Connection.Open(connectionString);

  alert("Connected");
}
function CountRecords(user, password) {
  var connectionString =
    "Data Source=DESKTOP-88339Q2\\SQLEXPRESSIT350;Initial Catalog=Northwind;User ID=" +
    user +
    ";Password=" +
    password +
    ";Provider=SQLOLEDB";
  var Connection = new ActiveXObject("ADODB.Connection");
  Connection.Open(connectionString);

  var rs = new ActiveXObject("ADODB.Recordset");
  rs.Open("Select count(*) From Customers", Connection);
  rs.MoveFirst;

  while (!rs.eof) {
    alert(rs.fields(0));
    rs.movenext;
  }
  rs.close;
  Connection.close;
}
function ShowNames(user, password) {
  var connectionString =
    "Data Source=DESKTOP-88339Q2\\SQLEXPRESSIT350;Initial Catalog=Northwind;User ID=" +
    user +
    ";Password=" +
    password +
    ";Provider=SQLOLEDB";

  var Connection = new ActiveXObject("ADODB.Connection");
  Connection.Open(connectionString);
  var rs = new ActiveXObject("ADODB.Recordset");
  rs.Open("Select CompanyName From Customers", Connection);
  rs.MoveFirst;
  var input = " ";
  while (!rs.eof) {
    input += rs.fields(0) + "\n";
    rs.movenext;
  }
  rs.close;
  Connection.close;
}

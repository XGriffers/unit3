Use Northwind;

Create Login User_CEO with Password=N'123456', Default_database=Northwind, Check_Expiration=Off, Check_Policy=Off
Create Login User_HR with Password=N'123456', Default_database=Northwind, Check_Expiration=Off, Check_Policy=Off
Create Login User_Sales with Password=N'123456', Default_database=Northwind, Check_Expiration=Off, Check_Policy=Off

Go

Create User User_CEO For Login User_CEO;
Create User User_HR For Login User_HR;
Create User User_Sales For Login User_Sales;

Go

Create Role SalesRole;
Create Role HRRole;
Create Role CEORole;

GO

Grant Select on Orders to CEORole, SalesRole;
Grant Select on Customers to CEORole, SalesRole;
Grant Select on Employees to CEORole, HRRole;

Go

Alter Role CEORole Add Member User_CEO;
Alter Role HRRole Add Member User_HR;
Alter Role SalesRole Add Member User_Sales;

Go
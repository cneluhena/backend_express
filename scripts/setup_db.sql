create table Branch (
    branchID varchar(30) NOT NULL AUTO_INCREMENT ,
    branchName varchar(100),
    managerID varchar(30),
    address varchar(255),
    phone varchar(15),
    email varchar(100),
    CHECK (phone isNumeric())
    PRIMARY KEY (branchID),
    FOREIGN KEY (managerID) references Employee(employeeID) on delete set null
);

create table Employee (
    employeeID varchar(30) NOT NULL AUTO_INCREMENT,
    branchID varchar(30),
    userID varchar(30),
    position varchar(30) check (position in ('Branch_Manager', 'Other')),
    CHECK (phone isNumeric())
    PRIMARY KEY (employeeID),
    FOREIGN KEY (branchID) references Branch(branchID) on delete cascade,
    FOREIGN KEY (userID) references User(userID) on delete cascade
);

create table User (
    userID varchar(30) NOT NULL AUTO_INCREMENT,
    name varchar(100),
    dob date,
    role varchar(30) CHECK (role in ('admin', 'b_manager', 'employee', 'customer')) NOT NULL,
    username varchar(50) NOT NULL,
    email varchar(100),
    password varchar(400) NOT NULL,
    PRIMARY KEY (userID),
);

create table Customer (
    customerID varchar(30) NOT NULL AUTO_INCREMENT,
    nic_br varchar(30),
    address varchar(255),
    phone varchar(15),
    userID varchar(30),
    customerType varchr(30) check (customerType in ('Individual', 'Organization')),
    CHECK (phone isNumeric()),
    PRIMARY KEY (customerID),
    FOREIGN KEY (userID) references User(userID) on delete cascade
);

create table Account (
    accountNo varchar(50) NOT NULL,
    customerID varchar(30),
    accType varchar(10) check (accType in ('Savings', 'Checking')),
    branchID varchar(30),
    balance decimal(15,2),
--  TODO Complete this after reviewing the ER diagram
);

-- TODO Use Triggers to take timestamps on Transactions and other things (And maybe on integrity constraints like manager user employee etc)
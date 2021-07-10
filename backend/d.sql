create table wordbook(
  word varchar(100) not null primary key,
  mean varchar(100),
  pronounce varchar(100),
  created timestamp,
  wrong boolean,
  userId varchar(20),
  category varchar(30),
  testNum int(5),
  foreign key (userId) references user (id),
  foreign key (category) references categories (category),
  foreign key (testNum) references testResults (testNum)
);

create table wordbook(
  word varchar(100) not null primary key,
  mean varchar(100),
  pronounce varchar(100),
  created timestamp,
  wrong boolean,
  userId varchar(20),
  category varchar(30),
  testNum int(5),
  foreign key (userId) references user (id),
  foreign key (category) references categories (category),
  foreign key (testNum) references testResults (testNum)
);


create table wordbook(
  word varchar(100) not null primary key,
  mean varchar(100),
  pronounce varchar(100),
  created timestamp,
  wrong boolean,
  userId varchar(20),
  category varchar(30),
  testNum int(5),
  foreign key (userId) references user (id),
  foreign key (category) references categories (category),
  foreign key (testNum) references testResults (testNum)
);


create table wordbook(
  word varchar(100) not null primary key,
  mean varchar(100),
  pronounce varchar(100),
  created timestamp,
  wrong boolean,
  userId varchar(20),
  category varchar(30),
  testNum int(5),
  foreign key (userId) references user (id),
  foreign key (category) references categories (category),
  foreign key (testNum) references testResults (testNum)
);


alter table word add constraint word_category foreign key (category) references categories (category) on delete cascade on update cascade;
alter table word add constraint word_testNum foreign key (testNum) references testResults (testNum) on delete set null on update cascade;

alter table categories add column userId varchar(20) after category;
alter table categories add constraint fk_category_userId foreign key  (userId) references user (id) ON DELETE CASCADE on update cascade;

alter table testResults add column userId varchar(20) after testNum;
alter table testResults add column testName varchar(30) after userId;
alter table testResults add constraint fk_testResults_userId foreign key  (userId) references user (id) ON DELETE CASCADE on update cascade;


alter table word

create database check_face;
use check_face;
// 建表
create table if not exists img(
   `origin_url` TEXT,
   `switch_url` TEXT,
   `check_res` TEXT,
   `is_switch` int(1),
   `create_time` DATE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
// 插入数据
insert into img (origin_url,is_switch,create_time)
                VALUES
                ('https://csdnimg.cn/cdn/content-toolbar/nationalDay-white.gif',0,'2016-05-06');

// 修改数据,修改1个字段
update img SET switch_url='https://himg.bdimg.com/sys/portrait/item/15a8d0ed5fc1c1fd01.jpg'
where origin_url='https://csdnimg.cn/cdn/content-toolbar/nationalDay-white.gif';
// 修改数据,修改2个字段
update img SET switch_url='https://himg.bdimg.com/sys/portrait/item/15a8d0ed5fc1c1fd01.jpg', is_switch = 1
where origin_url='https://csdnimg.cn/cdn/content-toolbar/nationalDay-white.gif';

// 查询数据
SELECT * FROM img;
SELECT * FROM img where origin_url='https://csdnimg.cn/cdn/content-toolbar/nationalDay-white.gif';

// 删除指定图片
DELETE FROM img WHERE origin_url=3

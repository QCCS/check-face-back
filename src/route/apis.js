const Router = require('koa-router');
const mysqlImg = require('../modal/index');

// 路由配置
const router = new Router();
router
  .get('/test_get', async function loginController(ctx) {
    console.log(ctx);
    ctx.body = {
      res: 'test_get'
    };
  })
  .post('/test_post', async function login1Controller(ctx) {
    console.log(ctx);
    ctx.body = {
      res: 'test_post'
    };
  })
  .post('/del', async function login1Controller(ctx) {
    let {origin_url} = ctx.request.body;
    let sql = `DELETE FROM img WHERE origin_url='${origin_url}'`
    let results = await new Promise((resolve) => {
      mysqlImg.query(sql,
        function (err, results, fields) {
          if (!err) {
            resolve(results)
          } else {
            resolve(err)
          }
        }
      );
    })
    ctx.body = {
      res: 'del',
      results
    };
  })
  .post('/get_all', async function login1Controller(ctx) {
    console.log(ctx);
    let sql = `SELECT * FROM img`
    let results = await new Promise((resolve) => {
      mysqlImg.query(sql,
        function (err, results, fields) {
          if (!err) {
            resolve(results)
          } else {
            resolve(err)
          }
        }
      );
    })
    ctx.body = {
      res: 'save_img',
      results
    };
  })
  .post('/save_img', async function login1Controller(ctx) {
    // 保存图片
    console.log(ctx.request.body);
    let {origin_url} = ctx.request.body;
    let date = new Date().toLocaleDateString()
    let sql = `insert into img (origin_url, is_switch,create_time) VALUES ('${origin_url}',0, '${date}')`
    let results = await new Promise((resolve) => {
      mysqlImg.query(sql,
        function (err, results, fields) {
          if (!err) {
            resolve(results)
          } else {
            resolve(err)
          }
        }
      );
    })
    ctx.body = {
      res: 'save_img',
      results
    };
  })
  .post('/get_check_res', async function login1Controller(ctx) {
    // 获取检测结果
    console.log(ctx.request.body);
    let {origin_url} = ctx.request.body;
    let sql = `SELECT * FROM img where origin_url='${origin_url}'`
    let results = await new Promise((resolve) => {
      mysqlImg.query(
        sql,
        function (err, results, fields) {
          console.log(results); // results contains rows returned by server
          resolve(results)
        }
      );
    })
    ctx.body = {
      res: 'test_post',
      results
    };
  })
module.exports = {router};


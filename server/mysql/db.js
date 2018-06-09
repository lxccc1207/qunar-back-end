// 数据库连接配置
module.exports = {
    mysql: {
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'qunar',
        port: '3306',
        multipleStatements: true //允许执行多条查询,不安全容易被sql注入攻击！！
    }
}
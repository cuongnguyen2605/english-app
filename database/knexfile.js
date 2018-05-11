// Update with your config settings.

module.exports = {
    client    : 'mysql',
    connection: {
        host    : process.env.DB_HOST || 'localhost',
        user    : process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '1',
        database: process.env.DB_DATABASE || 'english_app'
    },
    migrations: {
        tableName: 'migrations'
    }
};

require('dotenv').config()

const envvariables = {
    port: process.env.PORT || 9000,
    nodeEnv: process.env.NODE_EVN || 'development',
    db: {
        port: process.env.DB_PORT || 5432,
        username: process.env.DB_USER || 'postgress',
        password: process.env.DB_PASS || 'root',
        host: process.env.DB_HOST || 'root',
        name: process.env.DB_NAME
    }
}

module.exports=envvariables
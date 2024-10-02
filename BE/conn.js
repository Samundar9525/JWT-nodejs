const { Pool } = require('pg');


const pool = new Pool({
    user: 'postgres.mqoirimlirszfdyektvu',
    host: 'aws-0-ap-southeast-1.pooler.supabase.com',
    database: 'postgres',
    password: 'Sam!@#Nevada123',
    port: 6543,  // Default PostgreSQL port
  });


  module.exports = {
    query: (text, params) => pool.query(text, params),
  };
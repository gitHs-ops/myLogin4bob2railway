const { Pool } = require('pg');

// PostgreSQL 연결 설정
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'logindb',
  password: 'sj1234', // 실제 PostgreSQL 비밀번호로 변경하세요
  port: 5432,
});

// 데이터베이스 테이블 초기화
const initDB = async () => {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Database initialized successfully');
  } catch (err) {
    console.error('Error initializing database:', err);
  } finally {
    client.release();
  }
};

module.exports = { pool, initDB };

// Made with Bob

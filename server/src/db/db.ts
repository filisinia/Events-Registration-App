import Database from 'better-sqlite3';

const dbName = 'events.db';
const db = new Database(dbName);
db.pragma('journal_mode = WAL');

export default db;

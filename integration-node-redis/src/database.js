const SQLite = require('better-sqlite3')

const createMessagesTable = `
CREATE TABLE IF NOT EXISTS "messages" (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  message TEXT NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
`
class Database {
  constructor() {
    this.db = new SQLite('dev.sqlite3')

    this.db.pragma('journal_mode = WAL')

    this.db.exec(createMessagesTable)

    this.createMessageStatement = this.db.prepare(
      `INSERT INTO messages (message) VALUES (?) RETURNING *`,
    )

    this.getMessagesStatement = this.db.prepare(
      `SELECT * FROM messages ORDER BY created_at DESC LIMIT 50`,
    )

    this.getMessageStatement = this.db.prepare(
      `SELECT * FROM messages WHERE id = ?`,
    )
  }

  createMessage(message) {
    const data = this.createMessageStatement.run(message)
    return this.getMessageStatement.get(data.lastInsertRowid)
  }

  getMessages() {
    return this.getMessagesStatement.all()
  }
}

module.exports = {
  Database,
}

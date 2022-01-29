// Singleton = GoF | Factory Method = GoF
export class Database {
  private static DATABASE: Database;
  private constructor(private _host: string, private _user: string, private _password: string) {}

  connect(): void {
    console.log(`Connecting to ${this._host} with user ${this._user} and password ${this._password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.DATABASE) return Database.DATABASE; // a partir do segundo cai no if
    Database.DATABASE = new Database(host, user, password);
    return Database.DATABASE;
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123456');
const db2 = Database.getDatabase('localhost', 'root', '123456');
const db3 = Database.getDatabase('localhost', 'root', '123456');
const db4 = Database.getDatabase('localhost', 'root', '123456');

db1.connect();
db2.connect();
db3.connect();
db4.connect();
// todos retornam mesma instancia -----------

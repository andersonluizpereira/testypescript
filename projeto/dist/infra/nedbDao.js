"use strict";
class DatabaseService {
    constructor(db) {
        this.dbName = 'data.db';
        if (!db) {
            this.connection = new db({
                filename: this.dbName,
                autoload: true
            });
            db.loadDatabase();
            console.log('Banco ' + this.dbName + ' pronto para uso');
        }
    }
    // async openConnection() {
    //   return this.connection.open()
    // }
    // async closeConnection() {
    //   return this.connection.close()
    // }
    getAllUsers() {
        return this.connection.find({}).sort({ titulo: 1 });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DatabaseService;

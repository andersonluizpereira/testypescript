import { MyConnection  } from 'nedb';

class DatabaseService {
  private connection: MyConnection 
  private dbName = 'data.db'

  constructor(db: MyConnection ) {

    if(!db) {
        this.connection = new db({
           filename:this.dbName,
           autoload:true
        });
        db.loadDatabase();
        console.log('Banco ' + this.dbName + ' pronto para uso')
      }
    }
  // async openConnection() {
  //   return this.connection.open()
  // }

  // async closeConnection() {
  //   return this.connection.close()
  // }
 getAllUsers() {
    return this.connection.find({}).sort({titulo: 1})
  }

}

export default DatabaseService;
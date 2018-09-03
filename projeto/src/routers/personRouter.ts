import { Router, Request, Response, NextFunction } from 'express';
import { DatabaseService } from '../infra/nedbDao';

export class PersonRouter {

    router: Router
    private dbService:DatabaseService
 
    constructor(dbService: DatabaseService) {
        this.dbService = dbService;
        this.router = Router();
        this.init();
     
    }


  public async get(req: Request, res: Response, next: NextFunction) {
       
    let users

    try {
        users = this.dbService.getAllUsers();
      
    } catch (error) {
      console.log(error)
    }

    
    //    let resp = this.database(this.databaseService);
            res.json(users);
        }
    

    init() {
        
        this.router.get('/', this.get);
    }
}
const personRouter = new PersonRouter(DatabaseService);
personRouter.init();
export default personRouter.router;
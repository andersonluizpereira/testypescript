"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const express_1 = require('express');
const nedbDao_1 = require('../infra/nedbDao');
class PersonRouter {
    constructor(dbService) {
        this.dbService = dbService;
        this.router = express_1.Router();
        this.init();
    }
    get(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let users;
            try {
                users = this.dbService.getAllUsers();
            }
            catch (error) {
                console.log(error);
            }
            //    let resp = this.database(this.databaseService);
            res.json(users);
        });
    }
    init() {
        this.router.get('/', this.get);
    }
}
exports.PersonRouter = PersonRouter;
const personRouter = new PersonRouter(nedbDao_1.DatabaseService);
personRouter.init();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = personRouter.router;

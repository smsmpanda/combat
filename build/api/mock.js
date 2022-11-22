"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mock = void 0;
const user_1 = require("../models/user");
class Mock {
    constructor() {
        this.Users = [];
    }
    GetUserList() {
        let users = [];
        for (let i = 0; i < 10; i++) {
            users.push(new user_1.User(`User-${i}`, i % 2 == 0 ? 'meal' : 'femeal'));
        }
        return users;
    }
}
exports.Mock = Mock;

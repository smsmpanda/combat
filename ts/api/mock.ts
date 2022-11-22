import { User } from "../models/user";

class Mock {
    private Users: Array<User>[];
    constructor() {
        this.Users = [];
    }

    public GetUserList(): User[] {
        let users = [];
        for (let i = 0; i < 30; i++) {
            users.push(new User(`User-${i}`, i % 2 == 0 ? 'meal' : 'femeal'));
        }
        return users;
    }
}

export { Mock }
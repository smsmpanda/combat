import { User } from "./user";

class Mock {
    private Users: User[];
    constructor() {
        this.Users = [];
    }
    public GetUserList(): User[] {
        let users = [];
        for (let i = 0; i < 30; i++) {
            users.push(new User(i + 1, `User-${i}`, i % 2 == 0 ? 'meal' : 'femeal'));
        }
        this.Users = users;
        return this.Users;
    }

    public GetUserById(id: number): User | null {
        if (this.Users == null || this.Users.length <= 0) {
            return null;
        }
        let index:number = this.Users.findIndex(x => x.ID == id);
        return this.Users[index];
    }
}

export { Mock }
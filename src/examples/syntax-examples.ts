// TypeScript 示例
interface User {
  id: number;
  name: string;
  email?: string;
}

type Status = "active" | "inactive" | "pending";

class UserManager<T extends User> {
  private users: T[] = [];

  constructor(private readonly maxUsers: number = 100) {}

  public addUser(user: T): void {
    if (this.users.length < this.maxUsers) {
      this.users.push(user);
    }
  }

  public getUserById(id: number): T | undefined {
    return this.users.find((user) => user.id === id);
  }
}

// 泛型函数
function identity<T>(arg: T): T {
  return arg;
}

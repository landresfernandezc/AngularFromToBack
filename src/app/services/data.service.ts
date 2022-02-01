import { Injectable } from "@angular/core";
import { User } from "../models/User";

@Injectable({
  providedIn: "root",
})
export class DataService {
  users: User[];
  constructor() {
    this.users = [
      {
        firstName: "Andres",
        lastName: "Fernandez",
        email: "landresf23",
        image: "https://picsum.photos/300/300?random=1",
        registered: new Date("01/01/2018 00:00:00"),
      },
      {
        firstName: "Luis",
        lastName: "Fernandez",
        email: "landresf24",
        image: "https://picsum.photos/300/300?random=2",
        isActive: true,
        registered: new Date("01/01/2017 00:00:00"),
        hide: true,
      },
    ];
  }
  getUsers(): User[] {
    return this.users;
  }
}

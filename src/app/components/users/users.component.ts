import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended:boolean=true;
  loaded:boolean=true;
  constructor() {}

  ngOnInit(): void {
    this.loaded=true;
    this.users=[
      {
        firstName: "Andres",
        lastName: "Fernandez",
        age: 26,
        address: {
          street: "Second right street 50 meters North",
          city: "Alajuela",
          state: "San Ramon",
        },
      },
      {
        firstName: "Luis",
        lastName: "Fernandez",
        age: 26,
        address: {
          street: "Second right street 50 meters North",
          city: "Alajuela",
          state: "San Ramon",
        },
      }
    ]
    this.addUser({
      firstName: "Roberto",
      lastName: "Fernandez",
    })
  }
  addUser(user:User){
    this.users.push(user)
  }
}

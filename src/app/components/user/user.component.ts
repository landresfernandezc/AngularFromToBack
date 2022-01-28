import { Component,OnInit } from "@angular/core";
import { User } from "src/app/models/User";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  //Properties
  user: User ;
  //Methods
  constructor() {
    
  }
  ngOnInit(){
    this.user = {
      firstName: "Andres",
      lastName: "Fernandez",
      age: 26,
      address: {
        street: "Second right street 50 meters North",
        city: "Alajuela",
        state: "San Ramon",
      },
    };
  }
}



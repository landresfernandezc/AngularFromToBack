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
      email:''
    };
  }
}



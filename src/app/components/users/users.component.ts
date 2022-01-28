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
  enableAdd: boolean= true;
  currentClasses={};
  currentStyles={};
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
        image:'https://picsum.photos/300/300?random=1',
        balance:100,
        registered: new Date('01/01/2018 00:00:00')
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
        image:'https://picsum.photos/300/300?random=2',
        isActive:true,
        balance:200,
        registered: new Date('01/01/2017 00:00:00')
      }
    ]
    this.addUser({
      firstName: "Roberto",
      lastName: "Fernandez",
    })
    this.setCurrentClasses();
    this.setCurrentStyles();
  }
  addUser(user:User){
    this.users.push(user)
  }
  setCurrentClasses(){
    this.currentClasses={
      'btn-success':this.enableAdd,
      'big-text':this.showExtended
    }
  }
  setCurrentStyles(){
    this.currentStyles= {
      'padding-top':this.showExtended ?'0':'40px',
      'font-size':this.showExtended?'':'40px'
    }
  }
}

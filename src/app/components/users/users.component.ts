import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  user:User={
    firstName:'',
    lastName:'',
    email:''
  }
  users: User[];
  showExtended:boolean=true;
  loaded:boolean=true;
  enableAdd: boolean= false;
  showUsersForm: boolean= false;
  constructor() {}

  ngOnInit(): void {
    this.loaded=true;
    this.users=[
      {
        firstName: "Andres",
        lastName: "Fernandez",
        email:'landresf23',
        image:'https://picsum.photos/300/300?random=1',
        registered: new Date('01/01/2018 00:00:00')
      },
      {
        firstName: "Luis",
        lastName: "Fernandez",
        email:'landresf24',
        image:'https://picsum.photos/300/300?random=2',
        isActive:true,
        registered: new Date('01/01/2017 00:00:00'),
        hide:true
      }
    ]
  }
  addUser(){
    this.user.isActive=true;
    this.user.registered=new Date();
    this.users.unshift(this.user)
    this.user= {
      firstName:'',
      lastName:'',
      email:''
    }
  }
  fireEvent(e: any){
    console.log("botton clicked",e.type)
  }
  onSubmit(){
    console.log('Submit')
  }
}

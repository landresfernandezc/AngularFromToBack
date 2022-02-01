import { Component, OnInit ,ViewChild} from "@angular/core";
import { NgForm } from "@angular/forms";
import { User } from "src/app/models/User";
import { DataService } from "src/app/services/data.service";

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
  @ViewChild('userForm') form: any;
  data:any;
  constructor(private dataService:DataService) {

  }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data=>{
      console.log(data)
    });
    this.loaded=true;
    this.dataService.getUsers().subscribe(users=>{
      this.users= users;
    });
  }
  fireEvent(e: any){
    console.log("botton clicked",e.type)
  }
  onSubmit({value,valid}:NgForm){
    if(!valid){
      console.log('Form is not valid');
    }else{
      value.isActive=true;
      value.registered=new Date();
      value.hide= true;
      this.users.unshift(value);
    }
    this.form.reset();
  }
}

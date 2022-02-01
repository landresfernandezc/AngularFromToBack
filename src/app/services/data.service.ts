import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { User } from "../models/User";

@Injectable({
  providedIn: "root",
})
export class DataService {
  users: User[];
  data: Observable<any>;
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
  getData(){
    this.data = new Observable(observer=>{
      setTimeout(()=>{
        observer.next(1);
      },1000);
      setTimeout(()=>{
        observer.next(2);
      },2000);
      setTimeout(()=>{
        observer.next(3);
      },3000)
      setTimeout(()=>{
        observer.next(4);
      },4000)
    })
    return this.data;
  }
  getUsers(): Observable<User[]> {
    return  of(this.users);
  }
}

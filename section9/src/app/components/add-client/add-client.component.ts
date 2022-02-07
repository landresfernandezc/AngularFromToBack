import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { Client } from 'src/app/models/Client';
import { ClientService } from 'src/app/services/client.service';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client:Client={
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    balance:0
  }
  disableBalanceOnAdd:boolean = true;
  @ViewChild('clientForm') form:any;
  constructor(private flashMessagesService:FlashMessagesService, private clientService:ClientService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit({value,valid}:NgForm){
    if(this.disableBalanceOnAdd){
      value.balance = 0;
    }
    if(!valid){
      //Show Error
      this.flashMessagesService.show('Please fill out the form correctly',{
        cssClass:'alert-danger', timeout:4000
      })
    }else{
      this.clientService.newClient(value);
      this.flashMessagesService.show('New Client Added',{
        cssClass:'alert-success', timeout:4000
      })
      this.router.navigate(['/']);

    }
  }

}

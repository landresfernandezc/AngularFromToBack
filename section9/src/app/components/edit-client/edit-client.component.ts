import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FlashMessagesService } from "flash-messages-angular";
import { Client } from "src/app/models/Client";
import { ClientService } from "src/app/services/client.service";
import { SettingsService } from "src/app/services/settings.service";
@Component({
  selector: "app-edit-client",
  templateUrl: "./edit-client.component.html",
  styleUrls: ["./edit-client.component.css"],
})
export class EditClientComponent implements OnInit {
  id:string;
  client:Client = {
    firstName:'',
    lastName:'',
    email:'',
    balance:0,
    phone:''
  };
  disabledBalance:boolean;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessageService: FlashMessagesService,
    private settingsService:SettingsService
  ) {}

  ngOnInit(): void {
    //Get id from url
    this.id = this.route.snapshot.params["id"];
    //Get Client
    this.clientService.getClient(this.id).subscribe(client => this.client=client);
    this.disabledBalance= this.settingsService.getSettings().disableBalanceOnEdit;
  }
  onSubmit({value,valid}:NgForm){
    if(!valid){
      this.flashMessageService.show('Please fill out the form correctly',{cssClass:'alert-danger',timeout:4000});
    }else{
      value.id= this.client.id;
      this.clientService.updateClient(value);
      this.flashMessageService.show('Updated succesfully',{cssClass:'alert-success',timeout:4000});
      this.router.navigate([`/client/${this.id}`]);
    }
  }
}

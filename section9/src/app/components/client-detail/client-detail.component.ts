import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FlashMessagesService } from "flash-messages-angular";
import { Client } from "src/app/models/Client";
import { ClientService } from "src/app/services/client.service";

@Component({
  selector: "app-client-detail",
  templateUrl: "./client-detail.component.html",
  styleUrls: ["./client-detail.component.css"],
})
export class ClientDetailComponent implements OnInit {
  client: Client;
  id: string;
  hasBalance: boolean = false;
  showBalanceUpdateInput: boolean = false;
  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessageService: FlashMessagesService
  ) {}

  ngOnInit(): void {
    //Get id from url
    this.id = this.route.snapshot.params["id"];
    //Get Client
    this.clientService.getClient(this.id).subscribe(client => {
      if (client !== null) {
        this.client = client;
        if(client.balance>0){
          this.hasBalance=true;
        }
      }
    });
    console.log(this.client);
  }
  onDeleteClick(){}
}

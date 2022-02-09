import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/Client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  constructor(private clientService:ClientService) { }
  totalOwed:number;
  ngOnInit(): void {
    this.clientService.getClients().subscribe(clients=>{
      this.clients = clients;
      this.totalOwed= Object.values(clients).reduce((t, client) => t + parseFloat(client.balance.toString()), 0)
    })
  }

}

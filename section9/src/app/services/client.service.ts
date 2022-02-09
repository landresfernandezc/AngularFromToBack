import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "angularfire2/firestore";
import { Observable } from "rxjs";
import { Client } from "../models/Client";
@Injectable({
  providedIn: "root",
})
export class ClientService {
  clientsCollection: AngularFirestoreCollection<Client>;
  clientsDoc: AngularFirestoreDocument<Client>;
  clients: Observable<Client[]>;
  client: Observable<Client>;
  constructor(private afs: AngularFirestore) {
    this.clientsCollection = this.afs.collection("clients", (ref) =>
      ref.orderBy("lastName", "asc")
    );
  }
  getClients(): Observable<Client[]> {
    this.clients = this.clientsCollection.snapshotChanges().pipe(map((changes: any[]) => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Client;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
    return this.clients;
  }
  newClient(client:Client){
   this.clientsCollection.add(client);
  }
  getClient(id:string):Observable<Client> {
    this.clientsDoc= this.afs.doc<Client>(`clients/${id}`);
    this.client = this.clientsDoc.snapshotChanges().pipe(map(action=>{
      if(action.payload.exists === false){
        return null as any;
      }else{
        const data=  action.payload.data() as Client;
        data.id= action.payload.id;
        return data;
      }
    }))
    return this.client; 
  }
  updateClient(client:Client){
    this.clientsDoc= this.afs.doc(`clients/${client.id}`);
    this.clientsDoc.update(client);
  }
  deleteClient(id:string){
    this.clientsDoc= this.afs.doc(`clients/${id}`);
    this.clientsDoc.delete();
  }
}

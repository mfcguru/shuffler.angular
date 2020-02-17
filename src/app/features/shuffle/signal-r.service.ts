import { Injectable } from "@angular/core";
import * as signalR from "@aspnet/signalr";
import { ICardModel } from "./card.model";
import { environment } from "src/environments/environment";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class SignalRService {
  private hubConnection: signalR.HubConnection;
  private eventSink = new Subject<ICardModel[]>(); 
  public eventSink$ = this.eventSink.asObservable(); 

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(environment.publicBaseUrl + "/deckHub")
      .build();

    this.hubConnection
      .start()
      .then(() => console.log("Connection started"))
      .catch(err => console.log("Error while starting connection: " + err));
  };

  public startListener = () => {
    this.hubConnection.on("SocketShuffle", data => {
      this.eventSink.next(data);
    });
  };
}
